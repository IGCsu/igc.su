<template>
	<div id="levels-roles-item" class="row">
		<div class="col-3">{{ name }}</div>
		<div class="col-2">{{ exp }}</div>
		<div class="col-2">{{ count }}</div>
		<div class="col-5">
			<div class="row">
				<div class="col-sm-2 d-none d-sm-block"></div>
				<div class="col-sm-2 col-6"></div>
				<div class="col-sm-2 d-none d-sm-block"></div>
				<div class="col-sm-2 col-6"></div>
				<div class="col-sm-2 d-none d-sm-block"></div>
				<div class="col-sm-2 d-none d-sm-block"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: [
		'name',
		'exp',
		'count',
	],

}
</script>
