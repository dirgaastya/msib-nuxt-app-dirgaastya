<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();
const { id } = useRoute().params;
const loading = ref(false);
onMounted(() => {
    productStore.getProductDetail(Number(id));
    loading.value = true;
});
</script>

<template>
    <div class="pb-24">
        <div class="pt-10 px-6 md:px-24 md:pt-36 md:pb-[72px] bg-gradient-to-b from-secondary">
            <div class="flex items-center justify-between">
                <Button @click="$router.back()" label="Back" icon="arrow-left" color="white" size="sm" />
                <h1
                    class="text-center text-3xl md:text-[40px] md:leading-[56px] md:tracking-[-0.8px] font-semibold text-gray-900 mb-6"
                >
                    Product Detail
                </h1>
                <Button label="Add to cart" icon="cart" color="primary" size="sm" />
            </div>
        </div>
        <div v-if="loading" class="px-6 md:px-24 grid grid-cols-2">
            <div class="pe-3">
                <div class="w-full h-[546px] rounded-lg overflow-hidden bg-gray-100">
                    <img src="~/assets/images/bottle.png" alt="bottle" class="w-full h-full object-center" />
                </div>
                <div class="grid grid-cols-4 gap-3 my-4">
                    <div
                        v-for="(image, index) in productStore.product.images"
                        :key="index"
                        class="h-32 bg-gray-100 rounded-lg overflow-hidden"
                    >
                        <img src="~/assets/images/bottle.png" alt="bottle" class="h-full object-cover" />
                    </div>
                </div>
            </div>
            <div class="space-y-8">
                <div>
                    <h2 class="font-semibold text-3xl text-gray-900">{{ productStore.product.title }}</h2>
                    <h3 class="font-semibold text-2xl text-primary">${{ productStore.product.price }}</h3>
                </div>
                <div>
                    <h4 class="font-medium text-base text-gray-500 mb-2">Color</h4>
                    <div class="flex justify-between items-center gap-x-2">
                        <ColorOption color="orange" :active="true" :available="true" />
                        <ColorOption color="green" :active="false" :available="true" />
                        <ColorOption color="blue" :active="false" :available="false" />
                    </div>
                </div>
                <div>
                    <h4 class="font-medium text-base text-gray-500 mb-2">Size</h4>
                    <div class="flex items-center gap-x-2">
                        <SizeOption :active="false" :available="true" label="S" />
                        <SizeOption :active="false" :available="false" label="M" />
                        <SizeOption :active="false" :available="true" label="L" />
                        <SizeOption :active="true" :available="true" label="XL" />
                    </div>
                </div>
                <div>
                    <h4 class="font-medium text-base text-gray-500 mb-2">Quantity</h4>
                    <div class="flex items-center gap-x-2">
                        <CounterButton :active="false" state="minus" />
                        <CounterInputNumber />
                        <CounterButton :active="true" state="plus" />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <h4 class="font-medium text-base text-gray-500 mb-2">Description</h4>
                        <Button label="-" />
                    </div>
                    <p class="font-semibold text-xl text-[#262262]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias quo, harum, provident iusto
                        minima atque eligendi laudantium totam unde sed hic non rem mollitia quae reiciendis quisquam distinctio
                        odio?
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
