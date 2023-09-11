<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
});
</script>
<template>
    <div class="relative pt-20 px-6 md:pt-24 md:px-24 bg-gradient-to-b from-secondary">
        <h1 class="text-center text-3xl md:text-6xl font-semibold text-gray-900">Product List</h1>
        <Input type="text" placeholder="Search" />
    </div>
    <div class="px-6 md:p-24 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <ProductCard v-for="(product, index) in productStore.products" :key="index" :product="product" />
    </div>
</template>
