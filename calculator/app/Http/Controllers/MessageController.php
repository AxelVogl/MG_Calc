<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function create(Request $request) {
        $message = new Message();
        $message->content = $request->content;

        $message->save();

        return redirect('/');
    }
}
