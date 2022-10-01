@extends('layouts.app')

@section('title', 'Orders')

@section('content')

    <div class="law-wrapper container">

        @include('law.components.nav')

        <div class="law-article">

            <div class="law-article-head">
                <div></div>
            </div>

            <div class="law-article-text law-orders">
                @foreach($data as $lawRow)
                    <div class="law-article-text-paragraph {{ $lawRow->field[1] == 0 ? '' : 'law-article-text-order' }} law-article-text-{{ $lawRow->level }}" field="{{ $lawRow->number }}">
						<small>{{ $lawRow->number }}</small><span>{!! $lawRow->text !!}</span></div>
                @endforeach
            </div>

            <div class="law-article-footer"></div>

        </div>

    </div>

@endsection
