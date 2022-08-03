@extends('layouts.app')

@section('title', 'Roles')

<?php

    $colors = [
        'r.1' => [ 'html' => '', 'colors' => [] ],
        'r.2' => [ 'html' => '', 'colors' => [] ],
        'r.3' => [ 'html' => '', 'colors' => [] ],
        'r.4' => [ 'html' => '', 'colors' => [] ],
        'r.5' => [ 'html' => '', 'colors' => [] ],
        'r.6' => [ 'html' => '', 'colors' => [] ],
        'r.7' => [ 'html' => '', 'colors' => [] ],
        'r.8' => [ 'html' => '', 'colors' => [] ],
        'r.9' => [ 'html' => '', 'colors' => [] ],
        'r.10' => [ 'html' => '', 'colors' => [] ],
    ];

    foreach($colors as $c => $color){

        foreach($data as $lawRow){
            if($lawRow->number !== $c && strripos($lawRow->number, $c.'.') === false) continue;

            $colors[$c]['html'] .= '<div class="law-article-text-paragraph law-article-text-'.$lawRow->level.'" field="'.$lawRow->number.'"><small>'.$lawRow->number.'</small>'.$lawRow->text.'</div>';

            if(preg_match('/style="color:\s(#[abcdef0-9]+)">/i', $lawRow->text, $matches)){
                $colors[$c]['colors'][] = $matches[1];
            }
        }

        $colors[$c]['colors'] = count($colors[$c]['colors']) > 1
            ? 'linear-gradient('.implode(',', $colors[$c]['colors']).')'
            : $colors[$c]['colors'][0] ?? '';
    }

?>

@section('content')

    <div class="law-wrapper container">

        @include('law.components.nav')

        <div class="law-article">

            <div class="law-article-head">
                <div></div>
            </div>

            <div class="law-article-text law-roles">
                @foreach($colors as $color)
                    <div class="law-roles-item">
                        <div class="law-roles-color" style="background: {{ $color['colors'] }}"></div>
                        <div class="law-roles-text">{!! $color['html'] !!}</div>
                    </div>
                @endforeach
            </div>

            <div class="law-article-footer"></div>

        </div>

    </div>

@endsection
