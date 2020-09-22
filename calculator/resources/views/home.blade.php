@extends('master')

@section('title', 'Homepage')

@section('content')
    <div class="calculator card">
        <input type="text" id="anzeige" class="calculator-screen z-depth-1" value="0"/>
    
        <div class="tasten">

            <button type="button" class="btn op btn-info" value="+">+</button>
            <button type="button" class="btn op btn-info" value="-">-</button>
            <button type="button" class="btn op btn-info" value="*">*</button>
            <button type="button" class="btn op btn-info" value="/">/</button>

            <button type="button" value="7" class="btn no btn-light">7</button>
            <button type="button" value="8" class="btn no btn-light">8</button>
            <button type="button" value="9" class="btn no btn-light">9</button>
            <button type="button" value="4" class="btn no btn-light">4</button>
            <button type="button" value="5" class="btn no btn-light">5</button>
            <button type="button" value="6" class="btn no btn-light">6</button>
            <button type="button" value="1" class="btn no btn-light">1</button>
            <button type="button" value="2" class="btn no btn-light">2</button>
            <button type="button" value="3" class="btn no btn-light">3</button>
            <button type="button" value="0" class="btn no btn-light">0</button>


            <button type="button" class="punkt btn btn-secondary" value=".">.</button>
            <button type="button" class="ac btn btn-danger" value="all-clear">AC</button>
            <button type="button" class="gleich btn btn-secondary" value="=">=</button>
        
        </div>
      </div>
{{-- 
    <form action="/create" method="post">
        <input type="text" name="title" placeholder="Title">
        <input type="text" name="content" placeholder="Content">
        {{ csrf_field() }}
        <button type="submit">Submit</button>
    </form>
    <br>
    Recent calculation:

    <ul>
        @foreach ($messages as $message)
    <li>{{ $message->title }} - {{ $message->content }} </li>
        @endforeach
    </ul> --}}

@endsection