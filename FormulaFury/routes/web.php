<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LanguageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;



Route::get('/', function () {
    return Inertia::render('mainOrriak/loginMain', []);
});

Route::get('/nagusia', function () {
    return Inertia::render('mainOrriak/nagusiaMain', []);
})->name('nagusia');

Route::get('/klasifikazioa', function () {
    return Inertia::render('mainOrriak/klasifikazioaMain', []);
});

Route::get('/kontaktua', function () {
    return Inertia::render('mainOrriak/kontaktuaMain', []);
});

Route::get('/taldea', function () {
    return Inertia::render('mainOrriak/taldeaMain', []);
});
Route::get('/gidariak', function () {
    return Inertia::render('mainOrriak/gidariakMain', []);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/lang/{locale}', [LanguageController::class, 'switchLanguage'])->name('language.switch');
Route::get('/set-locale/{language}', [LanguageController::class, 'setLocale']);



require __DIR__.'/auth.php';
