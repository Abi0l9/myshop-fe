import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import AddProductView from '@/views/AddProductView.vue'
import OneProductView from '@/views/OneProductView.vue'
import EditProductView from '@/views/EditProductView.vue'
import ResultView from '@/views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/register',
      name: 'register',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductView
    },
    {
      path: '/products/:id',
      name: 'single-product',
      component: OneProductView
    },
    {
      path: '/products/:id/edit',
      name: 'edit-single-product',
      component: EditProductView
    },
    {
      path: '/products/query',
      name: 'query',
      component: ResultView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
