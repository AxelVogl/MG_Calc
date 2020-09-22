<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\Message;

class HomeController extends Controller
{
   public function index() {
        $messages = Message::all();

        foreach($messages as $message) {
            echo $message->title;
        }die;


       return view('home');
   }
}
