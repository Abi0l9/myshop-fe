<script setup lang="ts">
import type { ObjProp } from '@/types'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
import InputField from '../Form/InputField.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const input = ref('')

const handleChange = (obj: ObjProp) => {
  input.value = obj.value
}

const handleSubmit = () => {
  router.push(`/products/query?name=${input.value}`)
}
</script>

<template>
  <div class="md:w-3/5 mb-4 rounded-full border-[1px] border-deepBlue px-3 md:px-8">
    <form @submit.prevent="handleSubmit" class="w-full flex flex-row items-center py-1 gap-x-3">
      <div class="w-full">
        <InputField
          id="searchInput"
          label=""
          type="text"
          :no-label="true"
          :no-border="true"
          :handle-change="handleChange"
          placeholder="Search for products"
          styles="rounded-md py-2  bg-transparent"
        ></InputField>
      </div>

      <div class="text-brand-blue cursor-pointer">
        <Icon icon="material-symbols-light:search" width="32" />
      </div>
    </form>
  </div>
</template>
