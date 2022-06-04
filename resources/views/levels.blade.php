<x-app-layout>
	<x-slot name="title">Уровни активности</x-slot>

	@csrf

	<div id="levels" class="container">

		<div id="levels-desc">
			С телефона рекомендуется просмотр в горизонтальном положении. В вертикальном положении некоторые характеристики скрыты.<br><a>Подробности о работе...</a>
			<div class="line"></div>
		</div>

		<div id="levels-text" class="d-none">
			<p>В Сообществе существуют роли за активность, они выдаются автоматически по достижению определённого количества опыта.</p>
			<p>Эта страница содержит таблицу участников Сообщества с их показателями и опытом.</p>

			<span>Опыт вычисляется по следующей формуле:</span>
			<div class="code">
				EXP = M<i>legit</i> x S<i>avg</i> / 100 * A<i>per</i><br>
				S<i>avg</i> = S<i>all</i> / M<i>all</i><br>
				A<i>per</i> = A / 30 * 100<br>
			</div>
			<p>Где <span class="code">EXP</span> - опыт юзера; <span class="code">M<i>legit</i></span> - кол-во засчитанных сообщений; <span class="code">S<i>avg</i></span> - среднее кол-во символов в сообщениях; <span class="code">S<i>all</i></span> - кол-во символов во всех сообщениях; <span class="code">M<i>all</i></span> - кол-во всех сообщений; <span class="code">A<i>per</i></span> - процент активности, <span class="code">A</span> - кол-во дней за последние 30 дней, в течении которых участник отправил хотя бы одно сообщение.</p>

			<p>В отличии от MEE6 в подсчёте опыта так же используется кол-во символов в сообщении. Таким образом, те, кто отправляет более насыщенные сообщения получают больше опыта, чем те, кто отправляет короткие сообщения.</p>

			<p>Засчитывается лишь одно сообщение в минуту. Например, если вы отправили сообщение и через 30 секунд отправили ещё одно сообщение - оно не засчитается, но если вы отправите сообщение ещё через 40 секунд - сообщение будет засчитано.</p>

			<p>В MEE6 опыт добавлялся к текущему. Теперь опыт пересчитывается после каждого изменения показателей. То есть теперь опыт может изменятся в обе стороны. Допустим, если раньше вы писали большие сообщения, но последнее время отправляете короткие сообщения, уменьшая среднее кол-во символов в сообщении, то количество опыта может наоборот уменьшится.</p>

			<p>Опыт полностью зависит от процента активности. Это процент дней за последние 30 дней, в которые пользователь не отправил ни одного сообщения.<br>Допустим, если за последние 30 дней, вы были активны лишь 10 дней, то общее количество опыта уменьшится на 66%. А если за последние 30 дней вы не проявляли активность вообще, ваш опыт будет равен нулю.</p>

			<div class="line"></div>

			<p>В таблице участники сгруппированы по уровням. У каждого уровня свои средние показатели по всем характеристикам. По средним показателям уровня можно примерно оценить, какие показатели должны быть у вас, чтобы достичь нужного уровня.<br>Некоторые характеристики имеют дополнительный показатель, показывающий процентную разницу от среднего показателя по текущему уровню. Группировку можно отключить, тогда будет показываться разница по средним показателям всех участников Сообщества.</p>

			<div class="line"></div>

			<p>Так же, есть показатель оверпоста, который не учитывается в подсчёте опыта. Оверпост - отправление нескольких сообщений за короткое время.</p>

			<span>Рассчитывается по следующей формуле:</span>
			<div class="code">
				O = ( M<i>all</i> - M<i>legit</i> ) / M<i>legit</i> * 100
			</div>
			<span>Где <span class="code">O</span> - процент оверпоста; <span class="code">M<i>legit</i></span> - кол-во засчитанных сообщений; <span class="code">M<i>all</i></span> - кол-во всех сообщений.</p>

			<p>Процент оверпоста демонстрирует стиль печати. Если процент маленький - это говорит о том, что участник предпочитает отправлять редкие, но содержательные сообщения. Если же процент большой, то это говорит о том, что участник предпочитает отправлять много малосодержательных сообщений.</p>
			<p>Норма оверпоста полностью формируется средним показателем по уровню. То есть Сообщество само определяет нормальный процент оверпоста.</p>

			<div class="line"></div>
		</div>

		<div id="roles">

			<div id="roles-head" class="row">
				<div class="col-3" style="padding-left: 5px; text-align:left;">Роль</div>
				<div class="col-2">Опыт</div>
				<div class="col-2">Кол-во юзеров</div>
				<div class="col-5">
					<div>Средние показатели</div>
					<div class="row">
						<div class="col-sm-2 d-none d-sm-block">Всего сообщений</div>
						<div class="col-sm-2 col-6">Засчитанных сообщений</div>
						<div class="col-sm-2 d-none d-sm-block">Процент оверпоста</div>
						<div class="col-sm-2 col-6">Всего символов</div>
						<div class="col-sm-2 d-none d-sm-block">Среднее кол-во символов</div>
						<div class="col-sm-2 d-none d-sm-block">Активность</div>
					</div>
				</div>
			</div>

			<div id="roles-list"></div>

		</div>

		<div id="levels-clear"></div>

		<div id="levels-container" class="shadow">
			<div id="levels-head" class="row">
				<div class="col-sm-4 levels-head-search">
					<i id="levels-sort-group" class="levels-sort-group-1"></i>
					<input placeholder="Поиск" {{ !empty($_GET['id']) ? 'value='.$_GET['id'] : '' }} />
				</div>
				<div class="col-sm-8">
					<div class="row">
						<div class="col-3 col-sm-2 levels-head-sort" sort="messagesAll"><span>Всего сообщений<i></i></span></div>
						<div class="col-3 col-sm-2 levels-head-sort" sort="messagesLegit"><span>Засчитанных сообщений<i></i></span></div>
						<div class="col-sm-2 d-none d-sm-block levels-head-sort" sort="overpost"><span>Процент оверпоста<i></i></span></div>
						<div class="col-3 col-sm-2 levels-head-sort" sort="symbols"><span>Всего символов<i></i></span></div>
						<div class="col-sm-2 d-none d-sm-block levels-head-sort" sort="symbolsAvg"><span>Среднее кол-во символов<i></i></span></div>
						<div class="col-sm-2 d-none d-sm-block levels-head-sort" sort="activity"><span>Активность<i></i></span></div>
						<div class="col-3 col-sm-2 levels-head-sort" sort="exp"><span>Прогресс уровня<i></i></span></div>
					</div>
				</div>
			</div>

			<div id="levels-list"></div>
		</div>

	</div>

	<style>
		#levels-desc {
			text-align: center;
		}

		#levels-desc > a {
			color: #70aacf;
			cursor: pointer;
		}
		#levels-desc > a:hover {
			color: #fff;
		}

		#roles {
			text-align: center;
			font-size: 12px;
			width: 100%;
		}
		#roles .row {
			align-items: center;
			margin: 0;
		}
		#roles .role {
			border-right: 1px solid #0006;
			border-left: 1px solid #0006;
		}
		#roles .row > div {
			padding: 1px 2px;
		}
		#roles #roles-head {
			border-top-right-radius: 0.375rem;
			border-top-left-radius: 0.375rem;
			border-right: 1px solid #0006;
			border-left: 1px solid #0006;
			border-top: 1px solid #0006;
			background: #292b2e;
			line-height: 10px;
			overflow: hidden;
		}
		#roles #roles-list {
			border-bottom-right-radius: 0.375rem;
			border-bottom-left-radius: 0.375rem;
			background: #36393f;
		}
		#roles #roles-list > div:nth-child(2n) {
			background: #0001;
		}
		#roles #all {
			border-bottom-right-radius: 0.375rem;
			border-bottom-left-radius: 0.375rem;
			border-bottom: 1px solid #0006;
			border-right: 1px solid #0006;
			border-left: 1px solid #0006;
			background: #292b2e;
		}


		#levels-text {
			font-size: 14px;
		}
		#levels-text p {
			margin-bottom: 15px;
		}
		#levels-text .code {
			border: 1px solid #0006;
			background: #292b2e;
			border-radius: 5px;
			padding: 0px 5px;
		}
		#levels-text div.code {
			margin-bottom: 3px;
			width: fit-content;
			padding: 3px 10px;
		}
		#levels-text span.code {
			display: inline-block;
			line-height: 12px;
			padding: 1px 2px;
		}
		#levels-text .code > i {
			font-size: 63%;
		}
		#levels-text .line, #levels-desc .line {
			border-bottom: 1px solid #0003;
			position: relative;
			margin: 30px 60px;
		}


		#levels-container {
			border-radius: 0.375rem;
			margin-bottom: 500px;
		}

		#levels-clear {
			background: #2f3136;
			position: sticky;
			margin: 0 -2px;
			height: 20px;
			z-index: 2;
			top: 40px;
		}

		#levels-head {
			border-top-right-radius: 0.375rem;
			border-top-left-radius: 0.375rem;
			border-right: 1px solid #0006;
			border-left: 1px solid #0006;
			border-top: 1px solid #0006;
			background: #292b2e;
			overflow: hidden;
			position: sticky;
			min-height: 30px;
			z-index: 2;
			top: 54px;
			margin: 0;
		}
		#levels-head > .col-sm-8 > .row {
			height: 100%;
		}

		#levels-sort-group {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-family: font-icons;
			border: 3px solid #0006;
			text-transform: none;
			font-variant: normal;
			font-style: normal;
			position: absolute;
			border-radius: 6px;
			text-align: center;
			padding-left: 1px;
			line-height: 18px;
			font-weight: 400;
			cursor: pointer;
			font-size: 12px;
			color: #0000;
			height: 23px;
			width: 23px;
			margin: 3px;
			speak: none;
		}
		#levels-sort-group:before { position: relative; left: -1px; content: "\e7fb"; }
		#levels-sort-group.levels-sort-group-1::before { content: "\e7fb"; }
		#levels-sort-group.levels-sort-group-2::before { content: "\e7fa"; }
		#levels-sort-group.levels-sort-group-1,
		#levels-sort-group.levels-sort-group-2 {
			text-shadow: 0px 1px 1px #0006;
			border: 3px solid #000;
			background: #18191b;
			color: #fff;
		}

		.levels-head-search {
			padding: 0;
		}
		.levels-head-search input {
			padding-left: 30px;
			text-align: center;
			background: none;
			outline: none;
			height: 100%;
			width: 100%;
		}

		.levels-head-sort {
			position: relative;
			text-align: center;
			user-select: none;
			line-height: 10px;
			cursor: pointer;
			font-size: 11px;
			padding: 2px;
		}
		.levels-head-sort > span {
			-webkit-transform: translate(0, -50%);
			-moz-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			-o-transform: translate(0, -50%);
			transform: translate(0, -50%);
			position: relative;
			display: block;
			top: 50%;
		}
		.levels-head-sort:hover { background: #202225; }
		.levels-head-sort > span > i {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-transform: translate(0, -50%);
			-moz-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			-o-transform: translate(0, -50%);
			transform: translate(0, -50%);
			font-family: font-icons;
			display: inline-block;
			font-variant: normal;
			text-transform: none;
			line-height: inherit;
			position: absolute;
			font-style: normal;
			font-weight: 400;
			font-size: 10px;
			display: block;
			right: -12px;
			speak: none;
			top: 50%;
		}
		.levels-head-sort.levels-head-sort-1 > span > i::before { content: "\e7fa"; }
		.levels-head-sort.levels-head-sort-0 > span > i::before { content: "\e7fb"; }
		.levels-head-sort.levels-head-sort-0, .levels-head-sort.levels-head-sort-1 {
			padding-right: 18px;
		}


		#levels-list {
			border-bottom-right-radius: 0.375rem;
			border-bottom-left-radius: 0.375rem;
			border-bottom: 1px solid #0006;
			border-right: 1px solid #0006;
			border-left: 1px solid #0006;
			background: #36393f;
		}

		#levels-list > .separator {
			box-shadow: 0 2px 3px -1px #0001;
			font-weight: 900;
			position: sticky;
			font-size: 13px;
			height: 38px;
			color: #000c;
			z-index: 2;
			margin: 0;
		}

		#levels-list > .separator .separator-data > .row {
			align-items: center;
		}
		#levels-list > .separator .separator-data > .row > div {
			text-align: center;
			line-height: 18px;
			font-size: 13px;
			padding: 0 5px;
		}
		@media(min-width: 576px){
			#levels-list > .separator { height: 18px; }
		}

		.user > div {
			align-items: center;
			margin: 0;
		}
		.user:nth-child(2n) > div {
			background: #0001;
		}

		.user-position {
			align-items: center;
			padding: 0 0 0 15px;
			display: flex;
		}
		.user-position > div {
			letter-spacing: -1px;
			border-radius: 50%;
			text-align: center;
			line-height: 32px;
			font-size: 13px;
			height: 32px;
			width: 32px;
			color: #000;
		}

		.user-name {
			border-bottom: 1px dashed #0002;
			min-height: 60px;
			position: relative;
		}
		@media (min-width: 576px){
			.user-name { border-bottom: none; }
		}
		.user-name img {
			border-radius: 25px;
			position: absolute;
			min-width: 50px;
			max-width: 50px;
			display: block;
			height: 50px;
			width: 50px;
			top: 5px;
		}
		.user-name > div {
			-webkit-transform: translate(0, -50%);
			-moz-transform: translate(0, -50%);
			-ms-transform: translate(0, -50%);
			-o-transform: translate(0, -50%);
			transform: translate(0, -50%);
			align-items: center;
			padding-left: 60px;
			position: absolute;
			flex-wrap: nowrap;
			line-height: 13px;
			display: block;
			top: 50%;
		}
		.user-name > div small {
			font-style: italic;
			display: block;
			font-size: 60%;
			color: #fffb;
		}

		.user-data > .row {
			align-items: center;
		}
		.user-data > .row > div {
			text-align: center;
			line-height: 12px;
			font-size: 14px;
			padding: 5px;
		}
		.user-data > .row > div > small { font-size: 70%; opacity: 0.6; }
		.user-data > .row > div > small.plus { color: #30bf50; }
		.user-data > .row > div > small.minus { color: #ff818d; }
		.user-data > .row > div > small.plus::before { content: "+"; }
		.user-data > .row > div > small.minus::before { content: "-"; }
		.user-data > .row > div.user-overpost > small.plus::before { content: "-"; }
		.user-data > .row > div.user-overpost > small.minus::before { content: "+"; }
		.user-data > .row > div > b {
			font-weight: 100;
			font-size: 70%;
			color: #fff3;
		}
		.user-data > .row > div.user-exp > b {
			font-size: 80%;
			color: #fff9;
		}

		.user-exp > div {
			border: 1px solid #18191b;
			border-radius: 50px;
			background: #292b2e;
			position: relative;
			overflow: hidden;
			height: 14px;
		}
		.user-exp > div > span {
			text-shadow: 0 1px 2px #000;
			position: absolute;
			font-weight: 600;
			font-size: 14px;
			z-index: 1;
			right: 0;
			left: 0;
			top: 0;
		}
		.user-exp > div > div {
			border-radius: 50px;
			position: absolute;
			opacity: 0.7;
			height: 100%;
			top: 0;
		}
		.user-exp > small > b {
			font-weight: inherit;
			color: #ff818d;
		}

		@media (min-width: 540px){
			.container {
				max-width: none !important;
			}
		}
		@media (min-width: 1200px){
			.container {
				max-width: 1200px !important;
			}
		}
		@media (min-width: 576px){
			#levels-container .col-sm-2 {
				-ms-flex: 0 0 14.285714285714286%;
				flex: 0 0 14.285714285714286%;
				max-width: 14.285714285714286%;
			}
		}

	</style>

	<script>

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
							s.users[id].member.avatar = data[id];
							s.users[id].html = s.list.userHTML(s.users[id]);
							$('.user[user="' + id + '"] > .user-name img').attr('src','https://cdn.discordapp.com/' + data[id]);
						}
					},
					error: console.error
				});
			}, 1000);
		};

		const s = {

			roles : [],
			users : {},

			headHeight : 0,

			search : {
				$ : $('#levels-head .levels-head-search input'),

				value : [],

				update : () => {
					s.search.value = s.search.$.val().toLowerCase()
						.replace(/[^0-9a-zа-яё\s]/gi, '').trim().replace(/\s+/gi, ' ').split(/\s/gi);

					s.list.update();
				},
			},

			sort : {
				$ : $('#levels-head .levels-head-sort'),
				$group : $('#levels-sort-group'),

				group : 1,

				target : undefined,

				val : 0,
				values : [
					(a, b) => b - a,
					(a, b) => a - b
				],

				groupUpdate : function(e){
					event.preventDefault();
					for(let i = 0; i < 3; i++)
						if(s.sort.group == i){
							const current = e.type == 'click'
								? (i >= 2 ? 0 : i+1)
								: (i <= 0 ? 2 : i-1);
							s.sort.$group.removeClass('levels-sort-group-' + i);
							s.sort.$group.addClass('levels-sort-group-' + current);
							s.sort.group = current;
							break;
						}

					for(const id in s.users)
						s.users[id].html = s.list.userHTML(s.users[id]);

					s.list.update();
				},

				update : target => {

					if(s.sort.target != target){
						s.sort.target = target;
						s.sort.val = 0;
					}else
						s.sort.val = s.sort.val ? 0 : 1;

					$('#levels-head .levels-head-sort.levels-head-sort-0').removeClass('levels-head-sort-0');
					$('#levels-head .levels-head-sort.levels-head-sort-1').removeClass('levels-head-sort-1');
					$('#levels-head .levels-head-sort[sort="' + target + '"]').addClass('levels-head-sort-' + s.sort.val);
				},
			},

			roleGen : () => {

				let html = '';

				for(const role of s.roles){
					html = '<div class="role row">' +
						'<div class="col-3" style="padding-left: 5px; text-align:left; color: #' + role.colorHEX + '">@' + role.name + '</div>' +
						'<div class="col-2">' + role.exp.toLocaleString() + '</div>' +
						'<div class="col-2">' + role.count.toLocaleString() + '</div>' +
						'<div class="col-5">' +
							'<div class="row">' +
								'<div class="col-sm-2 d-none d-sm-block">' + role.messagesAll.toLocaleString() + '</div>' +
								'<div class="col-sm-2 col-6">' + role.messagesLegit.toLocaleString() + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block">' + role.overpost + '%</div>' +
								'<div class="col-sm-2 col-6">' + role.symbols.toLocaleString() + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block">' + role.symbolsAvg + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block">' + role.activityPer + '%</div>' +
							'</div>' +
						'</div>' +
					'</div>' + html;
				}

				html += '<div id="all" class="role row">' +
					'<div class="col-3" style="padding-left: 5px; text-align:left;">Общие данные</div>' +
					'<div class="col-2"></div>' +
					'<div class="col-2">' + s.all.count.toLocaleString() + '</div>' +
					'<div class="col-5">' +
						'<div class="row">' +
							'<div class="col-sm-2 d-none d-sm-block">' + s.all.messagesAll.toLocaleString() + '</div>' +
							'<div class="col-sm-2 col-6">' + s.all.messagesLegit.toLocaleString() + '</div>' +
							'<div class="col-sm-2 d-none d-sm-block">' + s.all.overpost + '%</div>' +
							'<div class="col-sm-2 col-6">' + s.all.symbols.toLocaleString() + '</div>' +
							'<div class="col-sm-2 d-none d-sm-block">' + s.all.symbolsAvg + '</div>' +
							'<div class="col-sm-2 d-none d-sm-block">' + s.all.activityPer + '%</div>' +
						'</div>' +
					'</div>' +
				'</div>'

				$('#roles-list').html(html);

			},

			list : {
				$ : $('#levels-list'),

				qty : 0,
				users : [],

				avg : { overpost : 0, symbolsAvg : 0 },

				update : () => {
					s.list.users = [];

					for(const id in s.users){
						const user = s.users[id];
						let access = true;

						for(const value of s.search.value)
							if(user.member.search.indexOf(value) == -1) access = false;

						if(!access) continue;

						s.list.users.push(user);
					}

					if(s.sort.group)
						s.list.users.sort((a, b) => {
							if(a.level < b.level) return s.sort.group == 2 ? -1 : 1;
							if(a.level > b.level) return s.sort.group == 2 ? 1 : -1;
							return s.sort.values[s.sort.val](a[s.sort.target], b[s.sort.target])
						});
					else
						s.list.users.sort((a, b) => s.sort.values[s.sort.val](a[s.sort.target], b[s.sort.target]));

					s.list.updateHTML();
				},

				updateHTML : clear => {
					if(clear !== true) s.list.qty = 0;
					const limit = s.list.qty + 20;
					let html = '';

					let qty = 0;
					let level = s.roles.length;
					for(const user of s.list.users){
						if(qty >= limit) continue;
						if(s.sort.group && level != s.users[user.id].level)
							html += s.list.separatorHTML(s.roles[s.users[user.id].level]);
						html += s.users[user.id].html;
						++qty;
						level = s.users[user.id].level;
					}

					s.list.qty = qty;
					s.list.$.html(html);
				},

				userData : user => {
					// user.overpost = Math.round(1000 - (user.messagesLegit/user.messagesAll)*1000)/10;
					user.overpost = Math.round((user.messagesAll-user.messagesLegit)/user.messagesLegit*1000)/10;
					user.symbolsAvg = Math.round((user.symbols/user.messagesAll)*10)/10;

					user.activityPer = Math.round(user.activity/30*1000)/10;

					user.exp = Math.round(user.messagesLegit * user.symbolsAvg / 100 * user.activityPer);
					user.expFine = Math.round(100/user.activityPer*user.exp - user.exp);

					if(isNaN(user.exp)) return false;

					for(let r = 0; r < s.roles.length; r++){
						if(s.roles[r].exp <= user.exp){
							if(r == s.roles.length -1){
								user.level = r;
								user.levelProgress = true;
							}
							continue;
						}

						const prev = s.roles[r-1];

						if(!prev) return false;

						user.levelProgress = Math.round(((user.exp - prev.exp)/(s.roles[r].exp - prev.exp))*1000)/10;
						user.level = r - 1;
						break;
					}

					return user;
				},

				getColor : num => num.toString(16).padStart(6, '0'),

				separatorHTML : role => {
					return '<div class="separator row" style="top: ' + s.headHeight + 'px; background: #' + role.colorHEX + '">' +
						'<div class="col-sm-4 separator-name">' +
							role.name + ' - ' + role.count + ' чел.' +
						'</div>' +
						'<div class="col-sm-8 separator-data">' +
							'<div class="row">' +
								'<div class="col-3 col-sm-2" sort="messagesAll">' + role.messagesAll.toLocaleString() + '</div>' +
								'<div class="col-3 col-sm-2" sort="messagesLegit">' + role.messagesLegit.toLocaleString() + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block" sort="overpost">' + role.overpost + '%</div>' +
								'<div class="col-3 col-sm-2" sort="symbols">' + role.symbols.toLocaleString() + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block" sort="symbolsAvg">' + role.symbolsAvg + '</div>' +
								'<div class="col-sm-2 d-none d-sm-block" sort="symbolsAvg">' + role.activityPer + '%</div>' +
								'<div class="col-3 col-sm-2" sort="exp"></div>' +
							'</div>' +
						'</div>' +
					'</div>';
				},

				userHTML : user => {
					const name = user.member.name.split('#');
					const diff = s.sort.group > 0 ? 'diffRole' : 'diff';
					const c = {
						overpost : user[diff].overpost > 0,
						symbolsAvg : user[diff].symbolsAvg > 0,
						activityPer : user[diff].activityPer > 0
					}

					const role = s.roles[user.level];
					const roleNext = s.roles[user.level+1];
					const position = s.expUsers.findIndex(u => u.id == user.id) + 1;

					return '<div class="user" user="' + user.id + '" style="background: #' + role.colorHEX + '10;">' +
						'<div class="row">' +
							'<div class="col-sm-4">' +
								'<div class="row">' +
									'<div class="col-auto user-position"><div style="background: #' + role.colorHEX + '">' + position + '</div></div>' +
									'<div class="col user-name">' +
										'<img src="https://cdn.discordapp.com/' + user.member.avatar + '" onError="memberUpdate(this, \'' + user.id + '\')" loading="lazy"/>' +
										'<div><small style="color: #' + role.colorHEX + '">' + role.name + '</small>' + name[0] + '<small>#' + name[1] + '</small></div>' +
									'</div>' +
								'</div>'	+
							'</div>' +
							'<div class="user-data col-sm-8">' +
								'<div class="row">' +
									'<div class="col-3 col-sm-2 user-messagesAll"><b>All messages<br></b>' + user.messagesAll.toLocaleString() + '</div>' +
									'<div class="col-3 col-sm-2 user-messagesLegit"><b>Legit messages<br></b>' + user.messagesLegit.toLocaleString() + '</div>' +
									(
										user.overpost >= 0
											? '<div class="col-sm-2 d-none d-sm-block user-overpost"><b>Overpost<br></b>' + user.overpost + '%<br><small class="' + (c.overpost ? 'plus' : 'minus') + '">' + Math.abs(user[diff].overpost) + '%</small></div>'
											: '<div class="col-sm-2 d-none d-sm-block user-overpost">NaN</div>'
									) +
									'<div class="col-3 col-sm-2 user-symbols"><b>Symbols<br></b>' + user.symbols.toLocaleString() + '</div>' +
									'<div class="col-sm-2 d-none d-sm-block user-symbolsAvg"><b>Symbols avg<br></b>' + user.symbolsAvg + '<br><small class="' + (c.symbolsAvg ? 'plus' : 'minus') + '">' + Math.abs(user[diff].symbolsAvg) + '%</small></div>' +
									'<div class="col-sm-2 d-none d-sm-block user-activityPer"><b>Activity<br></b>' + user.activityPer + '%<br><small class="' + (!user[diff].activityPer ? '' : !c.activityPer ? 'plus' : 'minus') + '">' + Math.abs(user[diff].activityPer) + '%</small></div>' +
									'<div class="col-3 col-sm-2 user-exp">' +
										(
											user.levelProgress === true ? '<div>Max</div>'
												: '<b>Next lvl - </b> <b style="color: #' + roleNext.colorHEX + '">' + roleNext.name + '</b>' +
													'<div><span>' + user.levelProgress + '%</span><div style="width: ' + user.levelProgress + '%; background: #' + roleNext.colorHEX + '"></div></div>'
										) +
										'<small>' + user.exp.toLocaleString() + ' ' + ( user.expFine > 0 ? '| <b>' + user.expFine.toLocaleString() + '</b>' : '' ) + '</small>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
				},

			},

		}

		$(document).ready(() => {

			<?php
				$list = [];
				foreach($members as $m => $data) $list[] = $m;

				$levels = DB::connection('heroku')
					->table('levels')
					->where([
						['messagesLegit', '>', 10],
						['messagesAll', '>', 10],
						['activity', '>', 0]
					])
					// ->whereIn('id', $list)
					->get();
			?>

			const members = @json($members);
			const users = @json($levels);
			const roles = @json($roles);
			const levels_roles = @json(DB::connection('heroku')->table('levels_roles')->get());

			for(const r in roles){
				const lrole = levels_roles.find(role => role.id === r)
				if(!lrole) continue;
				roles[r].exp = lrole.value;
				roles[r].colorHEX = s.list.getColor(roles[r].color);
				roles[r].messagesLegit = 0;
				roles[r].activityPer = 0;
				roles[r].messagesAll = 0;
				roles[r].symbolsAvg = 0;
				roles[r].overpost = 0;
				roles[r].symbols = 0;
				roles[r].count = 0;
				s.roles.push(roles[r]);
			}
			s.roles.sort((a, b) => a.exp - b.exp);

			let notmember = {};

			s.all = {
				messagesLegit: 0,
				activityPer: 0,
				messagesAll: 0,
				symbolsAvg: 0,
				overpost: 0,
				symbols: 0,
				count: 0,
			}

			s.expUsers = [];
			for(let user of users){
				user = s.list.userData(user);
				if(user == false) continue;
				if(!members[user.id]){
					notmember[user.id] = true;
					continue;
				}
				user.member = members[user.id];
				s.users[user.id] = user;
				s.expUsers.push({ id: user.id, exp: user.exp });
				s.all.messagesLegit += user.messagesLegit;
				s.all.messagesAll += user.messagesAll;
				s.all.activityPer += user.activityPer;
				s.all.symbolsAvg += user.symbolsAvg;
				s.all.overpost += user.overpost;
				s.all.symbols += user.symbols;
				s.all.count += 1;
				s.roles[user.level].messagesLegit += user.messagesLegit;
				s.roles[user.level].messagesAll += user.messagesAll;
				s.roles[user.level].activityPer += user.activityPer;
				s.roles[user.level].symbolsAvg += user.symbolsAvg;
				s.roles[user.level].overpost += user.overpost;
				s.roles[user.level].symbols += user.symbols;
				s.roles[user.level].count += 1;
			}
			s.expUsers.sort((a, b) => b.exp - a.exp);

			if(!$.isEmptyObject(notmember)){
				let formData = new FormData();
				formData.append('_token', $('input[name="_token"]').val());
				formData.append('users', JSON.stringify(notmember));
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
						notmember = {};
						for(const d in data)
						members[d] = data;
					},
					error: console.error
				});
			}

			s.all.messagesLegit = Math.round(s.all.messagesLegit / s.all.count);
			s.all.messagesAll = Math.round(s.all.messagesAll / s.all.count);
			s.all.activityPer = Math.round(s.all.activityPer / s.all.count * 10)/10;
			s.all.symbolsAvg = Math.round(s.all.symbolsAvg / s.all.count * 10)/10;
			s.all.overpost = Math.round(s.all.overpost / s.all.count * 10)/10;
			s.all.symbols = Math.round(s.all.symbols / s.all.count);
			for(const role of s.roles){
				role.messagesLegit = Math.round(role.messagesLegit / role.count);
				role.messagesAll = Math.round(role.messagesAll / role.count);
				role.activityPer = Math.round(role.activityPer / role.count * 10)/10;
				role.symbolsAvg = Math.round(role.symbolsAvg / role.count * 10)/10;
				role.overpost = Math.round(role.overpost / role.count * 10)/10;
				role.symbols = Math.round(role.symbols / role.count);
			}
			for(const id in s.users){
				s.users[id].diff = {
					overpost : Math.round(s.all.overpost-s.users[id].overpost),
					activityPer : Math.round(s.all.activityPer-s.users[id].activityPer),
					symbolsAvg : Math.round((s.users[id].symbolsAvg-s.all.symbolsAvg)/s.all.symbolsAvg*1000)/10
				};
				s.users[id].diffRole = {
					overpost : Math.round(s.roles[s.users[id].level].overpost-s.users[id].overpost),
					activityPer : Math.round(s.roles[s.users[id].level].activityPer-s.users[id].activityPer),
					symbolsAvg : Math.round((s.users[id].symbolsAvg-s.roles[s.users[id].level].symbolsAvg)/s.roles[s.users[id].level].symbolsAvg*1000)/10
				};
				s.users[id].html = s.list.userHTML(s.users[id]);
			}

			s.roleGen();
			s.sort.update('exp');
			s.search.update();
			s.list.update();

			@if(!empty($_GET['id']))
				history.pushState(null, null, window.location.href.replace(window.location.search, ''));
				$('body,html').animate({ scrollTop: $('#levels-clear').offset().top }, 500);
			@endif

			const resize = () => {
				s.headHeight = document.querySelector('#levels-head').offsetHeight + 54;
				$('#levels-list > .separator').css('top', s.headHeight + 'px');
			};
			$(window).resize(resize);
			resize();

			document.addEventListener('scroll', e => {
				let bottom = document.documentElement.getBoundingClientRect().bottom;
				if(bottom < document.documentElement.clientHeight + 800)
				s.list.updateHTML(true);
			}, true);

			s.search.$.on('input', s.search.update);

			s.sort.$.on('click', e => { s.sort.update(e.currentTarget.getAttribute('sort')); s.list.update(); });

			s.sort.$group.on('click contextmenu', s.sort.groupUpdate);

			$('#levels-desc > a').on('click', () => {
				$('#levels-text').toggleClass('d-none');
			});

		});

	</script>
</x-app-layout>
