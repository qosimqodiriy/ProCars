<template>
  <div class="relative">
    <div class="w-full main absolute top-0 left-0 z-10">
      <div class="myContainer w-full">
        <div class="flex w-full items-center justify-between">
          <nuxt-link to="/" class="font-orbitron text-18 font-semibold text-yellow-primary block">ProCars</nuxt-link>

          <div class="hidden md:inline-flex items-center gap-20">
            <nuxt-link to="lamborghini" class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Lamborghini</nuxt-link>
            <nuxt-link to="bmw" class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">BWM</nuxt-link>
            <nuxt-link to="mercedes-bens" class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Mercedes Bens</nuxt-link>
            <nuxt-link to="rolls-royce" class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Rolls Royce</nuxt-link>
          </div>

          <div class="inline-flex items-center gap-20">
            <p class="hidden md:block font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Contact</p>
            
            <div class="flex items-center gap-5 md:gap-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" fill="rgba(255,255,255,1)"/></svg>
              
              <nuxt-link class="text-white-primary font-medium text-16" v-if="$i18n.locale == 'uz'" :to="switchLocalePath('en')">uz</nuxt-link>
              <nuxt-link class="text-white-primary font-medium text-16" v-if="$i18n.locale == 'en'" :to="switchLocalePath('uz')">en</nuxt-link>
            </div>

            <div class="p-2 block md:hidden" @click="burger = true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z" fill="rgba(255,255,255,1)"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="burger_div w-full min-h-screen fixed md:hidden overflow-hidden top-0 right-0 z-40 p-10" :class="burger ? 'active' : ''">
      <!-- <div class="burger bg-blue-primary z-50 min-h-screen absolute top-0 right-0 p-10"> -->
        <div class="w-full flex items-center justify-between py-10 mb-100">
          <nuxt-link to="/" class="font-orbitron text-20 font-semibold text-yellow-primary block">ProCars</nuxt-link>

          <div @click="burger = false" class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,255,255,1)"/></svg>
          </div>
        </div>

        <div class="flex flex-col items-center gap-16">
          <nuxt-link to="lamborghini" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Lamborghini</nuxt-link>
          <nuxt-link to="bmw" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">BWM</nuxt-link>
          <nuxt-link to="mercedes-bens" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Mercedes Bens</nuxt-link>
          <nuxt-link to="rolls-royce" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Rolls Royce</nuxt-link>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: false
    }
  },
}
</script>

<style scoped>
  .main {
    padding: 20px 0;
    background: linear-gradient(0deg,
        rgba(25, 24, 31, 0) 10%,
        rgba(25, 24, 31, 0.8) 100%);
  }

  .burger_div {
    transition: 0.5s;
    transform: translateX(768px);
    backdrop-filter: blur(0px);
  }
  .burger_div.active {
    transform: translateX(0px);
    backdrop-filter: blur(10px);
    background: linear-gradient(5deg,
        rgba(25, 24, 31, 0) 10%,
        rgba(25, 24, 31, 0.8) 100%);
  }
</style>