<template>
	<div :class="'levels-roles-' + type" class="row">
		<div class="levels-roles-name col-3" :style="'color:#'+ color">{{ name }}</div>
		<div class="levels-roles-exp col-2">{{ exp }}</div>
		<div class="levels-roles-count col-2">{{ count }}</div>
		<div class="col-5">
			<div v-if="type === 'head'">Средние показатели</div>
			<div class="row">
				<div class="levels-roles-messagesAll col-sm-2 d-none d-sm-block">{{ messagesAll }}</div>
				<div class="levels-roles-messagesLegit col-sm-2 col-6">{{ messagesLegit }}</div>
				<div class="levels-roles-overpost col-sm-2 d-none d-sm-block">{{ overpost }}</div>
				<div class="levels-roles-symbols col-sm-2 col-6">{{ symbols }}</div>
				<div class="levels-roles-symbolsAvg col-sm-2 d-none d-sm-block">{{ symbolsAvg }}</div>
				<div class="levels-roles-activityPer col-sm-2 d-none d-sm-block">{{ activityPer }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: [
		'type',
		'name',
		'exp',
		'count',
		'messagesAll',
		'messagesLegit',
		'overpost',
		'symbols',
		'symbolsAvg',
		'activityPer',
		'color'
	],

}
</script>
