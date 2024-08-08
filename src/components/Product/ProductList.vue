<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import type { IProduct } from '@/types'
import ProductWrapper from './ProductWrapper.vue'

const store = useStore()

const products = ref<IProduct[]>([])

onMounted(() => {
  store.dispatch('fetchProducts').then((data) => {
    if (data.length) {
      products.value = data
    }
  })
})
</script>
<template>
  <div class="w-full">
    <div v-if="products?.length" class="w-full">
      <div class="text-3xl mb-4">Available products in the store</div>
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="item in products" :key="item.id" class="">
          <ProductWrapper v-bind="item"></ProductWrapper>
        </div>
      </div>
    </div>
    <div v-else class="w-full">Store is empty</div>
  </div>
</template>
