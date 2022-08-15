<template>

	<div class="levels container">

		<div class="levels-text">
			<div class="levels-center">
				<div class="levels-line"></div>

				С телефона рекомендуется просмотр в горизонтальном положении. В вертикальном положении некоторые характеристики скрыты.<br>
				<div class="levels-text-toggle" v-on:click="levelsTextToggle">Подробности о работе...</div>

				<div class="levels-line"></div>
			</div>

			<div v-if="levelsText">
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

				<div class="levels-line"></div>

				<p>В таблице участники сгруппированы по уровням. У каждого уровня свои средние показатели по всем характеристикам. По средним показателям уровня можно примерно оценить, какие показатели должны быть у вас, чтобы достичь нужного уровня.<br>Некоторые характеристики имеют дополнительный показатель, показывающий процентную разницу от среднего показателя по текущему уровню. Группировку можно отключить, тогда будет показываться разница по средним показателям всех участников Сообщества.</p>

				<div class="levels-line"></div>

				<p>Так же, есть показатель оверпоста, который не учитывается в подсчёте опыта. Оверпост - отправление нескольких сообщений за короткое время.</p>

				<span>Рассчитывается по следующей формуле:</span>
				<div class="code">
					O = ( M<i>all</i> - M<i>legit</i> ) / M<i>legit</i> * 100
				</div>
				<p>Где <span class="code">O</span> - процент оверпоста; <span class="code">M<i>legit</i></span> - кол-во засчитанных сообщений; <span class="code">M<i>all</i></span> - кол-во всех сообщений.</p>

				<p>Процент оверпоста демонстрирует стиль печати. Если процент маленький - это говорит о том, что участник предпочитает отправлять редкие, но содержательные сообщения. Если же процент большой, то это говорит о том, что участник предпочитает отправлять много малосодержательных сообщений.</p>
				<p>Норма оверпоста полностью формируется средним показателем по уровню. То есть Сообщество само определяет нормальный процент оверпоста.</p>

				<div class="levels-line"></div>

			</div>
		</div>

		<div class="levels-roles">

			<levels-role
				type="head"
				name="Роль"
				exp="Опыт"
				count="Кол-во юзеров"
				messagesAll="Всего сообщений"
				messagesLegit="Засчитанных сообщений"
				overpost="Процент оверпоста"
				symbols="Всего символов"
				symbolsAvg="Среднее кол-во символов"
				activityPer="Активность"
			></levels-role>

			<levels-role
				v-for="role in roles"
				v-bind:key="role.id"
				type="item"
				v-bind:name="'@' + role.name"
				v-bind:exp="role.exp.toLocaleString()"
				v-bind:count="role.count.toLocaleString()"
				v-bind:messages-all="role.messagesAll.toLocaleString()"
				v-bind:messages-legit="role.messagesLegit.toLocaleString()"
				v-bind:overpost="role.overpost + '%'"
				v-bind:symbols="role.symbols.toLocaleString()"
				v-bind:symbols-avg="role.symbolsAvg"
				v-bind:activity-per="role.activityPer + '%'"
				v-bind:color="role.color"
			></levels-role>

			<levels-role
				type="footer"
				name="Общие данные"
				v-bind:count="all.count.toLocaleString()"
				v-bind:messages-all="all.messagesAll.toLocaleString()"
				v-bind:messages-legit="all.messagesLegit.toLocaleString()"
				v-bind:overpost="all.overpost + '%'"
				v-bind:symbols="all.symbols.toLocaleString()"
				v-bind:symbols-avg="all.symbolsAvg"
				v-bind:activity-per="all.activityPer + '%'"
			></levels-role>

		</div>

		<div class="levels-clear"></div>

		<div class="levels-members">

			<levels-member-head
				search=""
				v-bind:sort-group="sortGroup"
				v-bind:sort-target="sortTarget"
				v-bind:sort-val="sortVal"
				@sortGroupToggle="sortGroupToggle"
				@sortToggle="sortToggle"
			></levels-member-head>

			<template v-for="(id, i) in list">

				<div
					v-if="sortGroup && (!members[list[i-1]] || members[id].role.id !== members[list[i-1]].role.id)"
				>
					separator
				</div>

				<levels-member
					v-bind:member="members[id]"
					v-bind:sort-group="sortGroup"
				></levels-member>

			</template>

		</div>

	</div>

</template>

<script>
export default {

	props: [
		'members',
		'roles',
		'all',
	],

	data(){
		return {
			levelsText: false,
			listRaw: [],
			list: [],

			sortGroup: 1,
			sortTarget: 'exp',
			sortVal: 0,
			sortFunc: [
				(a, b) => b - a,
				(a, b) => a - b
			],

		}
	},

	mounted: function(){
		this.updateList();
		console.log(this);

		document.addEventListener('scroll', () => {
			let bottom = document.documentElement.getBoundingClientRect().bottom;
			if(bottom < document.documentElement.clientHeight + 100) this.addList();
		}, true);
	},

	methods: {
		updateList: function(){
			this.listRaw = [];
			this.list = [];

			for(const id in this.members){
				const member = this.members[id];
				let access = true;

				// for(const value of this.searchVal)
				// 	if(member.search.indexOf(value) === -1) access = false;

				if(!access) continue;

				this.listRaw.push(id);
			}

			this.listRaw.sort(this.sortListItem);

			this.addList();
		},

		addList: function(){
			const qty = this.list.length;
			let i = -1;

			for(const id of this.listRaw){
				++i;
				if(this.list[i]) continue;
				this.list.push(id);
				if(i - qty > 20) break;
			}
		},

		sortListItem: function(a, b){
			a = this.members[a];
			b = this.members[b];

			if(this.sortGroup){
				if(a.role.pos > b.role.pos) return this.sortGroup === 2 ? -1 : 1;
				if(a.role.pos < b.role.pos) return this.sortGroup === 2 ? 1 : -1;
			}
			return this.sortFunc[this.sortVal](a[this.sortTarget], b[this.sortTarget]);
		},

		sortGroupToggle: function(){
			for(let i = 0; i < 3; i++){
				if(this.sortGroup !== i) continue;
				this.sortGroup = true
					? (i >= 2 ? 0 : i + 1)
					: (i <= 0 ? 2 : i - 1);
				break;
			}
			this.updateList();
		},

		sortToggle: function(target){
			if(this.sortTarget !== target){
				this.sortTarget = target;
				this.sortVal = 0;
			}else{
				this.sortVal = this.sortVal ? 0 : 1;
			}
			this.updateList();
		},

		levelsTextToggle: function(){
			this.levelsText = !this.levelsText;
		}
	}

}
</script>
