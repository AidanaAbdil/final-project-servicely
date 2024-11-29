<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\ReviewController;


use App\Http\Controllers\PaymentController;

// Route::middleware('auth')->get('/user', function (Request $request) {
//     return $request->user();
// });

//services route for CRUD:
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/featured', [ServiceController::class, 'getFeaturedServices']);
Route::post('/service/store', [ServiceController::class, 'store']);
Route::get('/service/{id}', [ServiceController::class, 'show']);
Route::get('/search', [ServiceController::class, 'search']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/profile/{id}', [UserProfileController::class, 'show']);
Route::post('/profile/{id}/update', [UserProfileController::class, 'update']);
Route::post('/profile/{id}/update-image', [UserProfileController::class, 'updateImage']);
Route::post('/add-to-cart', [ServiceController::class, 'addToCart']);
Route::get('/get-cart', [ServiceController::class, 'getCart']);
Route::post('/remove-from-cart', [ServiceController::class, 'removeFromCart']);
Route::post('/add-review', [ReviewController::class, 'store']);
Route::get('/list-review', [ReviewController::class, 'get_reviews']);
Route::post('/clear-cart', [ServiceController::class, 'clearCart']);
Route::post('/create-payment-intent', [PaymentController::class, 'createPaymentIntent']);
