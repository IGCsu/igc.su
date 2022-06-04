<x-app-layout>
	<x-slot name="title">Сенат</x-slot>

	@csrf

	<div id="members-head"></div>

	@if(Auth::check() && Auth::user()->discord_id == 256114365894230018)
		<div class="container" style="text-align: center;margin-top: 90px;opacity: 0.2;">Для редактирования, нажать Alt + A</div>
	@endif

	<div id="members" class="container"></div>

	<style>
		#members-head {
			border: 1px solid #0006;
			overflow: scroll hidden;
			background: #36393f;
			white-space: nowrap;
			text-align: center;
			user-select: none;
			cursor: pointer;
			position: fixed;
			height: 50px;
			width: 100%;
			z-index: 10;
			top: 39px;
			--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
			box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
		}
		#members-head::-webkit-scrollbar {
			height: 0;
		}
		#members-head > .member {
			display: inline-block;
			position: relative;
			margin: 5px 10px;
			height: 40px;
		}
		#members-head > .member img {
			object-fit: contain;
			border-radius: 20px;
			transition: 0.4s;
			height: 40px;
			width: 40px;
			filter: grayscale(1);
		}
		#members-head > .member.active img,
		#members-head > .member:hover img {
			filter: grayscale(0);
		}

		#members > .member {
			border: 1px solid #0006;
			border-radius: 10px;
			background: #36393f;
			margin: 60px auto;
			max-width: 700px;
			overflow: hidden;
		}

		#members > .member > .member-name { margin: 0; }
		#members > .member > .member-name > div { padding: 20px; padding-left: 0; }
		#members > .member > .member-name > .member-img { padding: 20px; }
		#members > .member > .member-name img { border-radius: 100px; }
		#members > .member > .member-name span {
			font-weight: 600;
			font-size: 24px;
			display: block;
		}
		#members > .member > .member-name small {
			font-style: italic;
			font-size: 14px;
		}

		#members > .member > .member-point {
			border-top: 1px solid #0004;
			align-items: center;
			margin: 0;
		}
		#members > .member > .member-point > div { padding: 5px; }
		#members > .member > .member-point > .member-point-value {
			text-align: center;
			font-weight: 600;
			font-size: 19px;
			padding: 0px;
		}
		#members > .member > .member-point img { border-radius: 100px; }
		#members > .member > .member-point span { display: block; }
		#members > .member > .member-point small {
			line-height: 15px;
			font-size: 12px;
			display: block;
			color: #fffb;
		}
		#members > .member > .member-point11,
		#members > .member > .member-point10 { background: #135422; }
		#members > .member > .member-point9,
		#members > .member > .member-point8 { background: #135422D0; }
		#members > .member > .member-point7,
		#members > .member > .member-point6 { background: #1354229C; }
		#members > .member > .member-point5,
		#members > .member > .member-point4 { background: #13542268; }
		#members > .member > .member-point3,
		#members > .member > .member-point2 { background: #13542234; }
		#members > .member > .member-point1 { background: #13542217; }
		#members > .member > .member-point0 { background: #fff1; }
		#members > .member > .member-point-1 { background: #7b151e17; }
		#members > .member > .member-point-2,
		#members > .member > .member-point-3 { background: #7b151e34; }
		#members > .member > .member-point-4,
		#members > .member > .member-point-5 { background: #7b151e68; }
		#members > .member > .member-point-6,
		#members > .member > .member-point-7 { background: #7b151e9C; }
		#members > .member > .member-point-8,
		#members > .member > .member-point-9 { background: #7b151eD0; }
		#members > .member > .member-point-10,
		#members > .member > .member-point-11 { background: #7b151e; }

		#members > .member > .member-total {
			border-top: 1px solid #0004;
			align-items: center;
			margin: 0;
		}
		#members > .member > .member-total > .member-total-text {
			white-space: pre-wrap;
			padding: 10px 10px;
			font-size: 14px;
		}
		#members > .member > .member-total > .member-total-value {
			text-align: center;
			font-weight: 600;
			font-size: 26px;
		}
		#members > .member > .member-total > .member-total-value .green { color: #32bd52; }
		#members > .member > .member-total > .member-total-value .red { color: #ff828d; }

		#members > .member > .member-point i { font-size: 10px; margin-top: -1px; display: block; opacity: 0.8; }
		#members > .member > .member-point i > span { display: inline-block; margin-right: 4px; }
		#members > .member > .member-point i .green { color: #32bd52; }
		#members > .member > .member-point i .red { color: #ff828d; }

		#members > .member > .member-point.opacity { opacity: 0.3; cursor: pointer; }
		#members > .member > .member-point.opacity:hover { opacity: 0.8; }

		#members > .member > .member-total > .member-total-tags { padding-top: 15px; }
		#members > .member > .member-total > .member-total-tags > div { position: relative; height: 13px; }
		#members > .member > .member-total > .member-total-tags > div.green { background: #28a74533; }
		#members > .member > .member-total > .member-total-tags > div.red { background: #dc354533; }
		#members > .member > .member-total > .member-total-tags > div:hover { background: #fff3; }
		#members > .member > .member-total > .member-total-tags > div > span {
			text-shadow: 1px 1px #0003;
			text-align: center;
			position: relative;
			line-height: 14px;
			overflow: hidden;
			font-size: 10px;
			display: block;
			margin: 0 auto;
			height: 13px;
			opacity: 0.7;
			z-index: 1;
			width: 26%;
		}
		#members > .member > .member-total > .member-total-tags > div > div {
			position: absolute;
			overflow: hidden;
			display: flex;
			top: 1px;
		}
		#members > .member > .member-total > .member-total-tags > div > div > div {
			border: 1px solid #fff3;
			font-family: monospace;
			text-align: center;
			line-height: 9px;
			font-size: 8px;
			padding: 0 2px;
			height: 11px;
			color: #fff9;
		}
		#members > .member > .member-total > .member-total-tags > div > div > div[main] { font-size: 11px; border: 1px solid #fff8; }
		#members > .member > .member-total > .member-total-tags > div > div.green { text-align: right; left: 63%; }
		#members > .member > .member-total > .member-total-tags > div > div.green > div { background: #216f33; opacity: 0.4; }
		#members > .member > .member-total > .member-total-tags > div > div.green > div[result] { opacity: 1; }
		#members > .member > .member-total > .member-total-tags > div > div.red { text-align: left; right: 63%; }
		#members > .member > .member-total > .member-total-tags > div > div.red > div { background: #96222c; opacity: 0.4; }
		#members > .member > .member-total > .member-total-tags > div > div.red > div[result] { opacity: 1; }

		b.red { color: #ff8490; }
		b.blue { color: #5aaaff; }
		b.green { color: #2cc34e; }
		b.yellow { color: #ffc107; }
	</style>

	<script>

		const s = {

			list : {},
			points : {},
			pointTags : {},

			admin : false,

			update : () => {
				let html = '';
				let head = '';
				let list = [];

				for(const m in s.list) list.push(s.list[m]);
				list.sort((a, b) => b.all - a.all);
				for(const m of list){
					html += m.html;
					head += m.head;
				}

				$('#members').html(html);
				$('#members-head').html(head);
			},

			getHTML : i => {
				let html = '';

				html += '<div class="member-name row">' +
					'<div class="col-3 member-img"><img src="https://cdn.discordapp.com/' + i.member.avatar + '" /></div>' +
					'<div class="col-9"><span>' + i.member.name + '</span><small>“ ' + i.text + ' ”</small></div>' +
				'</div>';

				let total = { p : 0, m : 0 };
				let points = [];
				let pointTags = {};
				for(const tag in s.pointTags) pointTags[tag] = { p : 0, m : 0 };
				for(const p in s.points){
					const active = i.data.indexOf(p) != -1;
					if(!active && !s.admin) continue;
					let value = 0;
					let tags = [];
					for(const t in s.points[p].tags){
						const n = pointTags[t] ? t : 'Уникальное';
						if(active)
							pointTags[n][s.points[p].tags[t] > 0 ? 'p' : 'm'] += s.points[p].tags[t];
						value += s.points[p].tags[t];
						tags.push('<span title="' + s.pointTags[n] + '" class="' + (s.points[p].tags[t] > 0 ? 'green' : 'red') + '">' +
							(s.points[p].tags[t] > 0 ? '+' : '') + s.points[p].tags[t] + ' ' + (n == t ? t : n + ' (' + t + ')' ) + '</span>');
					}
					if(active)
						total[value > 0 ? 'p' : 'm'] += value;
					points.push({
						value : value,
						html : '<div class="row member-point ' + (active ? '' : 'opacity') + ' member-point' + value + '">' +
							'<div class="col-1 member-point-value">' + (value > 0 ? '+' : '') + value + '</div>' +
							'<div class="col-11"><span>' + s.points[p].name + '</span><small>' + (s.points[p].text || '') + '</small><i>' + tags.join(' ') + '</i></div>' +
						'</div>'
					});
				}

				points.sort((a,b) => b.value - a.value);
				for(const point of points) html += point.html;

				let tags = '';
				let tagsMax = { p : 10, m : -10 };
				for(const tag in pointTags){
					if(tagsMax.p < pointTags[tag].p) tagsMax.p = pointTags[tag].p;
					if(tagsMax.m > pointTags[tag].m) tagsMax.m = pointTags[tag].m;
				}
				for(const tag in pointTags){
					let pwp = pointTags[tag].p*37/tagsMax.p;
					let pwm = pointTags[tag].m*37/tagsMax.m;
					pwp = pwp ? 'width: ' + pwp + '%' : 'opacity: 0';
					pwm = pwm ? 'width: ' + pwm + '%' : 'opacity: 0';

					const r = pointTags[tag].p + pointTags[tag].m;

					let pp = '';
					let pm = '';

					const pABS = Math.abs(pointTags[tag].p);
					const mABS = Math.abs(pointTags[tag].m);

					const pResult = pABS - mABS;
					const mResult = mABS - pABS;

					for(let i = 1; i <= pABS; i++)
						pp += '<div ' + (i <= pResult ? 'result' : '') + ' ' + (i == pResult ? 'main' : '') + ' style="width:' + (100/pABS) + '%">' + (i) + '</div>';
					for(let i = mABS; i > 0; i--)
						pm += '<div ' + (i <= mResult ? 'result' : '') + ' ' + (i == mResult ? 'main' : '') + ' style="width:' + (100/mABS) + '%">' + i + '</div>';

					tags += '<div class="' + (r > 0 ? 'green' : r < 0 ? 'red' : '') + '" title="' + s.pointTags[tag] + '">' +
						'<span>' + tag + '</span>' +
						'<div class="green" style="' + pwp + '">' + pp + '</div>' +
						'<div class="red" style="' + pwm + '">' + pm + '</div>' +
					'</div>';
				}

				const all = total.p + Math.abs(total.m);

				html += '<div class="member-total row">' +
					'<div class="col-md-8 member-total-tags">' + tags + '</div>' +
					'<div class="col-md-4 member-total-value">' +
						'<span class="green">+' + total.p + '</span>' +
						' / <span class="red">' + total.m + '</span>' +
						' = <span>' + Math.abs(total.p / total.m).toFixed(1) + '</span>' +
					'</div>' +
					'<div class="col-12 member-total-text">' + i.result + '</div>' +
				'</div>';

				return {
					html : '<div class="member shadow rounded-md" member="' + i.id + '">' + html + '</div>',
					head : '<div class="member" member="' + i.id + '"><img src="https://cdn.discordapp.com/' + i.member.avatar + '" /></div>',
					all : all
				};
			},

			formatDate : (date, notime) => {
				if(typeof date != 'object') date = new Date(date);
				let r = '';

				r += date.getFullYear();

				let m = date.getMonth() + 1;
				r += (m < 10 ? '-0' : '-') + m;

				let d = date.getDate();
				r += (d < 10 ? '-0' : '-') + d;

				if(notime){
					let h = date.getHours();
					r += (h < 10 ? ' 0' : ' ') + h;

					let i = date.getMinutes();
					r += (i < 10 ? ':0' : ':') + i;
				}

				return r;
			},

			onScroll : () => {

				const scroll = $(document).scrollTop() + 127;
				const $members = $('#members .member');

				for(let i = 0; i < $members.length; i++){
					const $elem = $($members[i]);
					const top = $elem.position().top;
					if(top > scroll || top + $elem.height() <= scroll) continue;
					const $m = $('#members-head [member="' + $elem.attr('member') + '"]');
					if($m.hasClass('active')) continue;
					$('#members-head .member').removeClass('active');
					$m.addClass('active');
					$('#members-head').stop();
					$('#members-head').animate({ scrollLeft: i * (60 / ($members.length / i)) }, 500);
					break;
				}
			}

		}

		$(document).ready(() => {
			$(document).on('scroll', s.onScroll);

			const points = @json(DB::table('senatePoints')->get());
			for(const point of points){
				point.tags = JSON.parse(point.tags || '[]');
				s.points[point.name] = point;
			}

			const pointTags = @json(DB::table('senatePointsTags')->get());
			for(const pointTag of pointTags)
				s.pointTags[pointTag.name] = pointTag.text;

			const members = @json($members);
			const moders = @json(DB::table('senate')->where('status', 1)->get());
			for(const moder of moders){
				if(!members[moder.id]) continue;
				moder.data = JSON.parse(moder.data || '[]');
				moder.active = JSON.parse(moder.active || '[]');
				moder.member = members[moder.id];
				const data = s.getHTML(moder);
				moder.html = data.html;
				moder.head = data.head;
				moder.all = data.all;
				s.list[moder.id] = moder;
			}

			s.update();
			s.onScroll();

			function scrollHorizontally(e) {
				e = window.event || e;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				document.getElementById('members-head').scrollLeft -= (delta * 40); // Multiplied by 40
				e.preventDefault();
			}
			document.getElementById('members-head').addEventListener('mousewheel', scrollHorizontally, false);
			document.getElementById('members-head').addEventListener('DOMMouseScroll', scrollHorizontally, false);

		});

		$('#members-head').on('click', '.member', function(){
			const id = this.closest('[member]').getAttribute('member');
			$('body,html').animate({ scrollTop: $('#members [member="' + id + '"]').offset().top  - 127 }, 500);
		});

		@if(Auth::check() && Auth::user()->discord_id == 256114365894230018)

			$(document).keyup(function(e) {
				if(!e.altKey || e.keyCode !== 65) return;
				s.admin = !s.admin;
				for(const id in s.list){
					const data = s.getHTML(s.list[id]);
					s.list[id].html = data.html;
					s.list[id].all = data.all;
				}
				s.update();
			});

			$('#members').on('click', '.member > .member-point', function(){
				if(!s.admin) return;
				this.classList.toggle('opacity');
				const id = this.closest('[member]').getAttribute('member');

				let points = [];
				$('#members > [member="' + id + '"] > .member-point:not(.opacity) > div > span').each(function(){
					points.push(this.innerHTML);
				});
				s.list[id].data = points;

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());
				formData.append('id', id);
				formData.append('data', JSON.stringify(points));

				$.ajax({
					url : '{{ route('senate.update') }}',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : data => {},
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
			})
		@endif

	</script>
</x-app-layout>
