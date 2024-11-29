<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        // Initialize Stripe
        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            // Create a payment intent with the total amount (in cents)
            $paymentIntent = PaymentIntent::create([
                'amount' => $request->totalAmount, // Pass the amount from frontend
                'currency' => 'usd', // Currency
                'payment_method_types' => ['card'],
            ]);

            // Return the client secret to the frontend
            return response()->json([
                'clientSecret' => $paymentIntent->client_secret,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
