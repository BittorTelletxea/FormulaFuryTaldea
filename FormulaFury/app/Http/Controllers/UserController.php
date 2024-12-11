<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Bezeroa;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
       
        $users = User::get();

        
        return view('welcome', compact('users'));
    }

    public function register() {

        $izena = $_POST['erabiltzailea'];
        $pasahitza = $_POST['pasahitza'];
        $email = $_POST['email'];
        $mota = "bezeroa";


        User::create($izena, $email, $pasahitza, $mota);
        $erabiltzaileak = User::get();

        $userId = count($erabiltzaileak);
        Bezeroa::create(0, 0, 100000000, $userId);
        
    }
}

