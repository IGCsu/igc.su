require('./bootstrap');

window.Vue = require('vue').default;

/**
 * Первая часть ссылки на аватар
 * @type {string}
 */
Vue.prototype.AVATAR_LINK = 'https://cdn.discordapp.com/';

import BootstrapVue from 'bootstrap-vue';
import contenteditable from 'vue-contenteditable';

import '../sass/app.scss';

Vue.use(BootstrapVue);
Vue.use(contenteditable);

const files = require.context('./', true, /\.vue$/i);

files.keys().map(key => {
	Vue.component(
		key.split('./components/')[1].replaceAll('/', '').split('.')[0],
		files(key).default
	);
});

const app = new Vue({
	el: '#app',

	data: {

		/**
		 * ID таймаута обновления
		 * @type {NodeJS.Timeout}
		 */
		memberUpdateTimeoutId: undefined,

		/**
		 * Список обновляемых участников
		 * @type {Set}
		 */
		memberUpdateData: new Set()

	},

	methods: {

		memberUpdate: function (e, members) {
			clearInterval(this.memberUpdateTimeoutId);

			e.target.src = '/images/loading2.gif';

			this.memberUpdateData.add(e.target.getAttribute('user'));

			this.memberUpdateTimeoutId = setTimeout(() => {
				axios.post('/membersUpdate', {
					members: Array.from(this.memberUpdateData)
				}).then(res => {
					console.log(res);
					if (members) {
						for (const member of res.data.members) {
							members[member.id].name = member.name;
							members[member.id].discriminator = member.discriminator;
							members[member.id].avatar = member.avatar;
							members[member.id].search = member.search;
						}
					} else {
						for (const member of res.data.members) {
							e.target.src = this.AVATAR_LINK + member.avatar;
						}
					}
				}).catch(error => {
					console.log(error.response);
				});
			}, 2000);

		}

	}
});

import './loader';
