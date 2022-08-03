@extends('layouts.app')

@section('title', 'Raw')

@section('content')

    <div class="law-wrapper container">

        @include('law.components.nav')

        <div class="law-article">

            <div class="law-article-head">
                <div></div>
            </div>

            <div class="law-article-text law-raw">
                @foreach($chapters as $chapter)
                    <h2>{{ $chapter['title'] }}</h2>

                    @foreach($chapter['list'] as $lawRow)
                        <div class="law-raw-paragraph law-raw-{{ $lawRow->level }}" field="{{ $lawRow->number }}">
                            <span class="law-raw-number">{{ $lawRow->number }} </span>
                            <span class="law-raw-text">{{ strip_tags($lawRow->text) }}</span>
                        </div>
                    @endforeach
                @endforeach
            </div>

            <div class="law-article-footer"></div>

        </div>

    </div>

@endsection
