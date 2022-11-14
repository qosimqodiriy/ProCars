<template>
    <div class="w-full bg-white-primary py-20 md:py-25 lg:py-30">
        <div class="myContainer">
            <p class="text-24 md:text-30 lg:text-36 font-orbitron leading-38 font-semibold mb-30 text-black-primary">Hamkorlarimiz</p>
            <div class="slider">
                <div class="slide-track flex gap-30">
                    <div class="slide shrink-0 overflow-hidden border border-black-secondary rounded-20 shadow-md" v-for="(item, index) in partners" :key="index">
                        <img class="max-w-full max-h-full object-cover" :src="item.img" :alt="item.name" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import json from '@/api/partners'
export default {
    data() {
        return {
            partners: json,
        }
    },

}
</script>

<style lang="scss">
@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-170px * 7))}
}


.slider {
	height: 150px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100%;
	padding-bottom: 10px;
	
	&::before,
	&::after {
		@include white-gradient;
		content: "";
		height: 150px;
		position: absolute;
		width: 50px;
		z-index: 2;
	}
	
	&::after {
		right: -5px;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: -5px;
		top: 0;
	}
	
	.slide-track {
		width: calc((140px + 25px) * 14);
		animation: scroll $animationSpeed linear infinite;
	}
	
	.slide {
        padding: 10px;
		max-width: 140px;
		max-height: 140px;
	}
}
</style>