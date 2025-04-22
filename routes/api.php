<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\AuthController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Protected Movie Routes
Route::middleware('auth:api')->group(function () {
    Route::get('/v1/movies', [MovieController::class, 'index']);
    Route::post('/v1/movies', [MovieController::class, 'store']);
});

// Authentication Routes
Route::post('/v1/login', [AuthController::class, 'login']);
Route::post('/v1/logout', [AuthController::class, 'logout']);
