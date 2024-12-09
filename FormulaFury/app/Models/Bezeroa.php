<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Bezeroa extends Model
{
    

    protected $table = 'bezeroak';

    protected $fillable = [
        'puntuak',
        'premium',
        'dirua',
        'user_id' 
    ];

    public function grandprix() {
        
        return $this->belongsToMany(Bezeroa::class)
                    ->using(BezeroakGrandPrix::class)
                    ->withPivot('puntuak')
                    ->withTimestamps();

    }

    public function gidariak() {

        return $this->belongsToMany(Gidaria::class)
                    ->using(BezeroGidari::class)
                    ->withPivot('erositako_prezioa')
                    ->withTimestamps();

    }

    public function taldeak() {

        return $this->belongsToMany(Taldea::class)
                    ->using(BezeroTalde::class)
                    ->withPivot('erositako_prezioa')
                    ->withTimestamps();
                    
    }

    public function ligak() {

        return $this->belongsToMany(Liga::class)
                    ->using(BezeroLiga::class)
                    ->withPivot('puntuak')
                    ->withTimestamps();
                    
    }




}
