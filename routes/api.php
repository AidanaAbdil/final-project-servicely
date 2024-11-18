<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ServiceController;

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

//services route for CRUD:
Route::post('/services', [ServiceController::class, 'index']);