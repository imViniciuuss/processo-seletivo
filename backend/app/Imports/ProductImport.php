<?php

namespace App\Imports;

use App\Models\Product;
use \Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {

            $alreadyExistProduct = Product::find(($row['id']));

            if ($alreadyExistProduct){
                $alreadyExistProduct->update([
                    'title' => $row['title'],
                    'price' => $row['price'],
                    'description' => $row['description'],
                    'category' => $row['category'],
                    'image' => $row['image'],
                    'rating_rate' => $row['rating_rate'],
                    'count' => $row['count']
                ]);
            } else {
                Product::create([
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'price' => $row['price'],
                    'description' => $row['description'],
                    'category' => $row['category'],
                    'image' => $row['image'],
                    'rating_rate' => $row['rating_rate'],
                    'count' => $row['count']
                ]);
            }

        }
    }
}
