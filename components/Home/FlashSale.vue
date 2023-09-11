<script setup lang="ts">
import { TProduct } from "~/store/product.store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const modules = [Navigation, Autoplay];

defineProps({
    products: {
        type: Array as () => TProduct[],
        required: true,
    },
});
</script>

<template>
    <div class="px-6 py-8 space-y-8 md:px-24 md:py-14 bg-gray-50">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-3">
                <h3 class="text-2xl font-semibold text-gray-900">Flash Sale</h3>
                <span
                    class="bg-red-500 text-white h-10 py-2 px-4 md:h-[52px] md:py-[10px] md:px-[18px] md:text-lg ease-linear duration-300 rounded-lg font-semibold"
                >
                    00:12:12
                </span>
            </div>
            <NuxtLink
                to="/"
                class="inline-flex gap-x-3 text-lg text-primary font-semibold hover:font-bold hover:scale-105 transition ease-linear duration-150"
            >
                View all <img src="~/assets/icons/arrow-right.svg" width="24" height="24" />
            </NuxtLink>
        </div>
        <Swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="10"
            :breakpoints="{
                '640': {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }"
            :loop="true"
            :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
        >
            <SwiperSlide v-for="(product, index) in products" :key="index">
                <ProductCard :product="product" />
            </SwiperSlide>
            <SwiperButtonNext />
        </Swiper>
    </div>
</template>
