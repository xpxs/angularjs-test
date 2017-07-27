// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/common.css'
import '../static/css/index.css'
import $ from 'jquery'
import VDistpicker from 'v-distpicker'

// Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VDistpicker,
  template: '<App/>',
  components: {App}
})
$(function() {
    $(document).click(function(e) {
    	let $t = $(e.target);
    	if ($t.hasClass("city") || $t.hasClass("text") || $t.hasClass("t")) {
    		$(".city").children(".dropDown").slideToggle();
    	}
    });
});
