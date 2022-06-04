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

	{{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}

	<style>
		body {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-family: 'Nunito', sans-serif;
			padding: 0 !important;
			margin: 0 !important;
			color: #fff;
		}
		body > .min-h-screen {
			background: #202225 !important;
			position: relative;
			display: flex;
			min-height: 100vh;
			align-items: center;
			justify-content: center;
		}
		body > .min-h-screen > div {
			margin-left: auto;
			margin-right: auto;
			max-width: 72rem;
		}
		@media (min-width: 640px){
			.sm\:px-6 {
				padding-left: 1.5rem;
				padding-right: 1.5rem;
			}
		}
		@media (min-width: 1024px){
			.lg\:px-8 {
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
		#logo {
			padding-left: 5rem;
			position: relative;
			width: fit-content;
			user-select: none;
			margin: 0 auto;
		}
		#logo > span {
			height: 10rem;
			position: absolute;
			cursor: pointer;
			transition: 0.3s;
			left: -3rem;
			top: -65%;
			outline: none;
			-webkit-tap-highlight-color: transparent;
		}
		#logo > span.deg-0 { transform: rotate(0deg); }
		#logo > span.deg-120 { transform: rotate(480deg); }
		#logo > span.deg-240 { transform: rotate(960deg); }
		#logo > span > img {
			filter: drop-shadow(0px 0px 1px #fff);
			height: 100%;
		}
		#logo > span > i {
			position: absolute;
			transition: 0.2s;
		}
		#logo > span > .shadow-yellow {
			box-shadow: -15px 0px 100px 61px #ecea9c30;
			top: 50%;
			right: 0;
		}
		#logo > span:hover > .shadow-yellow { box-shadow: -15px 0px 100px 61px #ecea9c40; }
		#logo > span > .shadow-blue {
			box-shadow: 15px -15px 100px 61px #81d3df30;
			bottom: 0;
			left: 23%;
		}
		#logo > span:hover > .shadow-blue { box-shadow: 15px -15px 100px 61px #81d3df40; }
		#logo > span > .shadow-pink {
			box-shadow: 15px 15px 100px 61px #ffaad530;
			left: 20%;
			top: 0;
		}
		#logo > span:hover > .shadow-pink { box-shadow: 15px 15px 100px 61px #ffaad540; }
		#logo > h1 {
			font-size: 7rem;
			font-weight: 900;
			display: inline-block;
			text-shadow: 0px 0px 3px #fff;
			margin: 0;
			line-height: 28px;
		}
		#logo > h1 > small {
			font-size: 20px;
			margin-left: 8px;
			white-space: nowrap;
		}
		.links a:hover { color: #70aacf; }
		#login {
			position: fixed;
			right: 0px;
			top: 0px;
			display: block;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			margin-left: auto;
			margin-right: auto;
			max-width: 72rem;
		}
		#login a {
			color: inherit;
			text-decoration: inherit;
			cursor: default;
		}
		#login a:hover { color: #70aacf; }
	</style>
</head>
<body class="antialiased">
	<div class="relative flex justify-center min-h-screen items-center py-4 sm:pt-0">

		<div id="login" style="opacity: 0;" class="fixed top-0 right-0 px-6 py-4 block">
			@auth
				<a href="{{ url('/dashboard') }}" class="text-sm">{{ Auth::user()->name }}</a>
			@else
				<a href="{{ route('login') }}" class="text-sm">Вход</a>
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
				<h1>IGC<br><small>Сайт закрыт на реворк...</small></h1>
			</div>

		</div>
	</div>

	<script src="/js/jquery.js"></script>

	<script>
		let deg = 0;
		let $img = $('#logo > span');
		var $login = $('#login');
		$img.on('click', e => {
			$img[0].classList.remove('deg-' + deg);
			deg += 120;
			if(deg >= 360) deg = 0;
			$img[0].classList.add('deg-' + deg);
			$login.css('opacity', Number($login.css('opacity')) * 2 + 0.005);
		});
	</script>

</body>
</html>
