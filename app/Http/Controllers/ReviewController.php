<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required|max:255'
        ], [

            'comment.max' => 'Maximum number of characters is 255!'
        ]);

        $review = new Review();
        $review->user_id = Auth::id();
        $review->service_id = $request->service_id;
        $review->comment = $request->comment;
        $review->rating = $request->rating;
        $review->save();
    }

    public function get_reviews(Request $request)

    {
        $request->validate([
            'service_id' => 'required|integer|exists:services,id',
        ]);

        $service_reviews = Review::with('service', 'user')->where('service_id', $request->service_id)->get();

        return response()->json([
            'success' => true,
            'reviews' => $service_reviews,
        ]);
    }
}
