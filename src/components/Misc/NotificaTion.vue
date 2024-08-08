<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const notification = computed(() => store.getters.notification).value

const mainStyles = `text-white font-semibold `
const styles = computed(() => {
  if (notification.success) {
    return mainStyles + `bg-green-600`
  } else return mainStyles + `bg-rose-600`
})

const clear = () => {
  store.dispatch('clearNotification')
}
</script>
<template>
  <div v-if="notification.message" class="">
    <div
      :class="`w-full p-2 rounded-md flex flex-row gap-x-4 items-center justify-center ${styles}`"
    >
      <div v-if="notification.message" :class="``">{{ notification.message }}</div>
      <div v-if="notification.message" class="">
        <Icon @click="clear" icon="line-md:close" width="18" />
      </div>
    </div>
  </div>
</template>
