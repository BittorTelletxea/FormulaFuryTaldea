<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gidaria extends Model
{
    protected $table = 'gidariak';

    protected $fillable = [
        'izena',
        'taldea',
        'puntuak',
        'jabea',
        'kategoria',
        'balioa'
    ];

    public function bezeroa() {

        return $this->belongsTo(Bezeroa::class);

    }

    public function taldea() {

        return $this->belongsTo(Taldea::class);
    }

    public function puntuakGidariak() {

        return $this->hasMany(PuntuakGidaria::class);
    }


}
