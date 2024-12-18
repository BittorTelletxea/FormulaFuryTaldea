<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function switchLanguage($locale)
    {
        if (in_array($locale, ['es', 'eu'])) {
            session(['locale' => $locale]);
        }
        return back();
    }
}
