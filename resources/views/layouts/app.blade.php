<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="theme-color" content="#202225">
    <meta name="msapplication-TileColor" content="#202225">
    <meta name="yandex-tableau-widget" content="logo={{ asset('/images/favicon128.png') }}, color=#202225" />

    @yield('meta')

    @hasSection('navigation')
        <title>@yield('title') | IGC new</title>
    @else
        <title>IGC new</title>
    @endif

    <link rel="icon" sizes="128x128" type="image/png" href="{{ asset('/images/favicon128.png') }}">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>

    @include('components.loader')

    <div id="app">
        @include('components.navbar')

        <main>
            @yield('content')
        </main>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
