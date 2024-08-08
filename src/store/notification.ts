import type { IResponse } from '@/types'
import type { Module } from 'vuex'

const store: Module<IResponse, any> = {
  state: {
    success: false,
    message: ''
  },
  mutations: {
    setNotification: (state, payload: IResponse) => {
      state.message = payload.message
      state.success = payload.success
    }
  },
  actions: {
    addNotification: ({ commit }, data: IResponse) => {
      commit('setNotification', data)
    },
    clearNotification: ({ commit }) => {
      commit('setNotification', { success: false, message: '' })
    }
  },
  getters: {
    notification: (state) => state
  }
}

export default store
