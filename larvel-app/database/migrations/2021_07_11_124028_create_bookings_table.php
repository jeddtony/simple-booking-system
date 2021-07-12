<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trip_id');
            $table->string('customer_name');
            $table->foreignId('start_location_id');
            $table->foreignId('end_location_id');
            $table->foreignId('vehicle_id');
            $table->foreignId('seat_id');
            $table->string('ticket_code')->unique();
            $table->boolean('is_paid')->default(1);
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
        Schema::dropIfExists('bookings');
    }
}
