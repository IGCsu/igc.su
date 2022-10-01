@extends('layouts.app')

@section('title', 'Social')

@section('content')

    <div class="law-wrapper container">

        @include('law.components.nav')

        <div class="law-article">

            <div class="law-article-head">
                <div></div>
            </div>

            <div class="law-article-text law-social">
                @foreach($data as $lawRow)
                    <div class="law-article-text-paragraph law-article-text-{{ $lawRow->level }}" field="{{ $lawRow->number }}">
                        <small>{{ $lawRow->number }}</small><span>{!! $lawRow->text !!}</span></div>
                @endforeach
            </div>

            <div class="law-article-footer"></div>

        </div>

    </div>

@endsection
