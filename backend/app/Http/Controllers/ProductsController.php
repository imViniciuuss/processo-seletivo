<?php

namespace App\Http\Controllers;

use App\Exports\ProductsExport;
use App\Imports\ProductImport;
use App\Imports\ProductsImport;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Maatwebsite\Excel\Facades\Excel;

class ProductsController extends Controller
{
    public function importProducts(Request $request)
    {
        $request->headers->set("accepts", "application/json");
        $response = Http::withoutVerifying()->get('https://fakestoreapi.com/products');

        if ($response->getStatusCode() == 200) {
            $products = $response->json();

            foreach ($products as $productData) {
                Product::create([
                    'id'=> $productData['id'],
                    'title' => $productData['title'],
                    'price' => $productData['price'],
                    'description' => $productData['description'],
                    'category' => $productData['category'],
                    'image' => $productData['image'],
                    'rating_rate' => $productData['rating']['rate'],
                    'count' => $productData['rating']['count'],

                ]);
            }

            return response()->json([
                'message' => 'Produtos importados com sucesso!'
            ]);
        } else {
            return response()->json([
                'message' => 'Erro ao importar os produtos'
            ], $response->status());
        }
    }

    public function importProductsWithExcel(Request $request)
    {
        try {
            $request->validate([
                'file' => 'required|file|mimes:csv'
            ]);

            $file = $request->file('file');

            Excel::import(new ProductImport(), $file);
            return response()->json(['message' => 'Dados do Excel importados com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocorreu um erro ao importar os dados: ' . $e->getMessage()], 500);
        }
    }

    public function listProducts()
    {
        $products = Product::all();

        return response()->json($products);
    }
}
