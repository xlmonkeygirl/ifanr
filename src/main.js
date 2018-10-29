import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);



import Zuixin from './containers/zuixin.vue';
import Appso from './containers/appso.vue';
import Wanwuzhi from './containers/wanwuzhi.vue';
import Login from './containers/login.vue';
import fIndex from './containers/findex.vue';
import Registe from './containers/registe.vue';
import Userhome from './containers/userHome.vue';
import Activities from './components/activities.vue';
import Collection from './components/collections.vue';
import Information from './components/information.vue';

import ArticalDetail from './containers/articalDetail.vue';
var routes = [{
	path: '/findex',
	component: fIndex,
	children: [{
		path: '/zuixin',
		component: Zuixin
	}, {
		path: '/appso',
		component: Appso
	}, {
		path: '/wanwuzhi',
		component: Wanwuzhi
	}]
}, {
	path: '/login',
	component: Login
}, {
	path: '/registe',
	component: Registe
}, {
	path: '/userhome',
	component: Userhome,
	children: [{
		path: '/activities',
		component: Activities
	}, {
		path: '/collection',
		component: Collection
	}, {
		path: '/information',
		component: Information
	}]
},{
	path:'/articalDetail',
	component:ArticalDetail
}];

var router = new VueRouter({
	routes: routes
})

Vue.config.productionTip = false

import Vuex from 'vuex';
Vue.use(Vuex);
var store = new Vuex.Store({
	state: {
		isShowSlideDown: false,
		isShowUserSlideDown: false,
		isShowSearch: false
	}
});

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')