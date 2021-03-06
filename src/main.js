// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'tether/dist/js/tether.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
