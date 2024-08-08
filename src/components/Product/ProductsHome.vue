<script setup lang="ts">
import SearchBar from '../Search/SearchBar.vue'
import ProductList from './ProductList.vue'
</script>
<template>
  <div class="w-full p-2 min-h-[800px]">
    <div class="w-full flex flex-col items-center justify-center">
      <SearchBar></SearchBar>
    </div>
    <ProductList></ProductList>
  </div>
</template>
