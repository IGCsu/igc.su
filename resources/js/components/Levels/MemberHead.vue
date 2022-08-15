<template>
	<div class="levels-members-head">
		<div class="row">

			<div class="col-sm-4">
				<i :class="'levels-members-sort-group levels-members-sort-group-' + sortGroup + ' bi bi-sort-down' + (sortGroup === 2 ? '-alt' : '')" @click="$emit('sortGroupToggle')"></i>
				<input class="levels-members-search" placeholder="Поиск" :value="search" />
			</div>

			<div class="levels-members-data col-sm-8">
				<div class="row">

					<div @click="$emit('sortToggle', 'messagesAll')" class="levels-members-data-sort levels-members-sort-messagesAll col-3 col-sm-2">
						<span>Всего сообщений</span>
						<i v-if="sortTarget === 'messagesAll'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'messagesLegit')" class="levels-members-data-sort levels-members-sort-messagesLegit col-3 col-sm-2">
						<span>Засчитанных сообщений</span>
						<i v-if="sortTarget === 'messagesLegit'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'overpost')" class="levels-members-data-sort levels-members-sort-overpost col-sm-2 d-none d-sm-flex">
						<span>Процент оверпоста</span>
						<i v-if="sortTarget === 'overpost'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'symbols')" class="levels-members-data-sort levels-members-sort-symbols col-3 col-sm-2">
						<span>Всего символов</span>
						<i v-if="sortTarget === 'symbols'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'symbolsAvg')" class="levels-members-data-sort levels-members-sort-symbolsAvg col-sm-2 d-none d-sm-flex">
						<span>Среднее кол-во символов</span>
						<i v-if="sortTarget === 'symbolsAvg'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'activityPer')" class="levels-members-data-sort levels-members-sort-activityPer col-sm-2 d-none d-sm-flex">
						<span>Активность</span>
						<i v-if="sortTarget === 'activityPer'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

					<div @click="$emit('sortToggle', 'exp')" class="levels-members-data-sort levels-members-sort-exp col-3 col-sm-2">
						<span>Прогресс уровня</span>
						<i v-if="sortTarget === 'exp'" :class="'bi bi-sort-down' + (sortVal === 0 ? '' : '-alt')"></i>
					</div>

				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {

	props: [
		'sortGroup',
		'sortTarget',
		'sortVal',
		'search'
	]

}
</script>
