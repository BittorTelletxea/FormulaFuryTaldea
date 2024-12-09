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

    public function bezeroak() {

        return $this->belongsToMany(Bezeroa::class)
                    ->using(BezeroGidari::class)
                    ->withPivot('erositako_prezioa')
                    ->withTimestamps();

    }

    public function taldeak() {

        return $this->belongsTo(Taldea::class);
    }

    public function puntuakGidariak() {

        return $this->hasMany(PuntuakGidaria::class);
    }


}
