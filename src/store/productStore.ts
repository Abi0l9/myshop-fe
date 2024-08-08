import type { IProduct } from '@/types'
import productServices from '@/services/product'
import type { Module } from 'vuex'

type State = {
  products: IProduct[]
  product: IProduct | null
}

const store: Module<State, any> = {
  state: {
    products: [],
    product: null
  },
  mutations: {
    setProducts: (state, payload: IProduct[]) => {
      state.products = payload
    },
    setOneProduct: (state, payload: IProduct) => {
      state.product = payload
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      try {
        const res = await productServices.getAllProducts()

        commit('setProducts', res.products)
        return res.products
      } catch (e) {
        console.log(e)
      }
    },
    fetchOneProductById: async ({ commit }, productId: string) => {
      try {
        const res = await productServices.getOneProduct({ id: productId })
        commit('setOneProduct', res.product)

        return res.product
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    singleProduct: (state) => state.product,
    allProducts: (state) => state.products
  }
}

export default store
