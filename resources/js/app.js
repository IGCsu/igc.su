require('./bootstrap');

window.Vue = require('vue').default;

import BootstrapVue from 'bootstrap-vue';

import '../sass/app.scss';

Vue.use(BootstrapVue);

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
		memberUpdateData: new Set(),

	},

	methods: {

		memberUpdate: function(e, members){
			clearInterval(this.memberUpdateTimeoutId);

			e.target.src = '/images/loading2.gif';

			this.memberUpdateData.add(e.target.getAttribute('user'));

			this.memberUpdateTimeoutId = setTimeout(() => {
				axios.post('/membersUpdate', {
					members: Array.from(this.memberUpdateData)
				}).then(res => {
					console.log(res)
					for(const member of res.data.members){
						members[member.id].name = member.name;
						members[member.id].discriminator = member.discriminator;
						members[member.id].avatar = member.avatar;
						members[member.id].search = member.search;
					}
				}).catch(error => {
					console.log(error.response);
				});
			}, 2000);

		}

	}
});

import './loader';

require('./law');
