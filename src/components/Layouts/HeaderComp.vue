<script lang="ts" setup>
import type { IUser } from '@/types'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const user = ref<IUser>()

const navs = [
  {
    name: 'Products',
    value: 'products',
    link: '/products'
  },
  {
    name: 'Add New',
    value: 'add-product',
    link: '/add-product'
  }
]

const loadLink = (link: string) => {
  router.push(link)
}

onMounted(() => {
  store.dispatch('retrieveToken')
  store.dispatch('addUser').then((data) => {
    user.value = data?.user as IUser
  })
})
</script>
<template>
  <div class="w-full shadow-md p-2 mb-1">
    <div class="w-full flex flex-row items-center">
      <div class="text-cyan text-2xl w-1/3 md:w-1/2">
        <router-link to="/">MyShop</router-link>
      </div>
      <div class="w-2/3 flex flex-row justify-between">
        <div class="flex flex-row items-center gap-x-3">
          <div
            v-for="(item, index) in navs"
            :key="index"
            @click="() => loadLink(item.link)"
            class="hover:underline cursor-pointer hover:text-cyan"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="">
          <div v-if="!user" class="flex flex-row items-center gap-x-3">
            <Icon class="block md:hidden" icon="material-symbols-light:menu" width="24" />
            <div
              @click="() => loadLink('login')"
              class="hidden md:block hover:bg-white hover:border-[1px] hover:text-cyan border-blue-400 bg-blue-400 py-1 px-2 rounded-md text-white cursor-pointer"
            >
              Login
            </div>
            <div
              @click="() => loadLink('register')"
              class="hidden md:block bg-white hover:bg-blue-400 hover:border-0 border-[1px] text-cyan border-blue-400 py-1 px-2 rounded-md hover:text-white cursor-pointer"
            >
              Register
            </div>
          </div>
          <div class="text-cyan font-bold text-xl">{{ user?.username }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
