<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render("mainOrriak/loginMain", []);
});*/


Route::get('/', function () {
    return view('welcome');
});