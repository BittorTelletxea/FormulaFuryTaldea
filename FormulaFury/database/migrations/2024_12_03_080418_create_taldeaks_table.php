<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('taldeak', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->json('gidariak');
            $table->string('kotxea');
            $table->integer('puntuak');
            $table->foreignId('jabea')->references('id')->on('bezeroak')->onDelete('cascade');
            $table->integer('balioa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('taldeak');
    }
};
