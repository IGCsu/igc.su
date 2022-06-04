@props(['active'])

@php
$classes = ($active ?? false)
? 'block pl-3 pr-4 py-2 text-base font-medium transition'
: 'block pl-3 pr-4 py-2 text-base font-medium transition';
@endphp

<a {{ $attributes->merge(['class' => 'responsive-nav-link '.$classes]) }}>
    {{ $slot }}
</a>
