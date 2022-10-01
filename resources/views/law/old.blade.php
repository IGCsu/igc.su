@extends('layouts.app')

@section('title', 'Устав')

@section('vue-disable', 'true')

@section('content')

	<div class="container law-old">

		<div id="buttons" class="row justify-content-center">
			<div class="col-auto"><button id="left"></button></div>
			<div class="col-auto"><button id="right"></button></div>
			<i id="infoCopy" class="col-sm-10">
				Для того, чтобы скопировать ссылку (<i class="icon-line-open"></i>) или цитировать (<i class="icon-line-copy"></i>) пункт правил, достаточно навестись, или нажать (на телефоне), на номер пункта, и далее нажать на соответствующую кнопку.
			</i>
		</div>

		<div id="versions" class="row justify-content-center"></div>

		<div id="main" class="row justify-content-center"></div>

		<textarea id="copy"></textarea>

	</div>

	<script src="/js/jquery-3.6.1.min.js"></script>

	<script>
		const r = {
			channels : @json($channels),
			roles : @json($roles),
			$main : $('#main'),
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
				html += '<div class="info ' + col1 + '"><div>№' + n.id + ' ' + n.created_at + '</div></div>';
				html += '<div class="info ' + col2 + '">' + (o ? '<div>№' + o.id + ' ' + o.created_at + '</div>' : '') + '</div>';
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
			copyFieldHTML : '<div><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i></div>',
			copyFieldHTML2 : '<div><i class="icon-line-open" title="Скопировать ссылку на пункт"></i><i class="icon-line-copy" title="Скопировать текст пункта"></i></div>',
			getClass : (a, b, f, t, d) => {
				let text = r.formattingText( a.data[t] ? (a.data[t][f.key] || '') : '' );
				const value = '<div class="col-auto key key-w-' + (f.sort.length + (t != 'rules')) + '">' + f.key + r.copyFieldHTML + '</div><div class="col text">' + text + '</div>';
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
						html += '<div class="col' + (tab.edited ? ' edit' : '') + '" field="' + tab.field + '" data-placement="top" title="' + tab.title + '">' + tab.field + '</div>'
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
			create : () => false,
			update : () => {
				const html = r.generate(r.versions[r.now], r.now == r.old ? undefined : r.versions[r.old]);
				r.$main.html(html);
				r.$now = $('.article-head, .rules-head');
				r.$tabs = $('.tabs [field]');
				r.updateButtons();
				r.onScroll();
				r.versionsUpdate();
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
				if(r.old == 0 && r.now == 0 && a == 'left' && false)
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
					r.$left.prop('disabled', false);
				}
				if(r.now != 0 || r.old != 0){
					r.$left.html('<- Prev');
					r.$right.html('Next ->');
					r.$left.prop('disabled', false);
				}
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
	</script>

@endsection



