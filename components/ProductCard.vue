<script setup lang="ts">
import { TProduct } from "../store/product.store";
defineProps({
    product: {
        type: Object as () => TProduct,
        required: true,
    },
});
function getDiscPrice(price: number, disc: number): number {
    const discountedPrice = price - price / disc;
    return parseFloat(discountedPrice.toFixed(2));
}
</script>
<template>
    <div
        class="group border border-gray-200 bg-white hover:bg-gray-300 h-[440px] rounded-xl overflow-hidden transition ease-out duration-200"
    >
        <NuxtLink :to="`/products/${product.id}`">
            <img
                :src="product.images[0]"
                :alt="product.images[0]"
                class="mx-auto w-full h-56 object-center group-hover:filter group-hover:brightness-75 transition ease-out duration-200"
            />
            <div class="p-6 h-1/2 flex flex-col justify-between">
                <div>
                    <div class="w-max py-1 px-3 rounded-full bg-gray-200 text-sm text-gray-900 font-semibold capitalize">
                        {{ product.category }}
                    </div>
                    <h4
                        class="pt-4 pb-2 font-normal text-base text-gray-900 capitalize group-hover:scale-105 group-hover:font-semibold transition ease-in duration-100"
                    >
                        {{ product.title }}
                    </h4>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <h5 class="font-semibold text-xl text-gray-900">
                            ${{ getDiscPrice(product.price, product.discountPercentage) }}
                        </h5>
                        <p class="font-normal text-right text-xs text-gray-400 capitalize">{{ product.brand }}</p>
                    </div>
                    <div class="flex items-center gap-x-2 py-1">
                        <h6 class="font-normal text-xs text-gray-400 line-through">${{ product.price }}</h6>
                        <div class="w-max py-1 px-3 rounded-full bg-red-50 text-sm text-red-700 font-semibold">
                            -{{ product.discountPercentage }} %
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
