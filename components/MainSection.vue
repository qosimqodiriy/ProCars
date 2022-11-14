<template>
    <div class="w-full h-screen object-cover relative">
        <Header />
        <div class="w-full h-full overflow-hidden">
            <video v-if="type == 1" class="w-full h-full object-cover" src="@/assets/videos/main_1.mp4" autoplay muted loop />
            <video v-else-if="type == 2" class="w-full h-full object-cover" src="@/assets/videos/main_2.mp4" autoplay muted loop />
            <video v-else-if="type == 3" class="w-full h-full object-cover" src="@/assets/videos/main_3.mp4" autoplay muted loop />
            <video v-else-if="type == 4" class="w-full h-full object-cover" src="@/assets/videos/main_4.mp4" autoplay muted loop />
        </div>
        <div class="z-20 absolute w-full bottom-10%">
            <div class="myContainer z-20">
                <p class="text-white-primary text_shadow text-18 md:text-24 lg:text-36 leading-24 md:leading-30 lg:leading-44 font-semibold">{{ $t('mainText') }}</p>
                <p class="text-white-primary text_shadow text-24 md:text-36 lg:text-60 leading-30 md:leading-44 lg:leading-76 font-semibold">{{ title }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
  },

  props: {
    title: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: Number,
    },
  },
}
</script>