<?php

	$elections = DB::table('elections')->groupBy('date')->orderBy('id', 'desc')->get();

?>

<nav x-data="{ open: false }">
	<!-- Primary Navigation Menu -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-10">
			<div class="flex">
				<!-- Logo -->
				<div class="flex-shrink-0 flex items-center">
					<a href="/" style="height: 100%;" >
						<x-jet-application-mark class="block h-9 w-auto" />
					</a>
				</div>

				<!-- Navigation Links -->
				<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
					<x-jet-nav-link href="{{ route('rules.get') }}" :active="request()->routeIs('rules')">
						Устав
					</x-jet-nav-link>
					{{-- <x-jet-nav-link href="{{ route('donation') }}" :active="request()->routeIs('donation')">
						Поддержка
					</x-jet-nav-link> --}}
					<x-jet-nav-link href="{{ route('senate.get') }}" :active="request()->routeIs('senate')">
						Сенат
					</x-jet-nav-link>
					<x-jet-nav-link href="{{ route('levels') }}" :active="request()->routeIs('levels')">
						Уровни
					</x-jet-nav-link>
					<x-jet-dropdown align="right" width="48" class="nav-dropdown">
						<x-slot name="trigger">
							<x-jet-nav-link>Выборы</x-jet-nav-link>
						</x-slot>
						<x-slot name="content">
							@foreach($elections as $election)
								<x-jet-dropdown-link href="{{ route('elections.get', $election->date) }}">{{ $election->date }}</x-jet-dropdown-link>
							@endforeach
						</x-slot>
					</x-jet-dropdown>
				</div>
			</div>

			<div class="hidden sm:flex sm:items-center sm:ml-6">

				<!-- Settings Dropdown -->
				<div class="ml-3 relative">
					@auth
						<x-jet-dropdown align="right" width="48">
							<x-slot name="trigger">
								<button class="auth flex text-sm transition justify-center items-center">
									<img class="h-8 w-8 rounded-full object-cover" src="{{ Auth::user()->avatar }}" /> {{ Auth::user()->name }}
								</button>
							</x-slot>

							<x-slot name="content">
								<form method="POST" action="{{ route('logout') }}">
									@csrf

									<x-jet-dropdown-link href="{{ route('logout') }}" onclick="event.preventDefault(); this.closest('form').submit();">
										Выйти
									</x-jet-dropdown-link>
								</form>
							</x-slot>
						</x-jet-dropdown>
					@else
						<a href="{{ route('login') }}" class="auth flex text-sm transition">Вход</a>
					@endauth
				</div>
			</div>

			<!-- Hamburger -->
			<div class="-mr-2 flex items-center sm:hidden">
				<button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition">
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						<path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Responsive Navigation Menu -->
	<div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
		<div class="pt-2 pb-3 space-y-1">
			<x-jet-responsive-nav-link href="{{ route('rules.get') }}" :active="request()->routeIs('rules')">
				Устав
			</x-jet-responsive-nav-link>
			{{-- <x-jet-responsive-nav-link href="{{ route('donation') }}" :active="request()->routeIs('donation')">
				Поддержка
			</x-jet-responsive-nav-link> --}}
			<x-jet-responsive-nav-link href="{{ route('senate.get') }}" :active="request()->routeIs('senate')">
				Сенат
			</x-jet-responsive-nav-link>
			<x-jet-responsive-nav-link href="{{ route('levels') }}" :active="request()->routeIs('levels')">
				Уровни
			</x-jet-responsive-nav-link>
			<div style="border-top: 1px solid #fff3"></div>
			<span class="responsive-nav-link-head">Выборы:</span>
			@foreach($elections as $election)
				<x-jet-responsive-nav-link href="{{ route('elections.get', $election->date) }}">{{ $election->date }}</x-jet-responsive-nav-link>
			@endforeach
			<div style="border-top: 1px solid #fff3"></div>
		</div>

		<!-- Responsive Settings Options -->
		@auth
			<div class="pt-4 pb-1">
				<div class="flex items-center px-4">
					<div class="flex-shrink-0 mr-3">
						<img class="h-10 w-10 rounded-full object-cover" src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}" />
					</div>

					<div>
						<div class="font-medium text-base">{{ Auth::user()->name }}</div>
					</div>
				</div>

				<div class="mt-3 space-y-1">
					<form method="POST" action="{{ route('logout') }}">
						@csrf
						<x-jet-responsive-nav-link href="{{ route('logout') }}" onclick="event.preventDefault(); this.closest('form').submit();">
							Выход
						</x-jet-responsive-nav-link>
					</form>
				</div>
			</div>
		@else
			<x-jet-responsive-nav-link href="{{ route('login') }}">
				Вход
			</x-jet-responsive-nav-link>
		@endauth

	</div>
</nav>
