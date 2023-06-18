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
        Schema::disableForeignKeyConstraints();

        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->dateTime('scheduled_time');
            $table->text('description');
            $table->json('skills_taught');
            $table->string('location')->default('online');
            $table->integer('places_limit');
            $table->unsignedBigInteger('user_id');
            $table->boolean('is_active')->default(true);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};
