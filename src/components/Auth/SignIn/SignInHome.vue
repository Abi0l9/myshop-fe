<script setup lang="ts">
import SignInForm from './SignInForm.vue'
</script>
<template>
  <div class="w-full min-h-screen flex flex-col justify-center">
    <div class="w-full font-extralight text-3xl text-center">Login to your account</div>
    <div class="">
      <SignInForm></SignInForm>
    </div>
    <div class="w-full flex flex-col items-center">
      <p class="">
        New User?
        <span class="text-cyan active:text-deepBlue">
          <router-link to="/register">Register Here</router-link>
        </span>
      </p>
    </div>
  </div>
</template>
