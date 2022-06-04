@props(['active'])

@php
$classes = ($active ?? false)
? 'active inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition'
: 'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition';
@endphp

<a {{ $attributes->merge(['class' => 'nav-link '.$classes]) }}>
    {{ $slot }}
</a>
