@extends('layouts.app')

@section('title', 'Уровни активности')

@section('content')

	<levels-index
		v-bind:members="{{ $members }}"
		v-bind:roles="{{ $roles }}"
		v-bind:all="{{ $all }}"
	></levels-index>

@endsection
