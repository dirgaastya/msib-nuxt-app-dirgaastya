<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();
const query = ref("");

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
                Product List {{ query }}
            </h1>
            <div class="w-full flex gap-x-2 px-48 ms-10">
                <label :class="`w-3/4 relative block`">
                    <span class="sr-only">Search </span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-[14px]">
                        <img src="~/assets/icons/search-lg.svg" alt="search-icon" />
                    </span>

                    <input
                        @keyup.enter="productStore.searchProducts(query)"
                        v-model="query"
                        type="text"
                        placeholder="Search"
                        :class="`w-full appearance-none h-[52px] py-[10px] px-[18px] pl-10 text-lg ease-linear duration-300 rounded-lg border border-gray-300 outline-none ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary `"
                    />
                </label>
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
