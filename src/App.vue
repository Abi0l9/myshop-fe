<script setup lang="ts">
import HeaderComp from '@/components/Layouts/HeaderComp.vue'
import FooterComp from '@/components/Layouts/FooterComp.vue'
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>
