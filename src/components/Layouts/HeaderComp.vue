<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const navs = [
  {
    name: 'Products',
    value: 'products'
  },
  {
    name: 'Add New',
    value: 'add-product'
  }
]

const loadLink = (link: string) => {
  router.push(link)
}
</script>
<template>
  <div class="w-full shadow-md p-2 mb-1">
    <div class="w-full flex flex-row items-center">
      <div class="text-cyan text-2xl w-1/2">MyShop</div>
      <div class="w-1/2 flex flex-row justify-between">
        <div class="flex flex-row items-center gap-x-3">
          <div
            v-for="(item, index) in navs"
            :key="index"
            class="hover:underline cursor-pointer hover:text-cyan"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="">
          <div class="flex flex-row items-center gap-x-3">
            <div
              @click="() => loadLink('login')"
              class="hover:bg-white hover:border-[1px] hover:text-cyan border-blue-400 bg-blue-400 py-1 px-2 rounded-md text-white cursor-pointer"
            >
              Login
            </div>
            <div
              @click="() => loadLink('register')"
              class="bg-white hover:bg-blue-400 hover:border-0 border-[1px] text-cyan border-blue-400 py-1 px-2 rounded-md hover:text-white cursor-pointer"
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
