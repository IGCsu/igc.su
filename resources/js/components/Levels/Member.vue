<template>
	<div class="levels-members-item" :style="'background: #' + member.role.color + '10;'">
		<div class="row">

			<div class="col-sm-4">
				<div class="row">
					<div class="levels-members-position col-auto">
						<div :style="'background: #' + member.role.color">{{ member.pos }}</div>
					</div>
					<div class="levels-members-name col">
						<img
							:src="this.AVATAR_LINK + member.avatar"
							:alt="member.name + '#' + member.id"
							:user="member.id"
							@error="$emit('memberUpdate', $event)"
							loading="lazy"
						/>
						<div>
							<small :style="'color: #' + member.role.color">{{ member.role.name }}</small>
							{{ member.name }}
							<small>#{{ member.discriminator }}</small>
						</div>
					</div>
				</div>
			</div>

			<div class="levels-members-data col-sm-8">
				<div class="row">

					<div class="levels-members-messagesAll col-3 col-sm-2">
						<b>All messages</b>
						{{ member.messagesAll.toLocaleString() }}
					</div>

					<div class="levels-members-messagesLegit col-3 col-sm-2">
						<b>Legit messages</b>
						{{ member.messagesLegit.toLocaleString() }}
					</div>

					<div class="levels-members-overpost col-sm-2 d-none d-sm-block">
						<b>Overpost</b>
						{{ member.overpost > 0 ? member.overpost + '%' : 'NaN' }}
						<small v-if="member.overpost > 0" :class="getDiffClass('overpost', 'minus', 'plus')">
							{{ getAbsDiff('overpost') }}%
						</small>
					</div>

					<div class="levels-members-symbols col-3 col-sm-2">
						<b>Symbols</b>
						{{ member.symbols.toLocaleString() }}
					</div>

					<div class="levels-members-symbolsAvg col-sm-2 d-none d-sm-block">
						<b>Symbols avg</b>
						{{ member.symbolsAvg }}
						<small v-if="member.symbolsAvg > 0" :class="getDiffClass('symbolsAvg', 'plus', 'minus')">
							{{ getAbsDiff('symbolsAvg') }}%
						</small>
					</div>

					<div class="levels-members-activityPer col-sm-2 d-none d-sm-block">
						<b>Activity</b>
						{{ member.activityPer }}%
						<small v-if="member.activityPer > 0" :class="getDiffClass('symbolsAvg', 'plus', 'minus')">
							{{ getAbsDiff('activityPer') }}%
						</small>
					</div>

					<div class="levels-members-exp col-3 col-sm-2">
						<div v-if="!member.nextRoleProgress">Max</div>
						<template v-else>
							<b>Next lvl - </b>
							<b :style="'color: #' + member.nextRole.color">{{ member.nextRole.name }}</b>
							<div>
								<span>{{ member.nextRoleProgress }}%</span>
								<div :style="'width: ' + member.nextRoleProgress + '%; background: #' + member.nextRole.color"></div>
							</div>
						</template>
						<small>
							{{ member.exp.toLocaleString() }}
							<b v-if="member.expFine > 0">{{ member.expFine.toLocaleString() }}</b>
						</small>
					</div>

				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {

	props: [
		'member',
		'sortGroup'
	],

	methods: {

		/**
		 * Возвращает название параметра объекта member группировки, который соответствует текущей сортировке
		 * @return {string} 'diffRole' or 'diff'
		 */
		getSortType: function(){
			return this.sortGroup > 0 ? 'diffRole' : 'diff';
		},

		/**
		 * Проверяет разницу положительная она или отрицательная
		 * @param {string} field Поле для сравнения
		 * @param {string} isTrue Строка в случае, если разница больше нуля
		 * @param {string} isFalse Строка в случае, если разница меньше
		 * @param {string} [isNull='null'] Строка в случае, если разница равна нулю или ошибке
		 * @return {string} isTrue or isFalse
		 */
		getDiffClass: function(field, isTrue, isFalse, isNull){
			const diff = this.member[this.getSortType()][field];

			if(!diff) return isNull ?? 'null';

			return diff > 0 ? isTrue : isFalse;
		},

		/**
		 * Возвращает абсолютное значение разницы
		 * @param {string} field Ключ поля значения разницы
		 * @return {number}
		 */
		getAbsDiff: function(field){
			return Math.abs(this.member[this.getSortType()][field]);
		}

	}

}
</script>
