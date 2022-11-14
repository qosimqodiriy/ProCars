<template>
    <div class="w-full bg-white-primary py-20 md:py-25 lg:py-30">
        <div class="myContainer">
            <p class="text-24 md:text-30 lg:text-36 font-orbitron leading-38 font-semibold mb-30 text-black-primary">{{ $t('demonstrate') }}</p>
            <div class="flex flex-col gap-20 mb-10 shadow" v-for="(item, index) in models" :key="index">
                <div class="w-full flex flex-col lg:flex-row border border-black-primary overflow-hidden">
                    <div 
                        data-aos="fade-right"
                        data-aos-offset="50"
                        data-aos-once="false"
                        data-aos-mirror="true"
                        data-aos-easing="ease-in-out"

                        class="flex flex-col gap-15 w-full py-20 px-20 md:px-25 lg:px-30">
                        <h2 class="text-24 font-orbitron font-semibold tracking-wider text-yellow-primary text-shadow">{{item.name}}</h2>
                        <h3 class="text-30 font-kaushan font-medium text-black-primary leading-34">{{item.title}}</h3>
                        <p
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-once="false"
                            data-aos-mirror="true"
                            data-aos-easing="ease-in-out"

                            class="text-18 font-inter leading-28 text-black-primary flex-1">{{item.description}}</p>
                        <NuxtLink :to="item.link">
                            <p @click="scrollToTop" class="text-20 font-semibold text-blue-primary">Read more</p>
                        </NuxtLink>
                    </div>

                    <div 
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-once="false"
                        data-aos-mirror="true"
                        data-aos-easing="ease-in-out"

                        class="w-full overflow-hidden border-l border-black-primary">
                        <img class="min-h-300 h-full w-full object-cover object-center transition-all duration-700 hover:scale-110" :src="item.img" :alt="item.name">
                    </div>
                </div>
            </div>
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