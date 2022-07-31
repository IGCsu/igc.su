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

            <a class="law-index-item" href="{{ route('law', ['chapter' => 'general']) }}">
                <i class="law-index-icon bi bi-star"></i>
                <div class="law-index-title">General</div>
                <div class="law-index-desc">Общие положения, основные принципы сообщества.<br>Права и обязанности участников.</div>
            </a>

            <a class="law-index-item" href="{{ route('law', ['chapter' => 'social']) }}">
                <i class="law-index-icon bi bi-chat-heart"></i>
                <div class="law-index-title">Social</div>
                <div class="law-index-desc">Требования и рекомендации к общению в чате.</div>
            </a>

            <a class="law-index-item" href="">
                <i class="law-index-icon bi bi-shield-exclamation"></i>
                <div class="law-index-title">Orders</div>
                <div class="law-index-desc">Свод правил и пояснение к ним.</div>
            </a>

            <a class="law-index-item" href="">
                <i class="law-index-icon bi bi-bank"></i>
                <div class="law-index-title">Management</div>
                <div class="law-index-desc">Органы управления сообществом.</div>
            </a>

            <a class="law-index-item" href="">
                <i class="law-index-icon bi bi-gear"></i>
                <div class="law-index-title">Bots</div>
                <div class="law-index-desc">О функциональности и возможностях ботов.</div>
            </a>

            <a class="law-index-item" href="">
                <i class="law-index-icon bi bi-gem"></i>
                <div class="law-index-title">Roles</div>
                <div class="law-index-desc">Описание ролей и принципы их проектирования.</div>
            </a>

            <a class="law-index-item" href="">
                <i class="law-index-icon bi bi-hash"></i>
                <div class="law-index-title">Channels</div>
                <div class="law-index-desc">Описание каналов и категорий.</div>
            </a>

        </div>
    </div>

@endsection



