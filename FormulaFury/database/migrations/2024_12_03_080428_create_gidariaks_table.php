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
        Schema::create('gidariak', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->unsignedBigInteger('taldea');
            $table->integer('puntuak');
            $table->unsignedBigInteger('jabea')->nullable();
            $table->string('kategoria');
            $table->integer('balioa');
            $table->integer('erositako_prezioa')->nullable();
            $table->timestamps();
            $table->foreign('taldea')->references('id')->on('taldeak')->onDelete('cascade');
            $table->foreign('jabea')->references('id')->on('bezeroak')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gidariak');
    }
};
