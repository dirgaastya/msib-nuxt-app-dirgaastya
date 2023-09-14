<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

defineProps({
    images: {
        type: Array as () => string[],
    },
});

const modules = [Navigation, FreeMode, Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
};
</script>
<template>
    <div class="pe-3">
        <Swiper
            :modules="modules"
            :loop="true"
            :slidesPerView="1"
            :centeredSlides="true"
            :thumbs="{ multipleActiveThumbs: false, swiper: thumbsSwiper }"
            class="mySwiper2"
        >
            <SwiperSlide v-for="(image, index) in images" :key="index">
                <ProductThumbMainCard :image="image" :index="index" />
            </SwiperSlide>
        </Swiper>
        <Swiper :modules="modules" @swiper="setThumbsSwiper" :spaceBetween="17" :slidesPerView="4" class="mySwiper my-4">
            <SwiperSlide v-for="(image, index) in images" :key="index">
                <ProductThumbCard :image="image" :index="index" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<style scoped>
.swiper-slide-thumb-active {
    overflow: hidden;
    border: 2px solid #0984dd;
    border-radius: 12px;
}
.swiper-wrapper {
    transform: none !important;
}
</style>
