<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trip_destinations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('start_location');
            $table->foreignId('end_location');
            $table->integer('duration_in_hours');
            $table->unique(['start_location', 'end_location']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_destinations');
    }
}
