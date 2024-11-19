<?php

use Illuminate\Support\Facades\Route;

Route::view('/login', 'index');
Route::view('/{path?}', 'index')->where('path', '.*');
