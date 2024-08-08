<script setup lang="ts">
import type { ObjProp, ISignUpForm } from '../../../types'
import { computed, onMounted, ref } from 'vue'
import InputField from '../../Form/InputField.vue'
import auth from '@/services/auth'
import catchErrors from '@/utils/catchErrors'
import { Icon } from '@iconify/vue/dist/iconify.js'
import NotificaTion from '@/components/Misc/NotificaTion.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const data = ref<ISignUpForm>({
  username: '',
  email: '',
  password: ''
})
const isLoading = ref(false)

const inputComplete = computed(() => {
  const allFilled = Object.values(data.value).every((element) => element !== '')

  return allFilled || false
})

const handleChange = ({ name, value }: ObjProp) => {
  if (name === 'username' || name === 'email' || name === 'password') {
    data.value[name] = value
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  try {
    const res = await auth.registerUser(data.value)
    store.dispatch('addNotification', res)
    router.push('/login')
  } catch (error) {
    const message = catchErrors(error)
    store.dispatch('addNotification', message)
  }
  isLoading.value = false
}

onMounted(() => {
  store.dispatch('clearNotification')
})
</script>
<template>
  <div class="w-full flex flex-col items-center my-3">
    <NotificaTion></NotificaTion>
    <form class="w-full flex flex-col items-center justify-center gap-y-6">
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="username"
          id="username"
          label="USERNAME"
          type="username"
          placeholder="abi0l9"
          required
        ></InputField>
      </div>
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="email"
          id="email"
          label="EMAIL"
          type="email"
          placeholder="kash@yahoo.com"
          required
        ></InputField>
      </div>
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="password"
          id="password"
          label="PASSWORD"
          type="password"
          placeholder="******"
          required
        ></InputField>
      </div>
      <div
        :class="`w-4/5 md:w-3/5 flex flex-row justify-center gap-x-4 items-center mb-6 ${inputComplete ? 'bg-cyan active:bg-deepBlue' : 'bg-gray-700'} rounded-lg`"
      >
        <input
          :disabled="!inputComplete"
          type="button"
          value="Register"
          :class="` cursor-pointer p-2  text-white font-semibold`"
          :onClick="handleSubmit"
        />
        <div class="text-white">
          <Icon v-if="isLoading" icon="eos-icons:loading" width="24" />
        </div>
      </div>
    </form>
  </div>
</template>
