<template>

	<div class="election-candidate">

		<div class="election-candidate-data">
			<img @error="memberUpdate"
				 :src="this.AVATAR_LINK + members[id].avatar"
				 class="election-candidate-data-avatar"
				 :alt="members[id].name"
				 :user="id"
				 loading="lazy"
			/>
			<span class="election-candidate-data-name">
					<div>{{ members[id].name }}</div>
					<small>#{{ members[id].discriminator }}</small>
				</span>
		</div>

		<div class="election-candidate-nav">
			<span :class="'election-candidate-nav-back' + (access ? '' : ' hide')">Поменять фон</span>
			<span :class="'election-candidate-nav-saved' + (saved ? '' : ' hide')">Сохранено...</span>
		</div>

		<contenteditable tag="div"
						 class="election-candidate-desc"
						 :contenteditable="access"
						 v-model="desc"
						 :no-nl="true"
						 :no-html="true"
						 @change="updateText"
						 placeholder="Введите описание о своей кандидатуре..."
		/>

		<div class="row">

		</div>

	</div>

</template>

<script>
export default {

	props: [
		'candidate',
		'member',
		'me'
	],

	data () {
		return {

			access: this.me === this.member.id,
			saved: false,

			id: this.member.id,

			desc: this.candidate.desc ?? '',

			members: {
				[this.member.id]: this.member
			}

		};
	},

	methods: {

		memberUpdate: function (e) {
			this.$parent.memberUpdate(e, this.members);
		},

		updateText: function (e) {
			console.log(this.saved);
			this.saved = true;
			setTimeout(() => this.saved = false, 500);
		}

	}

};
</script>
