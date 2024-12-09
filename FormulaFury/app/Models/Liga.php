<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Liga extends Model
{
    protected $table = 'bezero_gidari';

    protected $fillable = [
        'izena',
        'partaideak',
    ];

    public function bezeroak() {

        return $this->belongsToMany(Bezeroa::class)
                    ->using(BezeroLiga::class)
                    ->withPivot('erositako_prezioa')
                    ->withTimestamps();

    }
}
