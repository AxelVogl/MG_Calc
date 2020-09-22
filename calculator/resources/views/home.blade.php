@extends('master')

@section('title', 'Homepage')

@section('content')

    post a message:

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
    </ul>

@endsection