


// import {store as authStore} from '@/modules/auth/index'

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const rootStore = new Vuex.Store({
    modules:{
        // authStore,
    }
});
export default rootStore;