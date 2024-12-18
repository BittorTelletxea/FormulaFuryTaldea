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

    public function setLocale($language)
    {
        // Validar el idioma
        if (!in_array($language, ['eu', 'es'])) {
            return response()->json(['error' => 'Idioma no soportado'], 400);
        }

        // Establecer el idioma en la sesión
        session()->put('locale', $language);
        app()->setLocale($language);

        // Devolver las traducciones o una respuesta vacía
        return response()->json([
            'header' => __('header')  // O cualquier otro conjunto de traducciones
        ]);
    }
}
