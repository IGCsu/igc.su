<x-app-layout>
	@csrf

	<x-slot name="title">Выборы {{ $election->date }}</x-slot>

	<table id="election"></table>

	<link href="{{ asset('/css/lightbox.css') }}" rel="stylesheet">
	<style>
		body { user-select: none; cursor: grab; }
		body.grab { cursor: grabbing; }

		#election {
			font-family: monospace;
			color: #fffc;
		}

		td { padding: 5px 10px; text-align: center; font-size: 20px; }

		.election-null1,
		.election-null4 {
			background: #2f3136;
			position: -webkit-sticky;
			position: sticky;
			z-index: 4;
			top: 64px;
		}

		.election-null3 {
			background: #2f3136;
			position: -webkit-sticky;
			position: sticky;
			z-index: 4;
			top: 64px;
		}

		.election-null2 {
			background: #2f3136;
			position: -webkit-sticky;
			position: sticky;
			z-index: 4;
			top: 64px;
			left: 0;
		}

		.election-user {
			pointer-events: none;
			padding: 10px 3px;
			position: -webkit-sticky;
			position: sticky;
			z-index: 3;
			top: 64px;
		}
		.election-result { white-space: pre; text-align: left; }

		.election-minus { background: #f002; }
		.election-plus { background: #0f02; }
		.election-equally { background: #fff2; }
		.election-min { background: #00ffff52; }

		.election-result.election-minus,
		.election-votes.election-minus { background: #f003; }
		.election-result.election-plus { background: #0f03; }

		.election-error, i { color: #ed5959; font-weight: 600; font-style: inherit; }

		::-webkit-scrollbar {
			width: 2px;
			height: 2px;
			right: 0px;
		}

		.election-candidate {
			white-space: nowrap;
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

		.election-candidate-avatar {
			pointer-events: none;
			position: -webkit-sticky;
			position: sticky;
			padding: 5px;
			z-index: 2;
			left: 0;
		}
		.election-candidate-avatar.selected { background: #000 !important; }
		.election-candidate-avatar img {
			filter: drop-shadow(0 2px 5px #0009);
			display: inline-block;
			pointer-events: unset;
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
			filter: drop-shadow(0 2px 5px #0009);
			pointer-events: unset;
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

		.tt {
			border: 1px solid #000;
			white-space: nowrap;
			background: #202225;
			border-radius: 5px;
			position: absolute;
			max-width: none;
			font-size: 20px;
			padding: 0 3px;
			display: none;
			z-index: 1;
		}

		.tt-b {
			-webkit-transform: translate(-50%);
			-moz-transform: translate(-50%);
			-ms-transform: translate(-50%);
			-o-transform: translate(-50%);
			transform: translate(-50%);
			bottom: -34px;
			left: 50%;
		}
		.tt-b::after {
			content: "";
			position: absolute;
			bottom: 100%;
			left: 50%;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: transparent transparent black transparent;
		}
		.tt-b.tt-f {
			-webkit-transform: inherit;
			-moz-transform: inherit;
			-ms-transform: inherit;
			-o-transform: inherit;
			transform: inherit;
			left: 0;
		}
		.tt-b.tt-f::after { left: 30px; }
		.tt-b.tt-l {
			-webkit-transform: inherit;
			-moz-transform: inherit;
			-ms-transform: inherit;
			-o-transform: inherit;
			transform: inherit;
			left: inherit;
			right: 0;
		}
		.tt-b.tt-l::after { left: inherit; right: 30px; }

		.tt-r {
			top: 50%;
			-webkit-transform: translate(0, -50%);
			-moz-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			-o-transform: translate(0, -50%);
			transform: translate(0, -50%);
			left: 41px;
		}
		.tt-r::after {
			content: "";
			position: absolute;
			top: 50%;
			right: 100%;
			margin-top: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: transparent black transparent transparent;
		}

		.tt-v .tt { display: block; }

		.tt + b {
			display: none;
			position: absolute;
			pointer-events: none;
		}
		.tt-b + b {
			background: #0002;
			border: 1px solid #0006;
			right: 0;
			left: 0;
			top: 0;
		}
		.tt-r + b {
			background: #0002;
			border: 1px solid #0006;
			bottom: 0;
			top: 0;
		}

		.tt-v .tt + b { display: block; }

		#nextUpdate img {
			display: inline-block;
			border-radius: 22px;
			width: 22px;
		}
	</style>

	<script src="{{ asset('/js/lightbox.js') }}"></script>

	<script>
		let guild = @json($guild);

		var intervalId = 0;
		var memberUpdateTimeout = 0;
		const memberUpdateArray = {};
		const memberUpdate = (elem, id) => {
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
						for(const id in data){
							$('.election-user[user="' + id + '"] img').attr('src','https://cdn.discordapp.com/' + data[id]);
							$('.election-candidate-avatar[user="' + id + '"] img').attr('src','https://cdn.discordapp.com/' + data[id]);
						}
					},
					error : console.error
				});
			}, 1000);
		};

		var $list;
		var election = @json($election);
		const $elem = $('#election');
		const $body = $('body');

		function generate(election){
			let e = JSON.parse(election.data);
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
				html += '<tr><td class="election-null1">' + (election.max ? 'Max: ' + election.max : '') + '</td><td class="election-null2"></td><td class="election-null3"></td>';
				for(let i in v){
					let classes = '';
					let minus = '/' + v[i].minus;
					if(v[i].minus > v[i].plus && election.rule1 ){
						classes = 'election-minus';
						minus = '/<i>' + v[i].minus + '</i>';
					}
					html += '<td class="election-votes" user="' + i + '">' +
						v[i].plus + minus + '</td>';
				}
				html += '<td>' + (election.max ? 'Max: ' + election.max : '') + '</td></tr>';
				return html;
			}

			for(let i in e){
				for(let id in e[i][0]) newV(id, e[i][0][id], 'minus');
				for(let id in e[i][1]) newV(id, e[i][1][id], 'plus');
			}

			let html = '<tr><td id="lastUpdate" class="election-null1" style="font-size: 11px">' + (election.last ? 'Last update: ' + new Date(election.last*1000).toLocaleString() : '') + '</td><td class="election-null2"></td><td id="nextUpdate" class="election-null3" style="font-size: 11px"></td>';

			v.sort((a, b) => b.plus - a.plus);

			let v_i = 0;
			const v_count = Object.keys(v).length - 1;
			for(let i in v){
				let title = guild.members[v[i].id] ? guild.members[v[i].id].name : v[i].name;
				let style = '';
				if(v_i == 0) style = ' tt-f';
				if(v_i == v_count) style = ' tt-l';
				let name = '<div>';
				if(v[i].minus > v[i].plus && election.rule1){
					title = '(нарушитель) ' + title;
					name = '<div class="election-error">';
				}
				name += (guild.members[v[i].id] ? '<img src="https://cdn.discordapp.com/' + guild.members[v[i].id].avatar + '" onError="memberUpdate(this, \'' + v[i].id + '\')" loading="lazy"/>' : '<div>' + (guild.members[v[i].id] ? guild.members[v[i].id].name : v[i].name) + '</div>') + '</div>';
				html += '<td class="election-user" user="' + v[i].id + '">' + name + '<span class="tt tt-b' + style + '">' + title + '</span><b></b></td>';
				++v_i;
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
					const rule1 = item.minus > item.plus && election.rule1;
					let value;

					if(election.type){

						value = '';
						let val = (e[i][1][item.id] ? 1 : 0) - (e[i][0][item.id] ? 1 : 0);
						if(val < 0 && !rule1){ classes = 'election-minus'; ++minus; value = '-'; }
						if(val < 0 && rule1){ classes = 'election-error'; value = '-'; }
						if(val > 0){ classes = 'election-plus'; ++plus; value = '+'; }

					}else{

						let m = e[i][0][item.id] ? (rule1 ? '<i>1</i>' : 1) : 0;
						value = (e[i][1][item.id] ? 1 : 0) + '/' + m;

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

					}

					row += '<td class="election-info ' + classes + '" user="' + item.id + '" candidate="' + i + '">' + value + '</td>';
				}

				let value = 0;
				if(plus == 0 || minus == 0 || election.type) value = plus - minus;
				else value = (plus / minus).toFixed(1);

				let val = (plus > 9 ? '' : ' ') + plus +
					(election.type ? '-' : '/') +
					minus + (minus > 9 ? '' : ' ') + ' = ' +
					(value >= 0 ? ' ' : '') + (value > 9 || value < -9 ? '' : ' ') + value;
				if(Number.isInteger(value) && !election.type) val += '.0';

				let result = '';
				let classes = '';

				if(election.coefficient == 0){
					classes = 'election-plus';
					result = 'YES';
				}else if(value == election.coefficient){
					classes = 'election-minus';
					val += ' = ' + election.coefficient;
					result = 'NO';
				}else if(value > election.coefficient){
					classes = 'election-plus';
					val += ' > ' + election.coefficient;
					result = 'YES';
				}else if(value < election.coefficient){
					classes = 'election-minus';
					val += ' < ' + election.coefficient;
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
			let rowsHtml = '';
			for(let i = rows.length - 1; i >= 0; i--){
				let r = rows[i];
				let count = '';
				c++;

				if(election.max != 0){
					if(c < 10) count += ' ';
					count += '#' + c + ' | ';

					if(c > election.max){
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

				const img = '<td class="election-candidate-avatar" user="' + r.id + '"><img src="' + (guild.members[r.e.id || r.id] ? 'https://cdn.discordapp.com/' + guild.members[r.e.id || r.id].avatar : '/images/default.png') +
					'" onError="memberUpdate(this, \'' + (r.e.id || r.id) + '\')"/ loading="lazy"><span class="tt tt-r">' + (guild.members[r.e.id || r.id] ? guild.members[r.e.id || r.id].name : r.e.name) + '</span><b></b></td>';

				r.row = img + '<td class="' + nameClass + '" user="' + r.id + '">' + name + '</td>' + r.row;

				rowsHtml = '<tr class="election-row" candidate="' + r.id + '">' +
					result + r.row + result + '</tr>' + rowsHtml;
			}

			html += rowsHtml;

			html += itog();

			$('#election').html(html);

			$list = $('.election-user, .election-candidate, .election-candidate-avatar');
			resize();
			if(election.qty) update(election);
		}

		function load(admin){
			if(intervalId) clearInterval(intervalId);
			$('#nextUpdate').html('<img src="/images/loading2.gif" /> Обновление...');

			let formData = new FormData();

			formData.append('_token', $('input[name="_token"]').val());
			formData.append('admin', admin ? '1' : '0');
			formData.append('date', '{{ $election->date }}');

			$.ajax({
				url : '{{ route('elections.load') }}',
				type : "POST",
				dataType : "json",
				cache : false,
				contentType : false,
				processData : false,
				data : formData,
				success : data => {
					guild = data.guild;
					election = data.election;
					generate(election);
				},
				error : (jqXHR, exception) => {
					switch(jqXHR.status){
						case 404, 403: $('#nextUpdate').html('<i>Update error. Reload the page</i>'); break;
						case 504: update(election, Math.floor(Date.now() / 1000) + 300 - election.last); break;
					}
					console.error(jqXHR, exception);
				}
			});
		}

		function resize(){
			let wl = document.querySelector('.election-null1').offsetWidth;

			let wr = document.querySelector('.election-null3').offsetWidth + document.querySelector('.election-null4').offsetWidth;
			$('.election-user').each((i, e) => wr += e.offsetWidth);

			let h = -document.querySelector('#election > tr').offsetHeight;

			$('#election > tr').each((i, e) => h += e.offsetHeight);

			$('.tt-r + b').css('left', '-' + wl + 'px');
			$('.tt-r + b').css('right', '-' + wr + 'px');
			$('.tt-b + b').css('bottom', '-' + h + 'px');
		};

		async function update(election, interval){
			if(!interval) interval = 3600;
			const now = Math.floor(Date.now() / 1000);
			const next = Math.floor(election.last + interval);
			if(now >= next) return load();

			let time = next - now;

			if(intervalId) clearInterval(intervalId);
			intervalId = setInterval(function(){
				--time;

				if(time <= 0){
					clearInterval(intervalId);
					return load();
				}

				let text = 'Next update in ';
				const m = Math.floor(time/60);
				if(m > 0) text += m + 'm ';
				const s = time % 60;
				if(s > 0) text += s + 's ';

				$('#nextUpdate').html(text);
			}, 1000);

			// window.onfocus = () => {
			// 	clearInterval(intervalId);
			// 	update(election);
			// }
		}

		$(document).ready(() => {
			generate(election);

			$(document).on('mouseleave', '.election-info', e => {
				$('.tt-v').removeClass('tt-v');
			});
			$(document).on('mouseenter', '.election-info', e => {
				$('.tt-v').removeClass('tt-v');
				$('.election-user[user="' + e.target.getAttribute('user') + '"]').addClass('tt-v');
				$('.election-candidate-avatar[user="' + e.target.getAttribute('candidate') + '"]').addClass('tt-v');
			});

			let grab = {
				pos : { top : 0, left : 0, x : 0, y : 0 },
				down : e => {
					e = e || window.event;
					if(e.which != 1) return;

					grab.pos = {
						left : document.documentElement.scrollLeft,
						top : document.documentElement.scrollTop,
						x : e.clientX,
						y : e.clientY,
					};

					document.onmouseup = grab.up;
					document.onmousemove = grab.move;
				},

				move : e => {
					document.documentElement.scrollTop = grab.pos.top - (e.clientY - grab.pos.y);
					document.documentElement.scrollLeft = grab.pos.left - (e.clientX - grab.pos.x);
				},

				up : () => {
					document.onmousemove = null;
					document.onmouseup = null;
				}
			}

			$body.on('mousedown', grab.down);

			$(window).resize(resize);

		});
	</script>
</x-app-layout>
