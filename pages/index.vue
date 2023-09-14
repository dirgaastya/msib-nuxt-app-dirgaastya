<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
});
</script>

<template>
    <HomeHero />
    <HomeCategories />
    <HomeFlashSale :products="productStore.products" />
    <HomeLatestProduct :products="productStore.products" />
    <HomePromo />
    <HomeLatestProduct :products="productStore.products" />
    <HomeProductList :products="productStore.products" />
    <Newslatter />
</template>
