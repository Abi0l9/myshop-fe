<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import hide from '@iconify/icons-mdi/eye-off'
import show from '@iconify/icons-mdi/eye'
import type { ObjProp } from '@/types'

const props = defineProps<{
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
  handleChange: (obj: ObjProp) => void
  errorMsg?: string
  disabled?: false | boolean
  noBorder?: false | boolean
  noLabel?: false | boolean
  options?: ObjProp[]
  selectLabel?: string
  styles?: string
  initialValue?: string
  name?: string
  onFocus?: () => void
  inputLen?: number
}>()

const errMsg = ref('')
const input = ref('')
const passwordState = ref(false)
// const passwordIcon =

const onChange = (e: Event) => {
  const name = (e.target as HTMLInputElement).name
  const value = (e.target as HTMLInputElement).value
  input.value = value

  props.handleChange({ name, value })
}

const handleBlur = () => {
  if (props.required && !input.value) {
    errMsg.value = props.errorMsg || `${props.label} is required`
  } else {
    errMsg.value = ''
  }
}

const togglePasswordState = () => {
  passwordState.value = !passwordState.value
}
</script>
<template>
  <label v-if="!noLabel" :for="id" class="font-bold text-left cursor-pointer">{{ label }}</label>

  <div v-if="type !== 'select' && type !== 'password'" class="w-full flex flex-col relative">
    <input
      :type="type"
      :class="`relative block w-full rounded-md ${noBorder ? '' : 'border-2 border-gray-700 focus:border-brand-yellow'} p-2 text-xl focus:outline-0  ${errMsg ? 'border-red-500' : ''} ${styles}`"
      :id="id"
      :name="name || id"
      :placeholder="placeholder"
      @change="onChange"
      :onfocus="onFocus"
      :onblur="handleBlur"
      :required="props.required"
      :disabled="props.disabled"
      :value="props.initialValue"
      :min="inputLen"
    />

    <!-- <span
      v-if="props.type === 'password'"
      class="absolute right-4 top-3 cursor-pointer"
      @click="togglePasswordState"
      ><Icon :icon="!passwordState ? show : hide" width="24"
    /></span> -->

    <p v-if="errMsg" class="absolute top-12 text-sm text-red-600 mb-2">{{ errMsg }}</p>
  </div>

  <div v-if="type === 'password'" class="w-full flex flex-col relative">
    <input
      :type="type === 'password' && passwordState ? 'text' : type"
      :class="`relative block w-full rounded-md ${noBorder ? '' : 'border-2 border-gray-700 focus:border-brand-yellow'} p-2 text-xl focus:outline-0  ${errMsg ? 'border-red-500' : ''} ${styles}`"
      :id="id"
      :name="name || id"
      :placeholder="placeholder"
      @change="onChange"
      :onblur="handleBlur"
      :required="props.required"
      :disabled="props.disabled"
    />

    <span class="absolute right-4 top-3 cursor-pointer" @click="togglePasswordState"
      ><Icon :icon="!passwordState ? show : hide" width="24"
    /></span>

    <p v-if="errMsg" class="absolute top-12 text-sm text-red-600 mb-2">{{ errMsg }}</p>
  </div>

  <div v-if="type === 'select'" class="w-full flex flex-col relative">
    <select
      @change="onChange"
      :onblur="handleBlur"
      :name="id"
      :id="id"
      :class="`w-full rounded-md ${noBorder ? '' : 'border-2 border-gray-700 focus:border-brand-yellow'} p-2 text-xl focus:outline-0  ${errMsg ? 'border-red-500' : ''}`"
    >
      <option value="">
        {{ (initialValue as string) || selectLabel || 'Choose an option' }}
      </option>
      <option v-for="({ name, value }, index) in options" :key="index" :value="value">
        {{ name }}
      </option>
    </select>
  </div>
</template>
