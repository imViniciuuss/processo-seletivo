<?php

namespace App\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class ExcelServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {

      $loader = AliasLoader::getInstance();

       Maatwebsite\Excel\ExcelServiceProvider::class;


      $loader->alias('Excel', Maatwebsite\Excel\Facades\Excel::class);

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
