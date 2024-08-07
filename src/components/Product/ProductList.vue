<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()

const state = computed(() => store.getters.allProducts).value
console.log(state)

onMounted(() => {
  store.dispatch('fetchProducts')
})
</script>
<template>
  <div class="w-full">
    <div v-if="state.products?.length" class="w-full">
      <div class="">Available products in the store</div>
      <div v-for="item in state.products" :key="item.id" class="">
        {{ item.name }}
      </div>
    </div>
    <div v-else class="w-full">Store is empty</div>
  </div>
</template>
