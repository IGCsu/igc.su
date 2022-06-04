<x-app-layout>
	<x-slot name="title">Выборы {{ $election->date }}</x-slot>

	<table id="election"></table>

	<link href="{{ asset('/css/lightbox.css') }}" rel="stylesheet">
	<style>
		body { user-select: none; cursor: grab; }

		#election {
			font-family: monospace;
			color: #fffc;
		}

		td { padding: 5px 10px; text-align: center; font-size: 20px; }

		.election-null1,
		.election-null4 {
			background: #2f3136;
			position: sticky;
			z-index: 4;
			top: 40px;
		}

		.election-null3 {
			background: #2f3136;
			position: sticky;
			z-index: 4;
			top: 40px;
		}

		.election-null2 {
			background: #2f3136;
			position: sticky;
			z-index: 4;
			top: 40px;
			left: 0;
		}

		.election-user {
			background: #202225;
			padding: 10px 3px;
			position: sticky;
			z-index: 2;
			top: 40px;
		}
		.election-result { white-space: pre; text-align: left; }

		.election-row:nth-child(odd) { background: #0003; }
		.election-row:nth-child(odd) > .election-candidate { background: #26272b; }
		.election-row:nth-child(odd) > .election-candidate-avatar { background: #26272b; }

		.election-minus { background: #f002; }
		.election-plus { background: #0f02; }
		.election-equally { background: #fff2; }
		.election-min { background: #00ffff52; }

		.election-result.election-minus,
		.election-votes.election-minus { background: #f003; }
		.election-result.election-plus { background: #0f03; }

		.election-error, i { color: #f00; font-weight: 600; font-style: inherit; }

		::-webkit-scrollbar {
			width: 2px;
			height: 2px;
			right: 0px;
		}

		.election-candidate {
			background: #2f3136;
			position: relative;
			text-align: left;
			padding-left: 0;
		}
		.election-candidate.election-img
			{ padding: 3px 3px 3px 48px; height: 46px; }
		.election-candidate.election-img img {
			border: 1px solid #0003;
			pointer-events: none;
			position: absolute;
			object-fit: cover;
			cursor: pointer;
			height: 40px;
			width: 40px;
			left: 5px;
			top: 3px;
		}
		.election-candidate.election-img span
			{ font-size: 11px; line-height: 11px; display: block; }

		.election-candidate.selected { background: #000 !important; }
		.election-user.selected { background: #000; }
		/* .election-votes.selected { opacity: 0.8; }
		.election-info.selected { opacity: 0.8; } */

		.election-candidate-avatar {
			background: #2f3136;
			position: sticky;
			padding: 5px;
			z-index: 3;
			left: 0;
		}
		.election-candidate-avatar.selected { background: #000 !important; }
		.election-candidate-avatar img {
			display: inline-block;
			pointer-events: none;
			border-radius: 15px;
			margin-right: 5px;
			min-width: 30px;
			max-width: 30px;
			height: 30px;
			width: 30px;
		}

		.election-user div {
			text-overflow: ellipsis;
			white-space: nowrap;
			font-style: inherit;
			max-width: 55px;
			font-size: 12px;
			margin: 0 auto;
			display: block;
		}
		.election-user div div {
			text-overflow: ellipsis;
			white-space: nowrap;
			font-style: inherit;
			overflow: hidden;
			max-width: 55px;
			font-size: 12px;
			margin: 0 auto;
			display: block;
		}
		.election-user img {
			pointer-events: none;
			border-radius: 50px;
			min-width: 50px;
			max-width: 50px;
			height: 50px;
			width: 50px;
		}
		.election-user .election-error img {
			box-shadow: 0 0 2px 2px #dc3545;
			border: 5px solid #0000;
			pointer-events: none;
		}

		.tooltip > .tooltip-inner {
			border: 1px solid #000;
			font-family: 'Nunito';
			white-space: nowrap;
			background: #202225;
			max-width: none;
			font-size: 18px;
		}
	</style>

	<script src="{{ asset('/js/lightbox.js') }}"></script>

	<script>
		const guild = @json($guild);

		var memberUpdateTimeout = 0;
		const memberUpdateArray = {};
		const memberUpdate = (elem, id) => {
			if(/\/avatars\/[0-9]+$/.test(elem.src)) return elem.src = '/images/default.png';

			elem.src = '/images/loading2.gif';

			if(!memberUpdateArray[id]) memberUpdateArray[id] = false;

			clearTimeout(memberUpdateTimeout);
			memberUpdateTimeout = setTimeout(function(){
				for(const id in memberUpdateArray) memberUpdateArray[id] = true;

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());
				formData.append('users', JSON.stringify(memberUpdateArray));

				$.ajax({
					url : '/memberUpdate',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : data => {
						console.log(data);
						for(const id in data){
							const src = /\/avatars\/[0-9]+$/.test(data[id]) ? '/images/default.png' : data[id];
							$('.election-user[user="' + id + '"] img').attr('src','https://cdn.discordapp.com/' + src);
							$('.election-candidate-avatar[user="' + id + '"] img').attr('src','https://cdn.discordapp.com/' + src);
						}
					},
					error: (jqXHR, exception) => {
						if(jqXHR.status === 0)
							msg = 'Нет подключения! Проверьте интернет.';
						else if(jqXHR.status == 404)
							msg = '[404] Вызываемый маршрут не найден! ' +
								'Попробуйте перезагрузить страницу и попробовать снова.';
						else if(jqXHR.status == 500)
							msg = '[500] Возникла ошибка на стороне сервера! ' +
								'Повторите попытку позже.';
						else if(exception === 'parsererror')
							msg = '[parsererror] Не получилось распарсить полученный JSON! ' +
								'Попробуйте перезагрузить страницу и попробовать снова.';
						else if(exception === 'timeout')
							msg = '[timeout] Время ответа от сервера вышло! ' +
							'Попробуйте перезагрузить страницу и попробовать снова.';
						else if(exception === 'abort')
							msg = '[abort] AJAX не отвечает! ' +
								'Попробуйте перезагрузить страницу и попробовать снова.';
						else msg = 'Неизвестная ошибка.\n' + jqXHR.responseText;
						console.log(jqXHR, exception);
					}
				});
			}, 1000);
		};

		$(document).ready(() => {
			let e = @json(json_decode($election->data, true));
			let v = [];

			let newV = (id, name, value) => {
				let i = v.findIndex(a => a.id == id);
				if(i != -1)
					++v[i][value];
				else{
					let item = { name : name, id : id, plus : 0, minus : 0 };
					++item[value];
					v.push(item);
				}
			}

			let itog = () => {
				let html;
				html += '<tr><td class="election-null1">{{ $election->max ? 'Max: '.$election->max : '' }}</td><td class="election-null2"></td><td class="election-null3"></td>';
				for(let i in v){
					let classes = '';
					let minus = '/' + v[i].minus;
					if(v[i].minus > v[i].plus && {{ $election->rule1 }}){
						classes = 'election-minus';
						minus = '/<i>' + v[i].minus + '</i>';
					}
					html += '<td class="election-votes" user="' + i + '">' +
						v[i].plus + minus + '</td>';
				}
				html += '<td>' +
					({{ $election->max }} ? 'Max: {{ $election->max }}' : '') +
					'</td></tr>';
				return html;
			}

			for(let i in e){
				for(let id in e[i][0]) newV(id, e[i][0][id], 'minus');
				for(let id in e[i][1]) newV(id, e[i][1][id], 'plus');
			}

			let coefficient = {{ $election->coefficient }};
			let html = '<tr><td class="election-null1" style="font-size: 11px">{{ $election->last ? 'Last update: '.date('Y-m-d H:i',$election->last+10800) : '' }}</td><td class="election-null2"></td><td class="election-null3" style="font-size: 11px">{{ $election->qty ? 'Next update: '.date('Y-m-d H:i',$election->last+14400) : '' }}</td>';

			// v.forEach(u => {
			//   console.log(u);
			// });

			v.sort((a, b) => b.plus - a.plus);

			for(let i in v){
				let title = guild.members[v[i].id] ? guild.members[v[i].id].name : v[i].name;
				let name = '<div>';
				if(v[i].minus > v[i].plus && {{ $election->rule1 }}){
					title = '(нарушитель) ' + title;
					name = '<div class="election-error">';
				}
				name += (guild.members[v[i].id] ? '<img src="https://cdn.discordapp.com/' + guild.members[v[i].id].avatar + '" onError="memberUpdate(this, \'' + v[i].id + '\')"/>' : '<div>' + (guild.members[v[i].id] ? guild.members[v[i].id].name : v[i].name) + '</div>') + '</div>';
				html += '<td class="election-user" user="' + v[i].id + '" data-toggle="tooltip" data-placement="bottom" title="' + title + '">' + name + '</td>';
			}
			html += '<td class="election-null4"></td></tr>';

			html += itog();

			let rows = [];

			for(let i in e){
				let row = '';

				let plus = 0;
				let minus = 0;

				for(let iv in v){
					let classes = '';
					let item = v[iv];
					const rule1 = item.minus > item.plus && {{ $election->rule1 }};

					@if($election->type)

						let value = '';
						let val = (e[i][1][item.id] ? 1 : 0) - (e[i][0][item.id] ? 1 : 0);
						if(val < 0 && !rule1){ classes = 'election-minus'; ++minus; value = '-'; }
						if(val < 0 && rule1){ classes = 'election-error'; value = '-'; }
						if(val > 0){ classes = 'election-plus'; ++plus; value = '+'; }

					@else

						let m = e[i][0][item.id] ? (rule1 ? '<i>1</i>' : 1) : 0;
						let value = (e[i][1][item.id] ? 1 : 0) + '/' + m;

						if(!rule1 && e[i][0][item.id]){
							classes = 'election-minus';
							++minus;
						}
						if(e[i][1][item.id]){
							classes = 'election-plus';
							++plus;
						}
						if(!rule1 && e[i][0][item.id] && e[i][1][item.id])
							classes = 'election-equally';

					@endif

					row += '<td class="election-info ' + classes + '" user="' + item.id + '" candidate="' + i + '">' +
						value + '</td>';
				}

				let value = 0;
				if(plus == 0 || minus == 0 || {{ $election->type }}) value = plus - minus;
				else value = (plus / minus).toFixed(1);

				let val = (plus > 9 ? '' : ' ') + plus +
					'{{ $election->type ? '-' : '/' }}' +
					minus + (minus > 9 ? '' : ' ') + ' = ' +
					(value >= 0 ? ' ' : '') + (value > 9 || value < -9 ? '' : ' ') + value;
				if(Number.isInteger(value) && !{{ $election->type }}) val += '.0';

				let result = '';
				let classes = '';

				if(coefficient == 0){
					classes = 'election-plus';
					result = 'YES';
				}else if(value == coefficient){
					classes = 'election-minus';
					val += ' = ' + coefficient;
					result = 'NO';
				}else if(value > coefficient){
					classes = 'election-plus';
					val += ' > ' + coefficient;
					result = 'YES';
				}else if(value < coefficient){
					classes = 'election-minus';
					val += ' < ' + coefficient;
					result = 'NO';
				}

				rows.push({
					classes : classes,
					result : result,
					value : value,
					minus : minus,
					plus : plus,
					val : val,
					row : row,
					id : i,
					e : e[i]
				});
			}

			rows.sort((a, b) => a.value == b.value ? a.plus - b.plus : a.value - b.value);

			let c = 0;
			let max = {{ $election->max }};
			let rowsHtml = '';
			for(let i = rows.length - 1; i >= 0; i--){
				let r = rows[i];
				let count = '';
				c++;

				if(max != 0){
					if(c < 10) count += ' ';
					count += '#' + c + ' | ';

					if(c > max){
						r.classes = 'election-minus';
						r.result = ' NO';
					}
				}

				if(r.e.min){
					r.classes = 'election-min';
					r.result = 'YES';
				}

				let result = '<td class="election-result ' + r.classes + '" candidate="' + r.id + '">' +
					count + r.val + ' <b>' + r.result + '</b></td>';

				let name = '<span>' + (guild.members[r.e.id || r.id] ? guild.members[r.e.id || r.id].name : r.e.name) + '</span>';
				let nameClass = 'election-candidate';
				if(r.e.url){
					name = '<a href="' + r.e.url + '" data-lightbox="image"' +
						'data-title="' + (guild.members[r.e.id || r.id] ? guild.members[r.e.id || r.id].name : r.e.name) + ' - ' + count + r.val +
							' <b>' + r.result + '</b>">' +
						'<img src="' + r.e.url + '" /></a>' + name;
					nameClass += ' election-img';
				}

				const img = '<td class="election-candidate-avatar" data-toggle="tooltip" data-placement="right" title="' + (guild.members[r.e.id || r.id] ? guild.members[r.e.id || r.id].name : r.e.name) + '" user="' + r.id + '"><img src="' + (guild.members[r.e.id || r.id] ? 'https://cdn.discordapp.com/' + guild.members[r.e.id || r.id].avatar : '/images/default.png') +
					'" onError="memberUpdate(this, \'' + (r.e.id || r.id) + '\')"/></td>';

				r.row = img + '<td class="' + nameClass + '" user="' + r.id + '">' + name + '</td>' + r.row;

				rowsHtml = '<tr class="election-row" candidate="' + r.id + '">' +
					result + r.row + result + '</tr>' + rowsHtml;
			}

			html += rowsHtml;

			html += itog();

			$('#election').append(html);

			// let $list = $('.election-user, .election-info, .election-votes, .election-candidate');
			let $list = $('.election-user, .election-candidate, .election-candidate-avatar');
			let $elem = $('#election');
			let $body = $('body');

			// $elem.on('mouseleave', '.election-info, .election-votes, .election-result',
			// 	e => $list.removeClass('selected'));
			// $elem.on('mouseenter', '.election-info, .election-votes, .election-result', e => {
			// 	$list.removeClass('selected');
			// 	$('.election-user[user="' + e.target.getAttribute('user') + '"]').addClass('selected');
			// 	$('.election-candidate[user="' + e.target.getAttribute('candidate') + '"]').addClass('selected');
			// 	$('.election-candidate-avatar[user="' + e.target.getAttribute('candidate') + '"]').addClass('selected');
			// });

			$('[data-toggle="tooltip"]').tooltip();

			var tooltipTimeout = 0;

			$(document).on('mouseleave', 'body:not(.grab) .election-info', e => {
				clearTimeout(tooltipTimeout);
				tooltipTimeout = setTimeout(function(){ $('[data-toggle="tooltip"]').tooltip('hide'); }, 600);
			});
			$(document).on('mouseenter', 'body:not(.grab) .election-info', e => {
				clearTimeout(tooltipTimeout);
				tooltipTimeout = setTimeout(function(){
					$('[data-toggle="tooltip"]:not([user="' + e.target.getAttribute('user') + '"]):not([user="' + e.target.getAttribute('candidate') + '"])').tooltip('hide');
					$('.election-user[user="' + e.target.getAttribute('user') + '"]').tooltip('show');
					$('.election-candidate-avatar[user="' + e.target.getAttribute('candidate') + '"]').tooltip('show');
				}, 500);
			});

			let grab = {
				pos : { top : 0, left : 0, x : 0, y : 0 },
				down : e => {
					e = e || window.event;

					grab.pos = {
						left : document.documentElement.scrollLeft,
						top : document.documentElement.scrollTop,
						x : e.clientX,
						y : e.clientY,
					};

					document.onmouseup = grab.up;
					document.onmousemove = grab.move;

					$body.addClass('grab');
				},

				move : e => {
					document.documentElement.scrollTop = grab.pos.top - (e.clientY - grab.pos.y);
					document.documentElement.scrollLeft = grab.pos.left - (e.clientX - grab.pos.x);
				},

				up : () => {
					document.onmousemove = null;
					document.onmouseup = null;

					$body.removeClass('grab');
				}
			}

			$body.on('mousedown', grab.down);
		});
	</script>
</x-app-layout>
