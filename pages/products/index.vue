<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();

onMounted(() => {
    productStore.fetchProducts();
});
</script>
<template>
    <div class="pb-24">
        <div class="pt-10 px-6 md:pt-36 md:pb-[72px] md:px-24 bg-gradient-to-b from-secondary">
            <h1
                class="text-center text-3xl md:text-[40px] md:leading-[56px] md:tracking-[-0.8px] font-semibold text-gray-900 mb-6"
            >
                Product List
            </h1>
            <div class="w-full flex gap-x-2 px-48 ms-10">
                <Search placeholder="Search" width="w-3/4" />
                <Button label="Sort by" icon="filter" color="white" />
            </div>
        </div>
        <div class="px-6 md:px-24 flex itemx-center">
            <div class="border-r border-gray-100 pe-36 me-8">
                <div v-for="index in 2" :key="index" class="mb-4">
                    <Filter />
                </div>
            </div>
            <div class="pb-16">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
                    <ProductCard v-for="(product, index) in productStore.products" :key="index" :product="product" />
                </div>
                <PaginationContainer />
            </div>
        </div>
    </div>
</template>
