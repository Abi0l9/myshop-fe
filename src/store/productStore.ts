import type { IProduct } from '@/types'
import productServices from '@/services/product'
import { createStore } from 'vuex'

type State = {
  products: IProduct[]
  product: IProduct | null
}

const store = createStore<State>({
  state: {
    products: [],
    product: null
  },
  mutations: {
    getProducts: (state, payload: IProduct[]) => {
      state.products = payload
    },
    getOneProduct: (state, payload: IProduct) => {
      state.product = payload
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      try {
        const res = await productServices.getAllProducts()
        commit('getProducts', res)
      } catch (e) {
        console.log(e)
      }
    },
    fetchOneProductById: async ({ commit }, productId: string) => {
      try {
        const res = await productServices.getOneProduct({ id: productId })
        commit('getOneProduct', res)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    singleProduct: (state) => state.product,
    allProducts: (state) => state.products
  }
})

export default store
