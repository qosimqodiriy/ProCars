<template>
    <div class="box w-full min-h-screen bg-black-secondary flex items-center justify-center">
        <div class="myContainer grid md:grid-cols-2 lg:grid-cols-3 gap-y-60">
            <div class="card" v-for="(item, index) in 6" :key="index">
                <div class="lines"></div>
                <div class="imgBx">
                    <img src="@/assets/img/img.jpg" alt="">
                </div>
                <div class="content">
                    <div class="details">
                        <h2>Alina Smith <br /> <span>senior UX/UI designer</span></h2>
                        <div class="data">
                            <h3>342 <br /> <span>Posts</span></h3>
                            <h3>120K <br /> <span>Followers</span></h3>
                            <h3>286 <br /> <span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                            <button>Follow</button>
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "CardSectionTwo",

}
</script>


<style lang="css" scoped>
.box {
    background: #333;
}

.card {
    position: relative;
    width: 350px;
    height: 190px;
    background: #333;
    transition: 0.5s;
}

.card:hover {
    height: 450px;
}

.lines {
    position: absolute;
    inset: 0;
    background: #000;
    overflow: hidden;
}

.lines::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 120px;
    background: linear-gradient(transparent, #45f3ff, #45f3ff, #45f3ff, transparent);
    animation: animate 7s linear infinite;
}

.lines::after {
    content: '';
    position: absolute;
    inset: 3px;
    background: #292929;
}

.imgBx {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translate(-50%);
    width: 150px;
    height: 150px;
    background: #000;
    transition: 0.5s;
    z-index: 10;
    overflow: hidden;
}

.card:hover .imgBx {
    width: 250px;
    height: 250px;
}

.imgBx::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(transparent, #ff3c7b, #ff3c7b, #ff3c7b, transparent);
    animation: animate2 10s linear infinite;
}

.imgBx::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: #292929;
}

.imgBx img {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    filter: grayscale(1);
}

.content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
}

.details {
    width: 100%;
    padding: 40px;
    transition: 0.5s;
    text-align: center;
    transform: translateY(145px);
}

.card:hover .details {
    transform: translateY(0px);
}

.details h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #45f3ff;
    line-height: 1.2em;
}

.details h2 span {
    font-size: 0.75em;
    font-weight: 500;
    color: #fff;
}

.data {
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
}

.data h3 {
    font-size: 1em;
    color: #45f3ff;
    line-height: 1.2em;
    font-weight: 600;
}

.data h3 span {
    font-size: 0.85em;
    font-weight: 400;
    color: #fff;
}

.actionBtn {
    gap: 20px;
    display: flex;
    justify-content: space-between;
}

.actionBtn button {
    padding: 10px 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    background: #45f3ff;
}







@keyframes animate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg)
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg)
    }
}

@keyframes animate2 {
    0% {
        transform: translate(-50%, -50%) rotate(360deg)
    }

    100% {
        transform: translate(-50%, -50%) rotate(0deg)
    }
}
</style>