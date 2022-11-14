<template>
    <div class="w-full h-screen object-cover relative">
        <Header />
        <div class="w-full h-full overflow-hidden">
            <video class="w-full h-full object-cover" src="@/assets/videos/main.mp4" autoplay muted loop />
        </div>
        <div class="z-20 absolute w-full bottom-10%">
            <div class="myContainer z-20">
                <p class="text-white-primary text_shadow text-18 md:text-24 lg:text-36 leading-24 md:leading-30 lg:leading-44 font-semibold">You are deserved to the best</p>
                <p class="text-white-primary text_shadow text-24 md:text-36 lg:text-60 leading-30 md:leading-44 lg:leading-76 font-semibold">Feel the taste of speed</p>
            </div>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
export default {
    name: 'MainSection',
    components: {
        Header,
    }
}
</script>