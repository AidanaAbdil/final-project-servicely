<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/api/user', [UserController::class, 'getUser']);
Route::view('/{path?}', 'index')->where('path', '.*');
