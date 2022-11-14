<template>
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
          <p class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Contact</p>
          <p class="font-inter text-16 font-semibold transition-all duration-200 text-white-primary hover:text-yellow-primary">Sign in</p>
        </div>
      </div>
      </div>
  </div>
</template>

<style>
  .main {
    padding: 20px 0;
    background: linear-gradient(0deg,
        rgba(25, 24, 31, 0) 10%,
        rgba(25, 24, 31, 0.8) 100%);
  }
</style>
