<script setup lang="ts">
import { TProduct } from "~/types/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Navigation, Autoplay];
defineProps({
    products: {
        type: Array as () => TProduct[],
        required: true,
    },
});
</script>

<template>
    <div class="px-6 py-10 space-y-8 md:px-24 md:py-14">
        <SectionHeader title="Latest Product" />
        <div class="flex items-center">
            <div class="w-[352px] ps-8 py-10 pe-32 space-y-28 bg-third rounded-lg">
                <div class="text-white">
                    <h4 class="font-normal text-base md:text-lg lg:text-xl xl:text-2xl">Discount</h4>
                    <h3 class="font-semibold text-4xl xl:text-5xl">More and More</h3>
                </div>
                <div>
                    <h4 class="font-normal ext-base md:text-lg lg:text-xl xl:text-2xl text-white">Up To</h4>
                    <h3 class="font-semibold text-4xl xl:text-5xl text-yellow-300">50%</h3>
                </div>
            </div>
            <Swiper
                v-if="products.length > 0"
                :modules="modules"
                :slides-per-view="1"
                :breakpoints="{
                    '640': {
                        slidesPerView: 3,
                    },
                    '768': {
                        slidesPerView: 4,
                    },
                    '1024': {
                        slidesPerView: 4,
                    },
                }"
                :space-between="10"
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
            <div v-else class="flex items-center justify-between gap-x-3 -ml-24">
                <div v-for="index in 4" :key="`i-${index}`">
                    <ProductCardSkeleton />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.swiper {
    width: 100%;
    padding: 0 10px 0 0;
    margin-left: -96px;
}
</style>
