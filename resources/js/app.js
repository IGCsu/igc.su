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

		memberUpdateTimeout: 0,
		memberUpdateData: new Set(),

	},

	methods: {

		memberUpdate: function(e){
			axios.get('/api/').then(response => {
				console.log(response);
			});
		}

	}
});

import './loader';
