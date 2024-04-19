<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'id',
        'title',
        'price',
        'description',
        'category',
        'image',
        'rating_rate',
        'count',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
