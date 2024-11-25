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
        Schema::create('card_detail', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('card_holder_name');
            $table->integer('card_number');
            $table->integer("CVV");
            $table->string('expiry_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_detail');
    }
};
