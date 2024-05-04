<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
     @extends('layouts.header')
</head>
<body>
    <div id="app">
    @include('layouts.nav')
    <div class="row g-0">
        @include('layouts.side')
        <div style="width:85%;padding:0px">
             <main class="py-4">
                @yield('content')
            </main>
        </div>
    </div>
    </div>

 @extends('layouts.footer')
