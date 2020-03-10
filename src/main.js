import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

/*import { BootstrapVue, IconsPlugin, } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'*/

// import "./assets/admin/css/adminlte.min.css";

require('./store/subscriber.js');

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

Vue.config.productionTip = false;

store.dispatch('attempt', localStorage.getItem('token'))
    .then(() => {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    })
