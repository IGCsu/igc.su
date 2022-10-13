@extends('layouts.app')

@section('title', $member->name.' - кандидат')

@section('content')

	<div class="election container">

		<div class="election-candidate">

			<div class="election-candidate-data">
				<img class="col-2 election-candidate-avatar" src="https://cdn.discordapp.com/{{ $member->avatar }}" alt="">
				<span class="col-10 election-candidate-name">
					<div>{{ $member->name }}</div>
					<small>#{{ $member->discriminator }}</small>
				</span>
			</div>

			<div class="election-candidate-desc">{{ $candidate->desc }}</div>

			<div class="row">

			</div>

		</div>

	</div>

@endsection
