<?php
	$elections = DB::table('elections')->groupBy('date')->orderBy('id', 'desc')->get();
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#202225">
	<meta name="msapplication-TileColor" content="#202225">
	<meta name="yandex-tableau-widget" content="logo=https://igc.su/images/IGC.png, color=#202225" />

	<title>IGC</title>
	<link rel="icon" sizes="128x128" type="image/png" href="/images/favicon128.png">

	<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<link rel="stylesheet" href="{{ mix('css/welcome.css') }}">
</head>
<body class="antialiased">
	<div class="relative flex justify-center min-h-screen items-center py-4 sm:pt-0">
		<div class="fixed top-0 right-0 px-6 py-4 block">
			@auth
				<a class="text-sm">{{ Auth::user()->name }}</a>
			@else
                <small>Авторизация не доступна</small>
{{--				<a href="{{ route('login') }}" class="text-sm">Вход</a>--}}
			@endauth
		</div>

		<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">

			<div id="logo">
				<span class="deg-0">
					<img src="/images/IGC.png">
					<i class="shadow-yellow"></i>
					<i class="shadow-blue"></i>
					<i class="shadow-pink"></i>
				</span>
				<h1>IGC</h1>
			</div>

			<div class="links">
				<a href="https://discordapp.com/invite/htBgEU5">Discord</a>
				<a href="https://challonge.com/ru/communities/433242520034738186">Challonge</a>
				<a href="{{ route('rules.get') }}">Устав</a>
				<a href="{{ route('senate.get') }}">Сенат</a>
				<a href="{{ route('levels') }}">Уровни</a>
			</div>

			<div class="links">
				<span>Выборы:</span>
				@foreach($elections as $election)
					<a href="{{ route('elections.get', $election->date) }}">{{ $election->date }}</a>
				@endforeach
			</div>

		</div>
	</div>

	<script src="/js/jquery.js"></script>

	<script>
		let deg = 0;
		let $img = $('#logo > span');
		$img.on('click', e => {
			$img[0].classList.remove('deg-' + deg);
			deg += 120;
			if(deg >= 360) deg = 0;
			$img[0].classList.add('deg-' + deg);
		});
	</script>

</body>
</html>
