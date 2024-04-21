<?php

use App\Exports\ProductsExport;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use Maatwebsite\Excel\Facades\Excel;

Route::post('auth/login', [AuthController::class, 'login']);

Route::post('products/import/api', [ProductsController::class, 'importProducts']);

Route::post('products/import', [ProductsController::class, 'importProductsWithExcel']);

Route::get('products/export', function () {
    return Excel::download(new ProductsExport(), 'listaprodutos.csv');
});
Route::get('products', 'App\Http\Controllers\ProductsController@listProducts');


Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});