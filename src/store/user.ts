import userServices from '@/services/user'
import type { IUser } from '@/types'
import type { Module } from 'vuex'

type State = {
  token: string
  user: IUser | null
}

const store: Module<State, any> = {
  state: {
    token: '',
    user: null
  },
  mutations: {
    setToken: (state, token: string) => {
      state.token = token
    },
    setUser: (state, user: IUser) => {
      state.user = user
    }
  },
  actions: {
    addToken: ({ commit }, token: string) => {
      commit('setToken', token)
    },
    retrieveToken: ({ commit }) => {
      const token = localStorage.getItem('token')
      commit('setToken', token)
      return token
    },
    addUser: async ({ commit }) => {
      const token = localStorage.getItem('token') as string
      if (token) {
        const user = await userServices.getMe(token)
        commit('setUser', user)
        return user
      }
    }
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user
  }
}

export default store
