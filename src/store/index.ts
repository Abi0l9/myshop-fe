import { createStore } from 'vuex'
import products from './productStore'
import notification from './notification'
import user from './user'

const store = createStore({
  modules: {
    products,
    notification,
    user
  }
})

export default store
