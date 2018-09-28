import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine/mine' 
import global from './modules/global'
import status from './modules/status/status'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mine,
        status,
        global
    }
})
