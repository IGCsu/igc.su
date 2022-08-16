<?php

/**
 * Возвращает HEX цвет по проценту
 * @param int $p
 * @return string
 */
function getColor(int $p): string
{
	if($p >= 100) return '#00FF00';
	if($p >= 90) return '#33ff00';
	if($p >= 80) return '#66ff00';
	if($p >= 70) return '#99ff00';
	if($p >= 60) return '#ccff00';
	if($p >= 50) return '#FFFF00';
	if($p >= 40) return '#FFCC00';
	if($p >= 30) return '#ff9900';
	if($p >= 20) return '#ff6600';
	if($p >= 10) return '#FF3300';
	return '#FF0000';
}

?>

@extends('layouts.app')

@section('content')

	<div class="welcome container">

		<div class="welcome-img">
			<img src="/images/IGC_test.png">
		</div>

		<div class="welcome-text">
			<h2>Сайт в разработке</h2>

			<p>В настоящий момент сайт находится в состоянии активной разработки.</p>

			<p>Старый сайт без изменений доступен тут: <a href="http://old.igc.su">old.igc.su</a>.</p>
		</div>

		<div class="welcome-table">
			<table>
				<thead>
				<tr>
					<th class="welcome-table-name">Name</th>
					<th class="welcome-table-status">Status</th>
					<th class="welcome-table-desc">Stage</th>
				</tr>
				</thead>
				<tbody>
				@foreach($development as $dev)
					<tr style="background: {{ getColor($dev->status) }}11">
						<td class="welcome-table-name">
							{{ $dev->name }}
							@if(Route::has($dev->url))
								<a href="{{ route($dev->url) }}">{{ route($dev->url) }}</a>
							@else
								<small>link not defined</small>
							@endif
						</td>
						<td class="welcome-table-status" style="color: {{ getColor($dev->status) }}">{{ $dev->status }}%</td>
						<td class="welcome-table-desc">{{ $dev->desc }}</td>
					</tr>
				@endforeach
				</tbody>
			</table>
		</div>

	</div>

@endsection
