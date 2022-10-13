@extends('layouts.app')

@section('title', $member->name.' - кандидат')

@section('content')

	<div class="election container">

		<election-candidate-page
			v-bind:member="{{ $member }}"
			v-bind:candidate="{{ $candidate }}"
			v-bind:me="'{{ $me }}'"
			@memberUpdate="memberUpdate"
		></election-candidate-page>

	</div>

@endsection
