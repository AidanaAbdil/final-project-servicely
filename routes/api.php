<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

//services route for CRUD:
Route::get('/services', [ServiceController::class, 'index']);
Route::post('/service/store', [ServiceController::class, 'store']);
Route::get('/service/{id}', [ServiceController::class, 'show']);
Route::get('/categories', [CategoryController::class, 'index']);

