


// import {store as authStore} from '@/modules/auth/index'
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import navBar from './navBar';

const rootStore = new Vuex.Store({
    modules:{
        navBar
    },
    getters: {
        selected(state) {
            return state.navBar.selected
        }
    }
});
export default rootStore;