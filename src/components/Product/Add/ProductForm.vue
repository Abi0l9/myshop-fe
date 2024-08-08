<script setup lang="ts">
import InputField from '@/components/Form/InputField.vue'
import NotificaTion from '@/components/Misc/NotificaTion.vue'
import product from '@/services/product'
import type { IProductForm, ObjProp } from '@/types'
import catchErrors from '@/utils/catchErrors'
import uploadImageToCloud from '@/utils/uploadImageToCloud'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const isLoading = ref(false)
const store = useStore()
const token = computed(() => store.getters.token).value
const router = useRouter()
const data = ref<IProductForm>({
  name: '',
  description: '',
  price: '',
  image: ''
})

const uploadImage = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target && target.files) {
    const file = target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async (e) => {
      const result = e.target?.result

      const file = result as string
      const link = await uploadImageToCloud(file)
      data.value.image = link
    }
  }
}

const inputComplete = computed(() => {
  const allFilled = data.value.name
  return allFilled || false
})

const handleChange = ({ name, value }: ObjProp) => {
  if (name === 'name' || name === 'description' || name === 'price' || name === 'image') {
    data.value[name] = value
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  try {
    const res = await product.addProduct(data.value, token)
    store.dispatch('addNotification', res)

    data.value = {
      name: '',
      description: '',
      price: '',
      image: ''
    }

    setTimeout(() => {
      store.dispatch('clearNotification')
    }, 4000)
  } catch (e) {
    const res = catchErrors(e)
    store.dispatch('addNotification', res)
  }

  isLoading.value = false
}

onMounted(() => {
  store.dispatch('retrieveToken')
  store.dispatch('addUser').then((data) => {
    if (!data?.user?.username) {
      router.push('/login')
    }
  })
})
</script>
<template>
  <div class="w-full min-h-screen">
    <form class="w-full py-2 flex flex-col items-center justify-center gap-y-6">
      <NotificaTion></NotificaTion>
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="name"
          id="name"
          label="Product Name"
          type="text"
          placeholder="New Product"
          required
        ></InputField>
      </div>
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <label class="font-bold text-left cursor-pointer" for="description">Description</label>
        <textarea
          :class="`border-2 border-gray-900 active:border-cyan rounded-md p-2`"
          v-model="data.description"
          name="description"
          id="description"
          placeholder="type here a short description"
          rows="5"
        ></textarea>
      </div>
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="price"
          id="price"
          label="Price"
          type="text"
          placeholder="30000"
          required
        ></InputField>
      </div>

      <div class="w-5/6 md:w-3/4 flex flex-col gap-y-3">
        <div
          v-if="data.image"
          class="mt-4 md:mt-1 w-[70px] h-[70px] flex flex-row justify-center items-center rounded-full border-brand-yellow border-[2px]"
        >
          <img :src="data.image" alt="avatar" class="h-full w-full rounded-full object-fit" />
        </div>
        <div class="py-2 w-full">
          <label
            for="upload"
            class="rounded-md w-full py-1 px-4 cursor-pointer border-[1px] border-cyan active:border-deepBlue active:text-white active:bg-cyan"
            >Upload Product Image</label
          >
          <input @change="uploadImage" type="file" accept="image/*" id="upload" class="hidden" />
        </div>
      </div>

      <div
        :class="`w-4/5 md:w-3/5 flex flex-row justify-center gap-x-4 items-center mb-6 ${inputComplete ? 'bg-cyan active:bg-deepBlue' : 'bg-gray-700'} rounded-lg`"
      >
        <input
          :disabled="!inputComplete"
          type="button"
          value="Add New Product"
          :class="`cursor-pointer p-2  text-white font-semibold`"
          :onClick="handleSubmit"
        />
        <div class="text-white">
          <Icon v-if="isLoading" icon="eos-icons:loading" width="24" />
        </div>
      </div>
    </form>
  </div>
</template>
