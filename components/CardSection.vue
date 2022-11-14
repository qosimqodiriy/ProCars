<template>
    <section class="min-h-screen relative flex items-center justify-center bg-white-secondary py-30 md:py-44 lg:py-60">
        <div class="myContainer space-y-20 overflow-hidden">
            <div v-for="(model, index) in lists" :key="index" class="box w-full relative z-10">
                <div class="box_inner overflow-visible px-10 pb-40">
                    <h2 class="text-24 md:text-30 lg:text-36 leading-38 font-semibold font-orbitron mb-30 text-black-primary">{{ model.name }}</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-20 gap-y-30">
                        <div v-for="(item, index) in model.lists" :key="index" class="list w-full relative rounded-10 cursor-pointer overflow-hidden">
                            <div class="imgBx w-full relative h-auto md:min-h-180 overflow-hidden p-10">
                                <img v-if="type == 2" class="w-full h-full object-cover" src="@/assets/img/mbw.png" alt="" />
                                <img v-else-if="type == 3" class="w-full h-full object-cover" src="@/assets/img/mercedes.png" alt="" />
                                <img v-else class="w-full h-full object-cover" :src="item.img" alt="" />
                            </div>
                            <div class="content p-10 md:px-15 lg:px-20 md:py-15">
                                <h2 class="text-18 font-semibold text-black-primary leading-28 font-orbitron">Model: <span class="text-16 font-semibold text-black-primary">{{ item.title }}</span></h2>
                                <p class="line-clamp-4">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import bmw from '@/api/bmwModel'
import rolls from '@/api/rollsModel'
import mercedes from '@/api/mercedesModel'
import lamborghini from '@/api/lamborghiniModel'
import { type } from 'os'

export default {
    data() {
        return {
            lists: [],
        }
    },

    props: {
      type: {
        required: true,
        type: Number,
      },
    },

    mounted() {
        if(this.type == 1) {
            this.lists = lamborghini
        } else if(this.type == 2) {
            this.lists = bmw
        } else if(this.type == 3) {
            this.lists = mercedes
        } else if(this.type == 4) {
            this.lists = rolls
        } else {
            this.lists = bmw
        }
    }

}
</script>

<style lang="css" scoped>
.box::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    /* transform: translate(-250px, -120px); */
    background: linear-gradient(#ffc107, #e91e63);
}

.box::after {
    z-index: -1;
    content: '';
    position: absolute;
    right: 100px;
    bottom: 100px;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    /* transform: translate(250px, 150px); */
    background: linear-gradient(#2166f3, #31ff33);
}

.box_inner {
    width: 100%;
    z-index: 10;
    height: 100%;
    backdrop-filter: blur(30px);
}

.box .list {
    z-index: 10;
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.2);

    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.box .list:hover {
    z-index: 20;
    background: #fff;
    transform: scale(1.05) translateX(15px) translateY(-10px);
    box-shadow: -15px 20px 40px rgba(0, 0, 0, 0.5);
}
</style>
