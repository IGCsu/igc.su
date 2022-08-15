<template>
	<div class="levels-separator row" :style="'top: ' + headHeight + 'px; background: #' + role.color">
		<div class="col-sm-4 levels-separator-name">{{ role.name }} - {{ role.count }} чел.</div>
		<div class="col-sm-8 levels-separator-data">
			<div class="row">
				<div class="levels-separator-messagesAll col-3 col-sm-2">{{ role.messagesAll.toLocaleString() }}</div>
				<div class="levels-separator-messagesLegit col-3 col-sm-2">{{ role.messagesLegit.toLocaleString() }}</div>
				<div class="levels-separator-overpost col-sm-2 d-none d-sm-block">{{ role.overpost }}%</div>
				<div class="levels-separator-symbols col-3 col-sm-2">{{ role.symbols.toLocaleString() }}</div>
				<div class="levels-separator-symbolsAvg col-sm-2 d-none d-sm-block">{{ role.symbolsAvg }}</div>
				<div class="levels-separator-symbolsAvg col-sm-2 d-none d-sm-block">{{ role.activityPer }}%</div>
				<div class="levels-separator-exp col-3 col-sm-2"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: [
		'role'
	],

	mounted(){
		window.addEventListener('resize', this.resize);
		this.resize();
	},

	data(){
		return {
			headHeight: '0px'
		}
	},

	methods: {
		resize: function(){
			this.headHeight = 16 + 48 + document.querySelector('.levels-members-head').offsetHeight;
		}
	}

}
</script>
