<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Bezeroa;
use App\Models\Taldea;
use App\Models\Gidaria;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crea un usuario
        User::create([
            'izena' => 'Iker Atxaga',
            'email' => 'atxaga@example.com',
            'pasahitza' => '1234',
            'mota' => 'bezero',
        ]);

        // Crea un registro en la tabla Bezeroa
        Bezeroa::create([
            'puntuak' => 0,
            'premium' => 0,
            'dirua' => 100000000,
            'user_id' => 1
        ]);

        // Crea un registro en la tabla Taldea
        Taldea::create([
            'izena' => 'Ferrari',
            'gidariak' => 1,
            'kotxea' => 'sf24',
            'puntuak' => 0,
            'jabea' => 1,
            'balioa' => 50000000
        ]);

        // Crea un registro en la tabla Gidaria
        Gidaria::create([
            'izena' => 'Charles Leclerc',
            'taldea' => 1,
            'puntuak' => '500',
            'jabea' => 1,
            'kategoria' => 'f1',
            'balioa' => 17000000
        ]);
    }
}
