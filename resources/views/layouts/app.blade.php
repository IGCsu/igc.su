<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="theme-color" content="#202225">
	<meta name="msapplication-TileColor" content="#202225">
	<meta name="yandex-tableau-widget" content="logo=https://igc.su/images/IGC.png, color=#202225" />

	{!! isset($meta) ? $meta : '' !!}

	<title>{{ isset($title) ? $title.' | ' : '' }}IGC</title>
	<link rel="icon" sizes="128x128" type="image/png" href="/images/favicon128.png">

	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

	<!-- Styles -->
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/custom-scrollbar.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/font-icons.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/style.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/animate.css') }}" rel="stylesheet">

	@livewireStyles

	<!-- Scripts -->
	<script src="{{ mix('js/app.js') }}" defer></script>
	<script src="{{ asset('/js/jquery.js') }}"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
</head>
<body class="font-sans antialiased">
	<x-jet-banner />

	<div class="min-h-screen">
		@livewire('navigation-menu')

		<!-- Page Content -->
		<main>
			{{ $slot }}
		</main>
	</div>

	@stack('modals')

	@livewireScripts
</body>
</html>
