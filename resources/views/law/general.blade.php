@extends('layouts.app')

@section('title', 'Основные положения Устава')

@section('content')

    <div class="law-wrapper container">

        @include('law.components.nav')

        <div class="law-article">

            <div class="law-article-head"></div>

            <div class="law-article-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci beatae, consequatur dolore dolorum ducimus enim est ex in iure laboriosam minima, nam nobis optio praesentium qui rem suscipit temporibus.
            </div>

            <div class="law-article-footer"></div>

        </div>

    </div>

@endsection



