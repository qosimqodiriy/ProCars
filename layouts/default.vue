<template>
    <div class="flex flex-col min-h-screen bg-black-primary relative">
      <div class="flex-auto">
        <transition>
        <nuxt />
      </transition>
      </div>
      <TheFooter />
    </div>
  </template>
  
  <script>
  import TheFooter from '@/components/Footer.vue'
  export default {
    name: 'DefaultPage',
  
    components: {
      TheFooter,
    },
  }
  </script>