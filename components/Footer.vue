<template>
    <div class="w-full bg-black-primary py-20 md:py-25 lg:py-30">
        <div class="myContainer">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-20 justify-between">
                <div class="w-full space-y-20">
                    <div class="w-full">
                        <p class="text-22 text-yellow-primary font-semibold mb-20">About As</p>
                        <p class="text-16 text-white-primary font-medium">We have only the best cars</p>
                    </div>
                    <div class="w-full space-y-5">
                        <p class="text-22 text-yellow-primary font-semibold mb-20">Contact us</p>
                        <a href="tel:+998978965566" class="flex items-center gap-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 text-white-primary">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p class="text-16 text-white-primary font-medium">+998 97 896 55 66</p>
                        </a>
                        <a href="mailto:ProCars@gmail.com" class="flex items-center gap-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 text-white-primary">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p class="text-16 text-white-primary font-medium">ProCars@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div class="block md:inline w-full space-y-5">
                    <p class="text-22 text-yellow-primary font-semibold mb-20">Information</p>
                    <nuxt-link to="/"><p class="text-16 text-white-primary font-medium">About us</p></nuxt-link>
                    <nuxt-link to="/"><p class="text-16 text-white-primary font-medium">More Search</p></nuxt-link>
                    <nuxt-link to="/"><p class="text-16 text-white-primary font-medium">Blog</p></nuxt-link>
                    <nuxt-link to="/"><p class="text-16 text-white-primary font-medium">Testimonial</p></nuxt-link>
                    <nuxt-link to="/"><p class="text-16 text-white-primary font-medium">Events</p></nuxt-link>
                </div>

                <div class="block md:inline w-full space-y-5">
                    <p class="text-22 text-yellow-primary font-semibold mb-20">Helpfull Links</p>
                    <p class="text-16 text-white-primary font-medium">Services</p>
                    <p class="text-16 text-white-primary font-medium">More Search</p>
                    <p class="text-16 text-white-primary font-medium">Blog</p>
                    <p class="text-16 text-white-primary font-medium">Testimonial</p>
                    <p class="text-16 text-white-primary font-medium">Events</p>
                </div>
                
                <div class="block md:inline w-full space-y-5">
                    <p class="text-22 text-yellow-primary font-semibold mb-20">Helpfull Links</p>
                    <div class="space-y-15">
                        <div class="bg-white-primary inline-flex items-center rounded relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 text-black-primary absolute top-50% left-10 -translate-y-50%">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input type="email" class="p-5 pl-36 w-full border-none outline-none" placeholder="Enter your email">
                        </div>
                        <button class="px-20 py-5 text-white-primary font-semibold bg-yellow-secondary rounded">Subcribe</button>
                    </div>
                </div>
            </div>
            <hr class="w-full border-t border-white-primary bg-white-primary my-20">
            <div class="w-full flex flex-wrap gap-10 items-center justify-center">
                <div v-for="(item, index) in 7" :key="index" class="icon w-40 h-40 rounded-full">
                    <div class="icon_inner w-full h-full rounded-full bg-yellow-secondary flex items-center justify-center p-6">
                        <img class="img" src="@/assets/img/twitter.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    components: {

    },
}
</script>


<style scoped lang="css">
    .icon_inner {
        transition: 0.37s;
    }
    .icon:hover .icon_inner {
        transform: translateY(-10px);
    }

    .img {
        filter: drop-shadow(-3px -3px 2px rgba(255, 255, 255, 0.3))
            drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
            drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));
    }
</style>