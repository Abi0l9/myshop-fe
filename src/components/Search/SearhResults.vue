<script setup lang="ts">
import product from '@/services/product'
import type { IProduct } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductWrapper from '../Product/ProductWrapper.vue'

const route = useRoute()
const name = route.query.name as string
const results = ref<IProduct[]>()

onMounted(() => {
  product.getProductsByName({ name }).then((data) => {
    results.value = data.products
    console.log(data)
  })
})
</script>
<template>
  <div class="w-full min-h-screen p-2">
    <div class="text-3xl">Results from search query: {{ name }}</div>
    <div class="w-full">
      <div v-if="results?.length" class="w-full">
        <div v-for="(item, index) in results" :key="index" class="">
          <ProductWrapper v-bind="item"></ProductWrapper>
        </div>
      </div>
      <div v-else class="mt-16 text-center">Query returns an empty result</div>
    </div>
  </div>
</template>
