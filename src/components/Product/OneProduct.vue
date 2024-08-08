<script setup lang="ts">
import type { IProduct } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import holder from '@/assets/product/new.png'
import productServices from '@/services/product'
import catchErrors from '@/utils/catchErrors'
import NotificaTion from '../Misc/NotificaTion.vue'

const route = useRoute()
const router = useRouter()
const productId = route.path?.split('/')[2]
const store = useStore()
const token = ref('')
const oneProduct = ref<IProduct>()

const deleteProduct = async () => {
  try {
    const res = await productServices.deleteProduct(productId, token.value)
    store.dispatch('addNotification', res)
    router.push('/products')
  } catch (error) {
    const data = catchErrors(error)
    store.dispatch('addNotification', data)
  }
}

const goToEditPage = () => {
  router.push(`/products/${productId}/edit`)
}

onMounted(() => {
  store.dispatch('fetchOneProductById', productId).then((data) => {
    oneProduct.value = data
  })

  store.dispatch('retrieveToken').then((data) => {
    token.value = data
  })

  store.dispatch('clearNotification')
})
</script>
<template>
  <div class="w-full min-h-screen p-2">
    <div class="w-full my-3 flex flex-col items-center justify-center">
      <NotificaTion></NotificaTion>
    </div>
    <div class="w-full">
      <img :src="oneProduct?.image || holder" alt="" class="h-[250px] w-[250px]" />
    </div>
    <div class="w-full">
      <p class="text-4xl">{{ oneProduct?.name }}</p>
      <p class="text-2xl">{{ oneProduct?.description }}</p>
      <p class="text-2xl">
        Price: <span class="">#{{ Number(oneProduct?.price).toLocaleString() || 'N/A' }}</span>
      </p>
    </div>
    <div class="w-full flex flex-row gap-x-8 mt-8 items-center">
      <div
        @click="goToEditPage"
        class="bg-green-600 p-2 rounded-md text-white w-28 text-center active:bg-teal-900"
      >
        edit
      </div>
      <div
        @click="deleteProduct"
        class="bg-rose-600 p-2 rounded-md text-white w-28 text-center active:bg-rose-900"
      >
        delete
      </div>
    </div>
  </div>
</template>
