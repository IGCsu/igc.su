@extends('layouts.app')

@section('title', $election->title)

@section('content')

	<div class="election container">

		<span class="election-page-title">Ваша кандидатура</span>
		<div class="election-page-me election-page-block">
			@empty($candidate[Auth::user()->discord_id])
				<div class="row">
					<div class="col-lg-9 election-page-terms">
						Чтобы подать кандидатуру, необходимо соответствовать следующим условиям:

						<div>
							@if($access->list[0])
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle color-green" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
								</svg>
							@else
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle color-red" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
								</svg>
							@endif
							<span>
								Необходимо иметь роль
								<span style="color: {{ '#'.$needRole->color }}">{{ '@'.$needRole->name }}</span>
								или выше. У вас -
								<span style="color: {{ '#'.$role->color }}">{{ '@'.$role->name }}</span>.
							</span>
						</div>

						<div>
							@if($access->list[1])
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle color-green" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
								</svg>
							@else
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle color-red" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
								</svg>
							@endif
							<span>
								Необходимо иметь активность 100%. У вас - {{ empty($level) ? 0 : $level->getActivityPer() }}%.
							</span>
						</div>

						<div>
							@if($access->list[2])
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle color-green" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
								</svg>
							@else
								<?php $access = false; ?>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle color-red" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
								</svg>
							@endif
							<span>
								Не быть в составе победивших на прошлых выборах.
							</span>
						</div>

					</div>
					<div class="col-lg-3 election-page-button">
						<a href="{{ route('election.registration', $election->date) }}"
							class="election-button @if($access->result) active @endif"
							@if(!$access->result) disabled @endif
						>Подать кандидатуру</a>
					</div>
				</div>
			@else
				<election-candidate
					v-bind:candidate="{{ $candidate[Auth::user()->discord_id] }}"
				></election-candidate>
			@endempty
		</div>

		<span class="election-page-title">Кандидаты на выборы</span>
		<div class="election-page-candidates election-page-block">
			@foreach($candidates as $c => $candidate)
				@if($c !== Auth::user()->discord_id)
					<election-candidate
						v-bind:candidate="{{ $candidate }}"
					></election-candidate>
				@endif
			@endforeach
		</div>

	</div>

@endsection
