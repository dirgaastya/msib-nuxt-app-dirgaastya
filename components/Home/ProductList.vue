<script setup lang="ts">
import { TProduct } from "../../store/product.store";
import ProductCard from "../ProductCard.vue";
import SectionHeader from "../SectionHeader.vue";

defineProps({
    products: {
        type: Array as () => TProduct[],
        required: true,
    },
});
</script>

<template>
    <div class="px-6 py-10 space-y-8 md:px-24 md:py-14">
        <SectionHeader title="For You" />
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            <ProductCard v-if="products.length > 0" v-for="(product, index) in products" :key="index" :product="product" />
            <ProductCardSkeleton v-else v-for="index in 20" :key="`i-${index}`" />
        </div>
    </div>
</template>
