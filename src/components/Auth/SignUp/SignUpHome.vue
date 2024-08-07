<script setup lang="ts">
import SignUpForm from './SignUpForm.vue'
</script>
<template>
  <div class="w-full my-2 flex flex-col min-h-screen justify-center">
    <div class="w-full font-extralight text-3xl text-center">Register a new account</div>
    <SignUpForm></SignUpForm>
    <div class="w-full flex flex-col items-center">
      <p class="">
        Already have an account?
        <span class="text-cyan active:text-deepBlue">
          <router-link to="/login">Login Here</router-link>
        </span>
      </p>
    </div>
  </div>
</template>
