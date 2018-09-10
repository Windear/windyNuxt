import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
	loading:require('static/loading-svg/none.svg')
});