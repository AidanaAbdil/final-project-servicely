<?php

namespace App\Http\Controllers;

use App\Models\CardDetail;
use Illuminate\Http\Request;

class CardDetailController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            'card_number' => 'required|string|max:20',
            'expiry_month' => 'required|string',
            'CVV' => 'required|string',
            'card_holder_name' => 'required|string',

        ]);



        $card_detail = new CardDetail();
        $card_detail->card_number = $request->card_number;
        $card_detail->expiry_month = $request->expiry_month;
        $card_detail->CVV = $request->CVV;
        $card_detail->card_holder_name = $request->card_holder_name;


        $card_detail->save();
    }
}
