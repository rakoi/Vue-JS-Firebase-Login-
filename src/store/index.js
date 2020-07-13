import Vue from 'vue'
import vuex from 'vuex'
import statistics from '../store/modules/statistics'
import news from '../store/modules/news'
import User from '../store/modules/User'

Vue.use(vuex)


export default new vuex.Store({
    modules:{
            statistics,
            news   ,
            User   
    }
})