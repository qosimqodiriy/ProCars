<template>
    <div class="w-full bg-white-secondary py-20 md:py-25 lg:py-30 relative">
        <div class="myContainer">
            <p class="text-24 md:text-30 lg:text-36 font-orbitron leading-38 font-semibold mb-30 text-black-primary">BMW {{ $t('lastModel') }}</p>
            <div class="grid lg:grid-cols-2 gap-10">
                <div class="w-full relative border border-black-secondary overflow-hidden">
                    <video src="@/assets/videos/BMW_X6.mp4" autoplay muted loop></video>
                    <p class="absolute bottom-5% left-4% text-20 md:text-24 lg:text-30 text-white-primary text_shadow font-semibold">BMW M8 Grand Coupe</p>
                </div>
                <div class="w-full relative border border-black-secondary overflow-hidden">
                    <video src="@/assets/videos/bmw_z4_m40i.mp4" autoplay muted loop></video>
                    <p class="absolute bottom-5% left-4% text-20 md:text-24 lg:text-30 text-white-primary text_shadow font-semibold">BMW M8 Grand Coupe</p>
                </div>
                <div class="w-full relative border border-black-secondary overflow-hidden">
                    <video src="@/assets/videos/bmw_x6m.mp4" autoplay muted loop></video>
                    <p class="absolute bottom-5% left-4% text-20 md:text-24 lg:text-30 text-white-primary text_shadow font-semibold">BMW M8 Grand Coupe</p>
                </div>
                <div class="w-full relative border border-black-secondary overflow-hidden">
                    <video src="@/assets/videos/bmw_x5m.mp4" autoplay muted loop></video>
                    <p class="absolute bottom-5% left-4% text-20 md:text-24 lg:text-30 text-white-primary text_shadow font-semibold">BMW M8 Grand Coupe</p>
                </div>
            </div>
        </div>
    </div>
</template>