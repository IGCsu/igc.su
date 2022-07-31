@extends('layouts.app')

@section('title', 'Устав')

@section('content')

    <div class="law-wrapper container">
        <div class="law-nav">

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-star"></i>
                <div class="law-nav-title">General</div>
                <div class="law-nav-desc">Общие положения, основные принципы сообщества.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-chat-heart"></i>
                <div class="law-nav-title">Social</div>
                <div class="law-nav-desc">Требования к общению в чате.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-shield-exclamation"></i>
                <div class="law-nav-title">Orders</div>
                <div class="law-nav-desc">Свод правил и пояснение к ним.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-bank"></i>
                <div class="law-nav-title">Management</div>
                <div class="law-nav-desc">Органы управления сообществом.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-gear"></i>
                <div class="law-nav-title">Bots</div>
                <div class="law-nav-desc">О функциональности и возможностях ботов.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-gem"></i>
                <div class="law-nav-title">Roles</div>
                <div class="law-nav-desc">Описание ролей и принципы их проектирования.</div>
            </a>

            <a class="law-nav-item" href="">
                <i class="law-nav-icon bi bi-hash"></i>
                <div class="law-nav-title">Channels</div>
                <div class="law-nav-desc">Описание каналов и категорий.</div>
            </a>

        </div>
    </div>

@endsection



