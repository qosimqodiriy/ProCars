<template>
    <div class="w-full bg-white-primary py-20 md:py-25 lg:py-30 relative">
        <div class="myContainer">
            <p class="text-24 md:text-30 lg:text-36 leading-38 font-semibold mb-30 text-black-primary">BMW Models</p>
            <div class="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="card w-300 h-350 relative bg-black-secondary overflow-hidden flex items-center justify-center" style="--clr: #0f0">
                    <div class="content flex items-center justify-center text-center gap-20 px-20 flex-wrap h-full">
                        <div class="icon flex items-center justify-center"><ion-icon name="brush"></ion-icon></div>
                        <div class="text">
                            <h3 class="text_heading text-20 text-white-primary font-semibold">Designing</h3>
                            <p class="text_title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat deleniti in quae soluta dignissimos velit dolorum ad tenetur voluptatum?</p>
                            <a class="link relative py-5 px-15 inline-block font-semibold" href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card::before {
        content: '';
        position: absolute;
        inset: -10px 50px;
        border-top: 4px solid var(--clr);
        border-bottom: 4px solid var(--clr);
        z-index: -1;
        transform: skewY(15deg);
        background-color: red;
        transition: 0.5s ease-in-out;
    }
    .card:hover::before {
        transform: skewY(0deg);
        inset: -10px 40px;
    }
    .card::after {
        content: '';
        position: absolute;
        inset: 60px -10px;
        border-left: 4px solid var(--clr);
        border-right: 4px solid var(--clr);
        z-index: -1;
        transform: skew(15deg);
        transition: 0.5s ease-in-out;
    }
    .card:hover::after {
        transform: skew(0deg);
        inset: 40px -10px;
    }
    .icon {
        width: 80px;
        height: 80px;
        color: var(--clr);
        font-size: 2.5em;
        background: #2e2e2e;
        transition: 0.5s ease-in-out;
        box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--clr);
    }
    .card:hover .icon {
        background: var(--clr);
        color: #2e2e2e;
        box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--clr);
    }
    .text_heading {
        transition: 0.5s ease-in-out;
    }
    .card:hover .text_heading {
        color: #2e2e2e;
    }
    .text_title {
        color: #777;
        transition: 0.5s ease-in-out;
    }
    .card:hover .text_title {
        color: #2e2e2e;
    }
    .link {
        color: #2e2e2e ;
        background: var(--clr);
        transition: 0.5s ease-in-out;
    }
    .card:hover .link {
        color: var(--clr);
        background: #2e2e2e
    }
</style>