<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\TripDestinationController;
use App\Http\Controllers\VehicleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/login', function () {
    return response()->json('Invalid auth', 401);
})->name('login');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/vehicle', [VehicleController::class, 'store']);
    Route::get('/vehicles', [VehicleController::class, 'index']);

    Route::post('/location', [LocationController::class, 'store']);
    Route::get('/locations', [LocationController::class, 'index']);
    Route::get('/locations/except/{locationId}', [LocationController::class, 'getLocationsExcept']);
    
    Route::get('/vehicle/{vehicleId}/seats', [SeatController::class, 'index']);

    Route::post('/trip-destination', [TripDestinationController::class, 'store']);

    Route::post('/trip', [TripController::class, 'store']);
    Route::get('/trips', [TripController::class, 'index']);

    Route::post('/booking', [BookingController::class, 'store']);
    Route::get('/bookings', [BookingController::class, 'index']);

    Route::get('/states', [StateController::class, 'index']);

    
});
