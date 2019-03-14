import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_page_imgurl: ''
  },
  mutations: {
    recv_imgurl (state, url) {
      state.user_page_imgurl = url
    }
  },
  actions: {

  }
})
