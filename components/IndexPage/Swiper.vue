<template>
  <div class="w-full bg-white-primary py-20 md:py-25 lg:py-30">
      <div class="myContainer">
          <p class="text-24 md:text-30 lg:text-36 leading-38 font-semibold mb-30 text-black-primary">Swiper</p>
          
      </div>
      
  </div>
</template>

<script>
import json from '@/api/model'
export default {
  data() {
      return {
          models: json,
      }
  },

  methods: {
      scrollToTop() {
        window.scrollTo(0, 0)
      },
    },

}
</script>