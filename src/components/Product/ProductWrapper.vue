<script setup lang="ts">
import type { IProduct } from '@/types'
import imgHolder from '@/assets/product/new.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const { name, image, description, id, price } = defineProps<IProduct>()
const loadLink = () => {
  router.push(`/products/${id}`)
}
</script>
<template>
  <div class="w-full min-h-[280px] flex flex-col gap-y-2 rounded-md border-[1px] border-cyan p-1">
    <div class="w-full">
      <img :src="image || imgHolder" alt="" class="max-h-[150px] rounded-md" />
    </div>
    <div class="flex-1">
      <p @click="loadLink" class="text-2xl text-cyan">{{ name }}</p>
      <p class="text-gray-600">{{ description?.slice(0, 50) + '...' }}</p>
    </div>
    <div class="w-full mt-2">
      Price: <span class="font-semibold">#{{ Number(price).toLocaleString() }}</span>
    </div>
  </div>
</template>
