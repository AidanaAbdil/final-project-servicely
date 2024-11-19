<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

//services route for CRUD:
Route::post('/services', [ServiceController::class, 'store']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

