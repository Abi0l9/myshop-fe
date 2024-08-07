<script setup lang="ts">
import type { ObjProp, ISignInForm } from '../../../types'
import { computed, ref } from 'vue'
import InputField from '../../Form/InputField.vue'
import auth from '@/services/auth'
import catchErrors from '@/utils/catchErrors'

const data = ref<ISignInForm>({
  input: '',
  password: ''
})

const inputComplete = computed(() => {
  const allFilled = Object.values(data.value).every((element) => element !== '')
  return allFilled || false
})

const handleChange = ({ name, value }: ObjProp) => {
  if (name === 'input' || name === 'password') {
    data.value[name] = value
  }
}

const handleSubmit = async () => {
  try {
    const res = await auth.loginUser(data.value)
    console.log(res)
  } catch (error) {
    const message = catchErrors(error)
    console.log(message)
  }
}
</script>
<template>
  <div class="w-full flex flex-col items-center my-3">
    <form class="w-full flex flex-col items-center justify-center gap-y-6">
      <div class="w-5/6 md:w-3/4 flex flex-col px-2">
        <InputField
          :handleChange="handleChange"
          name="input"
          id="input"
          label="EMAIL/USERNAME"
          type="input"
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
      <div class="w-4/5 md:w-3/5 flex flex-col items-center mb-6">
        <input
          :disabled="!inputComplete"
          type="button"
          value="Sign In"
          :class="`${inputComplete ? 'bg-cyan active:bg-deepBlue' : 'bg-gray-700'} w-4/5  cursor-pointer p-2 rounded-lg text-white font-semibold`"
          :onClick="handleSubmit"
        />
      </div>
    </form>
  </div>
</template>
