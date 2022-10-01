@extends('layouts.app')

@section('title', 'Устав')

@section('content')

    <div class="law-wrapper container">

        <div class="law-text">
            <p>{!! $data['i.1']->text !!}</p>
            <p>{!! $data['i.1.1']->text !!}</p>
            <p>{!! $data['i.1.2']->text !!}</p>
        </div>

        <div class="law-index">

            @foreach($chapters as $key => $chapter)
                @if($chapter['icon'])
                    <a class="law-index-item {{ $chapter['status'] ? '' : 'law-index-disable' }}" href="{{ route('law', ['chapter' => $key]) }}">
                        <i class="law-index-icon bi bi-{{ $chapter['icon'] }}"></i>
                        <div class="law-index-title">{{ $chapter['title'] }}</div>
                        <div class="law-index-desc">{!! $chapter['desc'] !!}</div>
                    </a>
                @endif
            @endforeach

        </div>
    </div>

@endsection



