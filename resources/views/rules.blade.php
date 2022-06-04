<?php
use App\Http\Controllers\RulesController;
?>

<x-app-layout>
	<x-slot name="meta">
		<meta name="og:description" content="{{ $description }}" />
	</x-slot>

	<x-slot name="title">Устав</x-slot>

	@csrf

	<div class="container">

		<div id="buttons" class="row justify-content-center">
			@if(RulesController::accessCheck(1))
				<div class="col-auto"><button id="release">Релиз</button></div>
			@endif
			<div class="col-auto"><button id="left"></button></div>
			<div class="col-auto"><button id="right"></button></div>
			<i id="infoCopy" class="col-sm-10">
				Для того, чтобы скопировать ссылку (<i class="icon-line-open"></i>) или цитировать (<i class="icon-line-copy"></i>) пункт правил, достаточно навестись, или нажать (на телефоне), на номер пункта, и далее нажать на соответствующую кнопку.

				@if(RulesController::accessCheck(1))
					<br><br>
					По умолчанию загружаются только опубликованные версии Устава.<br>
					<br>
					Редактировать можно только dev версию Устава. Нажмите на кнопку "Разработка". Сайт подгрузит актуальную dev версию Устава или создаст её.<br>
					Dev версия Устава недоступна пользователям, её можно свободно редактировать.<br>
					Dev версия Устава существует лишь одна и она доступна всем уполномоченным.<br>
				@endif

				@if(RulesController::accessCheck(2))

					<br>
					Для редактирования существующего пункта, необходимо зажать ALT и нажать на нужный пункт Устава. Появиться дополнительное окошко, где можно редактировать текст. Для сохранения изменений необходимо нажать на кнопку "Отправить".<br>
					<br>
					Для создания нового пункта, необходимо в окошке ниже, рядом со надписью "Версия в разработке", ввести номер пункта и нажать Enter.<br>
					Новый пункт будет создан и его можно будет редактировать.<br>
					<br>
					Для удаления пункта, необходимо нажать на корзинку в меню пункта Устава.<br>
					<br>
					<br>
					Не бойтесь случайно попасть на кнопки удаления или релиза, у них есть дополнительное подтверждение.<br>
					<br>
					Для публикации версии Устава, необходимо нажать на кнопку "Релиз". Для отредактированной версии Устава будет присвоен номер и он станет доступен пользователям на сайте. Так же бот синхронизирует раздел Правил в каналах дискорда.
				@endif
			</i>
		</div>

		<div id="versions" class="row justify-content-center"></div>

		<div id="main" class="row justify-content-center"></div>

		<textarea id="copy"></textarea>

	</div>

	<style>
		#infoCopy {
			opacity: 0.6;
			font-style: normal;
			text-align: justify;
			font-size: 75%;
		}
		#buttons { margin: 50px; }

		#versions { margin: 0; }
		#versions > div { padding: 0 5px; }
		#versions > div > div {
			border: 1px solid #0003;
			background: #242529;
			border-radius: 15px;
			user-select: none;
			cursor: pointer;
			height: 10px;
			width: 10px;
		}
		#versions > div > div:hover { background: #36393f; }
		#versions > div > div.active { background: #00ffda96; }

		#buttons > div > button {
			border: 1px solid #0003;
			border-radius: 100px;
			background: #242529;
			text-align: center;
			user-select: none;
			padding: 2px 14px;
			transition: 0.2s;
			font-size: 17px;
			cursor: pointer;
			outline: none;
			margin: 6px;
		}
		#buttons > div > button:hover { background: #2c2f34; }
		#buttons > div > button:disabled {
			border: 1px solid #0000;
			background: #242529;
			opacity: 0.5;
		}

		#main { margin: 0 auto; }
		body { overflow-x: hidden; }

		#main > div {
			animation: fadeIn;
			animation-duration: 0.5s;
			min-height: 28px;
		}

		#main > .tabs { position: sticky; top: 78px; z-index: 3; background: #2f3136; animation: none; -webkit-tap-highlight-color: transparent; }
		#main > .info { position: sticky; top: 39px; z-index: 3; background: #2f3136; animation: none; }

		#main > .info > div {
			text-align: center;
			line-height: 40px;
			height: 40px;
			color: #fff9;
		}

		#main > .head > div {
			-webkit-box-shadow: 0 1px 1px 1px #0000000f;
			box-shadow: 0 1px 1px 1px #0000000f;
			border: 1px solid #242529;
			letter-spacing: 0.8px;
			background: #2c2f34;
			text-align: center;
			font-weight: 600;
			min-height: 100%;
			font-size: 18px;
			padding: 20px 10px;
			color: #fffd;
			margin: 0;
		}

		#main > .noanimate { animation: none !important; }

		#main > [field] > div {
			-webkit-box-shadow: 0 1px 1px 1px #0000000f;
			box-shadow: 0 1px 1px 1px #0000000f;
			border-bottom: 1px solid #0002;
			border-right: 1px solid #242529;
			border-left: 1px solid #242529;
			align-items: center;
			background: #36393f;
			min-height: 100%;
			font-size: 14px;
			padding: 7px 0;
			color: #fffd;
			margin: 0;
		}

		#main > .rules-head > div,
		#main > .article-head > div {
			border-top: 1px solid #0003;
			background: #33363c;
			font-size: 19px;
			padding: 15px 0;
		}

		#main > [field] > div > .text > a {
			border: 1px solid #0006;
			text-decoration: none;
			background: #5865f26e;
			white-space: nowrap;
			border-radius: 20px;
			user-select: none;
			transition: 0.2s;
			padding: 1px 4px;
			cursor: pointer;
			font-size: 90%;
			outline: none;
			color: #fffd;
		}
		#main > [field] > div > .text > a > i { position: relative; top: 1px; padding-right: 2px; }
		#main > [field] > div > .text > a:hover { background: #5865f2; color: #fff; }

		#main > [field] > div > .text > i {
			border: 1px solid #0006;
			border-radius: 20px;
			background: #0004;
			user-select: none;
			transition: 0.2s;
			padding: 1px 4px;
			cursor: pointer;
			font-size: 90%;
		}
		#main > [field] > div > .text > i:hover { background: #000a; }

		#main > [field] > div > .text > b {
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.375rem;
			display: inline;
			vertical-align: baseline;
			position: relative;
			overflow: hidden;
			-ms-flex-negative: 0;
			flex-shrink: 0;
		}
		#main > [field] > div > .text > b > i {
			position: relative; top: 1px; padding-right: 1px;
		}

		#main > [field] > div > div { padding: 0; }
		#main > [field] > div > .text {
			white-space: pre-line;
			font-family: Arial;
			line-height: 1.5;
			padding: 0 5px;
		}
		#main > [field] > div > .key {
			border-right: 1px solid #0002;
			position: relative;
			text-align: right;
			font-weight: 600;
			padding: 0 10px;
			font-size: 13px;
		}
		#main > [field] > div > .key > div {
			position: absolute;
			display: none;
			color: #fff;
			z-index: 1;
			bottom: 0;
			right: 0;
			left: 0;
			top: 0;
		}
		#main > [field] > div > .key > div > i {
			animation-duration: 0.5s;
			display: inline-block;
			text-align: center;
			transition: 0.2s;
			animation: none;
			cursor: pointer;
			height: 100%;
			width: 50%;
		}
		#main > [field] > div > .key > div.triple > i { width: 33.33%; }
		#main > [field] > div > .key > div > i:hover { background: #0004; }
		#main > [field] > div > .key:hover > div { display: block; animation: fadeIn; }
		#main > [field] > div > .key:hover { color: #0000; }
		#main > [field] > div > .key.key-w-1 { width: 25px; }
		#main > [field] > div > .key.key-w-2 { width: 35px; }
		#main > [field] > div > .key.key-w-3 { width: 50px; }
		#main > [field] > div > .key.key-w-4 { width: 65px; }
		#main > [field] > div > .key.key-w-5 { width: 80px; }
		#main > [field] > div > .key.key-w-6 { width: 95px; }
		@media (min-width: 576px) {
			#main > [field] > div > .key.key-w-1 { width: 25px; }
			#main > [field] > div > .key.key-w-2 { width: 50px; }
			#main > [field] > div > .key.key-w-3 { width: 75px; }
			#main > [field] > div > .key.key-w-4 { width: 100px; }
			#main > [field] > div > .key.key-w-5 { width: 125px; }
			#main > [field] > div > .key.key-w-6 { width: 150px; }
		}

		#main > .del[field] > div { background: linear-gradient(to right, #dc354585, #dc354547, #dc354547, #dc354547); }
		#main > .edit[field] > div { background: linear-gradient(to right, #ffc10747, #ffc10728, #ffc10728, #ffc10728); }
		#main > .new[field] > div { background: linear-gradient(to right, #28a74561, #28a74530, #28a74530, #28a74530); }

		#main > [field] .colorBox {
			display: inline-block;
			position: relative;
			top: 3px;
		}
		#main > [field] .colorBox > span {
			border: 1px solid #fff9;
			display: inline-block;
			height: 15px;
			width: 15px;
		}
		#main > [field] .colorBox > span:first-child {
			border-bottom-left-radius: 4px;
			border-top-left-radius: 4px;
		}
		#main > [field] .colorBox > span:last-child {
			border-bottom-right-radius: 4px;
			border-top-right-radius: 4px;
		}

		#main > .tabs > .row {
			-webkit-box-shadow: 0 1px 1px 1px #0000000f;
			box-shadow: 0 1px 1px 1px #0000000f;
			border-top-right-radius: 6px;
			border-top-left-radius: 6px;
			background: #242529;
			overflow: hidden;
			cursor: pointer;
			margin: 0;
		}
		#main > .tabs > .row > .col {
			border: 1px solid #242529;
			border-bottom: 1px dashed #242529;
			border-top-right-radius: 6px;
			border-top-left-radius: 6px;
			letter-spacing: 0.8px;
			text-align: center;
			user-select: none;
			font-weight: 600;
			transition: 0.2s;
			font-size: 12px;
			padding: 5px 0;
		}
		#main > .tabs > .row > .col:hover { background: #2c2f34; }
		#main > .tabs > .row > .col.active { background: #36393f; }

		#main > .tabs > .row > .col.edit { background: #ffc10742; }
		#main > .tabs > .row > .col.edit:hover { background: #ffc1075e; }
		#main > .tabs > .row > .col.edit.active { background: #ffc10794; }

		#copy { height: 1px; width: 1px; opacity: 0; }

		[field] .edit { padding: 0 7px !important; margin-top: 7px; }
		.rules-head .edit, #main > .article-head .edit { padding: 0 15px !important; }
		[field] .edit textarea {
			border: 1px solid #0003;
			white-space: pre-line;
			border-radius: 8px;
			font-family: Arial;
			background: #0003;
			line-height: 1.5;
			font-size: 13px;
			width: 100%;
		}
		[field] .edit .send {
			border: 1px solid #0003;
			border-radius: 8px;
			width: fit-content;
			font-family: Arial;
			text-align: center;
			user-select: none;
			background: #0003;
			transition: 0.2s;
			padding: 1px 6px;
			cursor: pointer;
			margin: 0 auto;
		}
		[field] .edit .send:hover { background: #202225; }

		.newField {
			border: 1px solid #242529;
			background: #33363c;
			border-radius: 40px;
			line-height: 23px;
			padding: 0 10px;
			width: 100px;
		}

		.tooltip > .tooltip-inner {
			border: 1px solid #000;
			font-family: 'Nunito';
			white-space: nowrap;
			background: #202225;
			max-width: none;
			font-size: 12px;
		}
	</style>

	<script>
		const r = {

			channels : @json($channels),
			roles : @json($roles),

			$main : $('#main'),
			@if(Auth::check() && (Auth::user()->discord_id == 349158497209810945 || Auth::user()->discord_id == 500020124515041283 || Auth::user()->discord_id == 475011645912121364 || Auth::user()->discord_id == 475011645912121364 || Auth::user()->discord_id == 533245137216864286 || Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 667377111589191681 || Auth::user()->discord_id == 296675836822814720))
				$release : $('#release'),
			@endif
			$left : $('#left'),
			$right : $('#right'),
			$versions : $('#versions'),
			$copy : $('#copy'),

			now : {{ $_GET['n'] ?? '0' }},
			old : {{ $_GET['o'] ?? '0' }},
			versions : [],
			tabs : { n : '', o : '' },

			generate : (n, o) => {
				let html = '';
				const col1 = o ? 'now col-sm-6' : 'now col-sm-10';
				const col2 = o ? 'old col-sm-6 d-none d-sm-block' : 'd-none';

				let fields = { rules : [], article : [] };
				let tabs = { n : { article : [], rules : [] }, o : { article : [], rules : [] } };
				r.addFields(n, fields, tabs.n, o);
				if(o) r.addFields(o, fields, tabs.o, n);

				r.tabs.n = r.generateTabs(tabs.n);
				if(o) r.tabs.o = r.generateTabs(tabs.o);

				html += '<div class="info ' + col1 + '"><div>' + (n.status == 'dev' ? 'Версия в разработке <input class="newField" />' : '№' + n.id + ' ' + n.created_at) + '</div></div>';
				html += '<div class="info ' + col2 + '">' + (o ? '<div>' + (o.status == 'dev' ? 'Версия в разработке <input class="newField" />' : '№' + o.id + ' ' + o.created_at) + '</div>' : '') + '</div>';

				html += '<div class="tabs ' + col1 + '"><div class="row">' + r.tabs.n + '</div></div>';
				html += '<div class="tabs ' + col2 + '">' + (o ? '<div class="row">' + r.tabs.o + '</div>' : '') + '</div>';

				html += '<div class="head ' + col1 + '" fieldType="article"><div>Устав</div></div>';
				html += '<div class="head ' + col2 + '" fieldType="article"><div>Устав</div></div>';
				fields.article = r.duplicate(fields.article);
				console.log(fields.article);
				fields.article.sort(r.sort);
				fields.article.forEach(f => {
					let classes = ' article ';
					if(f.sort.length == 2) classes += ' article-head';

					let d = r.getClass(n, o, f, 'article', ['new', 'edit', 'del']);
					html += '<div class="' + col1 + ' ' + d.classes + classes + '" fieldType="article" status="' + n.status + '" version="' + n.id + '" field="' + f.key + '"><div class="row">' + d.value + '</div></div>';

					if(!o) return html += '<div class="' + col2 + '"></div>';

					d = r.getClass(o, n, f, 'article', ['del', 'edit', 'new']);
					html += '<div class="' + col2 + ' ' + d.classes + classes + '" fieldType="article" status="' + o.status + '" version="' + o.id + '" field="' + f.key + '"><div class="row">' + d.value + '</div></div>';
				});

				html += '<div class="head ' + col1 + '" fieldType="rules"><div>Правила</div></div>';
				html += '<div class="head ' + col2 + '" fieldType="rules"><div>Правила</div></div>';
				fields.rules = r.duplicate(fields.rules);
				fields.rules.sort(r.sort);
				fields.rules.forEach(f => {
					let classes = ' rules ';
					if(f.sort.length == 1) classes += ' rules-head';

					let d = r.getClass(n, o, f, 'rules', ['new', 'edit', 'del']);
					html += '<div class="' + col1 + ' ' + d.classes + classes + '" fieldType="rules" status="' + n.status + '" version="' + n.id + '" field="' + f.key + '"><div class="row">' + d.value + '</div></div>';

					if(!o) return html += '<div class="' + col2 + '"></div>';

					d = r.getClass(o, n, f, 'rules', ['del', 'edit', 'new']);
					html += '<div class="' + col2 + ' ' + d.classes + classes + '" fieldType="rules" status="' + o.status + '" version="' + o.id + '" field="' + f.key + '"><div class="row">' + d.value + '</div></div>';
				});

				return html;
			},

			sort : (a, b) => {
				for(let i = 0; i < a.sort.length || i < b.sort.length; i++){
					if(a.sort[i] == b.sort[i]) continue;
					if(a.sort[i] > b.sort[i]) return 1;
					if(a.sort[i] < b.sort[i]) return -1;
				}
			},

			@if(Auth::check() && (Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 667377111589191681 || Auth::user()->discord_id == 296675836822814720))
				copyFieldHTML : '<div><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i></div>',
				copyFieldHTML2 : '<div class="triple"><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i><i class="icon-line-trash" title="Удалить пункт"></i></div>',
			@else
				copyFieldHTML : '<div><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i></div>',
				copyFieldHTML2 : '<div><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i></div>',
			@endif

			getClass : (a, b, f, t, d) => {
				let text = r.formattingText( a.data[t] ? (a.data[t][f.key] || '') : '' );
				const value = '<div class="col-auto key key-w-' + (f.sort.length + (t != 'rules')) + '">' + f.key + (a.status == 'dev' ? r.copyFieldHTML2 : r.copyFieldHTML) + '</div><div class="col text">' + text + '</div>';
				if(!a.data[t] || !a.data[t][f.key]) return { classes : d[2], value : '' };
				if(!b) return { classes : '', value : value };
				if(!b.data[t] || !b.data[t][f.key]) return { classes : d[0], value : value };
				if(a.data[t][f.key] != b.data[t][f.key]) return { classes : d[1], value : value };
				return { classes : '', value : value };
			},

			formattingText : text => {
				text = text.replace(/\*([^\*]+)\*/gi, '<i>$1</i>');
				text = text.replace(/<(#[0-9abcdef]{6})+>/gi, r.hexReplace);
				text = text.replace(/<#([0-9]+)>/gi, r.channelReplace);
				text = text.replace(/<@([0-9]+)>/gi, r.roleReplace);
				return text;
			},

			hexReplace : m => {
				m = m.match(/#[0-9abcdef]{6}/gi);

				let html = '';
				for(const color of m)
					html += '<span style="background: ' + color + '"></span>';

				return '<div class="colorBox">' + html + '</div>';
			},

			channelReplace : m => {
				m = m.match(/<#([0-9]+)>/i)[1];
				if(!r.channels[m]) return '<a target="_blank" title="' + m + '" href="https://discord.com/channels/433242520034738186/' + m + '">' + m + '</a>';
				const type = r.channels[m].type == 2 ? '<i class="icon-line-volume"></i>' : '<i class="icon-line-hash"></i>';

				return '<a target="_blank" title="' + r.channels[m].topic + '" href="https://discord.com/channels/433242520034738186/' + m + '">' + type + r.channels[m].name + '</a>';
			},

			roleReplace : m => {
				m = m.match(/<@([0-9]+)>/i)[1];
				return '<b role="' + m + '" style="color: #' + r.roles[m]?.color?.toString(16) + '"><i class="icon-line-at-sign"></i>' + r.roles[m]?.name + '</b>';
			},

			addFields : (v, fields, tabs, a) => {
				for(let t in v.data){
					if(!fields[t]) continue;
					for(let f in v.data[t]){
						let sort = f.split('.');
						for(let i = 0; i < sort.length; i++)
							if(!isNaN(sort[i])) sort[i] = Number(sort[i]);
						let tab = t == 'rules' ? sort[0] : sort[0]+'.'+sort[1];
						const edited = !a ? false : (v?.data[t][f] != a?.data[t][f]);
						if(!tabs[t][tab] || edited)
							tabs[t][tab] = {
								field : tab,
								sort : t == 'rules' ? sort[0] : sort[1],
								title : v.data[t][tab],
								edited : edited
							};
						fields[t].push({ key : f, sort : sort });
					}
				}
			},

			generateTabs : cat => {
				let html = '';

				for(const c in cat){
					const tabs = cat[c];

					let tabsArray = Object.values(tabs);
					tabsArray.sort((a, b) => a.sort - b.sort);
					for(const tab of tabsArray)
						html += '<div class="col' + (tab.edited ? ' edit' : '') + '" field="' + tab.field + '" data-toggle="tooltip" data-placement="top" title="' + tab.title + '">' + tab.field + '</div>'
				}

				return html;
			},

			duplicate : fields => fields.filter((field, index, self) =>
				index === self.findIndex(t => t.key === field.key)
			),

			onScroll : () => {
				const scroll = $(document).scrollTop() + 127;

				for(let i = 0; i < r.$now.length; i++){
					const $elem = $(r.$now[i]);
					const top = $elem.position().top;
					if(top > scroll || top + $elem.height() <= scroll) continue;
					const $tab = $('.tabs [field="' + $elem.attr('field') + '"]');
					if($tab.hasClass('active')) continue;
					r.$tabs.removeClass('active');
					$tab.addClass('active');
					break;
				}
			},

			create : () => {

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());

				$.ajax({
					url : '{{ route('rules.dev') }}',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : v => {
						v.data = JSON.parse(v.data);
						r.versions.unshift(v);
						r.update();
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
			},

			update : () => {
				const html = r.generate(r.versions[r.now], r.now == r.old ? undefined : r.versions[r.old]);
				r.$main.html(html);

				r.$now = $('.article-head, .rules-head');
				r.$tabs = $('.tabs [field]');

				r.updateButtons();
				r.onScroll();
				r.versionsUpdate();
				$('[data-toggle="tooltip"]').tooltip();
			},

			versionsUpdate : () => {
				let html = '';
				for(let i = 0; i < r.versions.length; i++)
				html += '<div class="col-auto"><div' + (r.now == i || r.old == i ? ' class="active"' : '') + ' version="' + i + '"></div></div>';
				r.$versions.html(html);
			},

			button : e => {
				if(!e) return r.update();

				const version = e.target.getAttribute('version');
				if(version){
					r.old = Number(version);
					if(!e.ctrlKey) r.now = r.old;
					return r.update();
				}

				const a = e.target.id;
				if(r.old == 0 && r.now == 0 && a == 'left' && r.versions[0].status != 'dev' && {{ RulesController::accessCheck(2) ? 'true' : 'false' }})
					return r.create();

				if(a == 'left' && r.now == 0){
					r.old = 0;
					return r.update();
				}

				if(a == 'right' && !r.versions[r.old + 1]){
					r.now = r.old;
					return r.update();
				}

				const value = a == 'left' ? -1 : 1;
				if(r.now != r.old){
					r.old += value;
					r.now += value;
				}else r[a == 'left' ? 'now' : 'old'] += value;

				r.update();
			},

			updateButtons : () => {
				if(r.now == 0 && r.old == 0){
					r.$left.html('Разработка');
					r.$right.html('История');
					r.$left.prop('disabled', r.versions[0].status == 'dev' || {{ Auth::check() && (Auth::user()->discord_id == 349158497209810945 || Auth::user()->discord_id == 500020124515041283 || Auth::user()->discord_id == 475011645912121364 || Auth::user()->discord_id == 475011645912121364 || Auth::user()->discord_id == 533245137216864286 || Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 667377111589191681 || Auth::user()->discord_id == 296675836822814720) ? 'false' : 'true' }});
				}
				if(r.now != 0 || r.old != 0){
					r.$left.html('<- Prev');
					r.$right.html('Next ->');
					r.$left.prop('disabled', false);
				}
				@if(Auth::check() && (Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 667377111589191681 || Auth::user()->discord_id == 296675836822814720))
					r.$release.prop('disabled', r.versions[r.now].status != 'dev');
				@endif
				r.$right.prop('disabled', r.versions.length <= 1);
				r.$right.prop('disabled', r.versions[r.now + 1]  ? false : true);
			},

			tab : e => {
				const field = e.target.getAttribute('field');
				const classes = e.target.closest('.tabs').classList.contains('now') ? 'now' : 'old';
				const $elem = $('.' + classes + '[field="' + field + '"]');
				$('body,html').stop();
				$('body,html').animate({ scrollTop: $elem.offset().top  - 127 }, 500);
			},

			link : e => {
				const field = typeof e == 'string' ? e : e.target.innerText;
				const $elem = $('[field="' + field + '"]');
				$elem.toggleClass('noanimate');
				$('body,html').animate({ scrollTop: $elem.offset().top  - document.documentElement.clientHeight/3 }, 500);
				setTimeout(() => $elem.toggleClass('noanimate'), 700);
			},

			share : {
				copy : e => {
					const elem = e.target.closest('[field]');
					const text = r.share.fix(elem.querySelector('.text').innerHTML);
					const key = elem.querySelector('.key').innerText;
					const str = '**' + key + ':** ' + text;
					r.share.select(str, elem);
				},

				open : e => {
					const elem = e.target.closest('[field]');
					const id = elem.getAttribute('field');
					const type = elem.classList.contains('now') ? 'now' : 'old';
					let link = document.location.origin + '/rules?';
					if(r[type] != 0) link += 'v=' + r.versions[r[type]].id + '&';
					link += 'f=' + id;
					r.share.select(link, elem);
				},

				fix : (text, e) => {
					text = text.replace(/<i>([^\<]+)<\/i>/gi, e ? ' *[$1](https://igc.su/rules?f=$1)* ' : '*$1*');
					text = text.replace(/<div class="colorBox">.+<\/div>\s/gi, '');
					text = text.replace(/<a[^h]*href="https:\/\/discord.com\/channels\/[0-9]+\/([0-9]+)">[^>]*>[^>]*>[^>]*>/gi, '<#$1>');
					text = e
						? text.replace(/<b role="([^"]+)[^>]*><i[^>]+><\/i>([^<]+)<\/b>/gi, '<@&$1>')
						: text.replace(/<b[^>]*><i[^>]*><\/i>([^<]+)<\/b>/gi, '$1');

					return text;
				},

				select : (str, elem) => {
					r.$copy.val(str);
					r.$copy[0].select();
					document.execCommand('copy');
					elem.classList.toggle('noanimate');
					setTimeout(() => elem.classList.toggle('noanimate'), 100);
					r.$copy.blur();
				}
			}

		};

		const versions = @json($versions).forEach((v, i) => {
			v.data = JSON.parse(v.data);

			r.versions.push(v);
		});

		$(document).ready(function () {
			$(document).on('scroll', r.onScroll);

			@isset($_GET['n'])
				r.now = r.versions.findIndex(e => e.id == {{ $_GET['n'] }});
			@endisset

			@isset($_GET['o'])
				r.old = r.versions.findIndex(e => e.id == {{ $_GET['o'] }});
			@endisset

			@isset($_GET['v'])
				const index = r.versions.findIndex(e => e.id == {{ $_GET['v'] }});
				r.now = index;
				r.old = index;
			@endisset

			r.update();

			const field = '{{ $_GET['f'] ?? '' }}';
			if(field) r.link(field);
		});

		r.$left.on('click', r.button);
		r.$right.on('click', r.button);
		r.$versions.on('click', '[version]', r.button);

		r.$main.on('click', '.tabs [field]', r.tab);
		r.$main.on('click', '.row .text i', r.link);
		r.$main.on('click', '.icon-line-copy', r.share.copy);
		r.$main.on('click', '.icon-line-open', r.share.open);

		@if(Auth::check() && (Auth::user()->discord_id == 256114365894230018 || Auth::user()->discord_id == 667377111589191681 || Auth::user()->discord_id == 296675836822814720))
			r.$main.on('keyup', 'input.newField', e => {
				if(e.keyCode != 13) return;

				const value = e.target.value;
				const type = value[0] == 'a' ? 'article' : 'rules';

				if(!r.versions[0].data[type][value])
					r.versions[0].data[type][value] = 'Новый пункт...';

				r.update();
			});

			r.$main.on('click', '[status="dev"] .text:not(.edited)', e => {
				if(!e.altKey) return;

				const $text = $(e.currentTarget);
				const $row = $text.closest('.row');
				const $field = $row.closest('[field]');
				const type = $field.attr('fieldtype');
				const field = $field.attr('field');

				$text.addClass('edited');
				$row.append('<div class="col-12 edit"><textarea rows="12">' + r.versions[0].data[type][field] + '</textarea><div class="send">Отправить</div></div>');
			});

			r.$main.on('click', '.icon-line-trash', e => {
				const $field = $(e.currentTarget.closest('[field]'));

				const type = $field.attr('fieldtype');
				const field = $field.attr('field');

				if(!confirm('Удалить пункт ' + field + '?')) return;

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());
				formData.append('field', field);
				formData.append('type', type);

				$.ajax({
					url : '{{ route('rules.delete') }}',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : () => {
						$field.addClass('del');
						delete r.versions[0].data[type][field];
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
			});

			r.$main.on('click', '[status="dev"] .edit .send', e => {
				const $field = $(e.currentTarget.closest('[field]'));

				const $text = $field.find('.text');
				const $edit = $field.find('.edit');

				const text = $field.find('textarea').val();
				const type = $field.attr('fieldtype');
				const field = $field.attr('field');

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());
				formData.append('field', field);
				formData.append('type', type);
				formData.append('text', text);

				$.ajax({
					url : '{{ route('rules.update') }}',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : () => {
						$edit.remove();
						$text.html(r.formattingText(text));
						$text.removeClass('edited');
						r.versions[0].data[type][field] = text;
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
			});

			r.$release.on('click', () => {
				if(!confirm('Вы действительно хотите опубликовать эту версию?')) return;

				let list = { rules : [], article : [] };
				let i = { rules : -1, article : -1 };
				$('.now[field]').each((e, elem) => {
					const text = r.share.fix(elem.querySelector('.text').innerHTML, true);
					const key = elem.querySelector('.key').innerText;

					let sort = key.split('.');
					const art = sort[0] == 'a';
					sort = art ? sort.length - 1 : sort.length;

					let result = sort == 1 ? key + ': ' + text
						: '**' + key + ':** ' + text + '\n' + (art ? '\n' : '');
					if(art)
						for(let i = 1; i < sort; i++) result = '• ' + result;

					const type = art ? 'article' : 'rules';
					if(sort != 1) return list[type][i[type]].description += result;
					list[type].push({ key : key, title : result, description : '' });
					++i[type];
				});

				let result = [];
				// for(const field of list.article) result.push(field);
				for(const field of list.rules) result.push(field);

				let formData = new FormData();

				formData.append('_token', $('input[name="_token"]').val());
				formData.append('list', JSON.stringify(result));

				r.$main.html('Процесс...');

				$.ajax({
					url : '{{ route('rules.release') }}',
					type : "POST",
					dataType : "json",
					cache : false,
					contentType : false,
					processData : false,
					data : formData,
					success : data => {
						console.log(data[1]);
						let v = data[0];
						v.data = JSON.parse(v.data);
						r.versions[0] = v;
						r.update();
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
						r.update();
					}
				});
			});
		@endif

	</script>
</x-app-layout>
