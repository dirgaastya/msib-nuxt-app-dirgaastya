<script setup lang="ts">
import { TCartProduct } from "~/types/types";
import { useCartStore } from "~/store/cart.store";
const cartStore = useCartStore();
defineProps({
    product: {
        type: Object as () => TCartProduct,
        required: true,
    },
});
</script>
<template>
    <NuxtLink
        :to="`/product/${product.id}`"
        class="w-[720px] flex border border-gray-200 p-2 rounded-xl bg-white hover:bg-gray-100 transition ease-linear duration-100"
    >
        <div class="w-72 h-44 rounded-md overflow-hidden bg-gray-200">
            <img
                :src="`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`"
                alt="bottle"
                class="w-full h-full mx-auto object-cover"
            />
        </div>
        <div class="w-full p-3 flex flex-col justify-between">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="font-base text-base text-gray-900 capitalize">{{ product.title }}</h4>
                    <p class="font-base text-xs text-gray-400">Color Name</p>
                </div>
                <h3 class="font-semibold text-xl text-gray-900 text-right">$ {{ product.price }}</h3>
            </div>
            <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-gray-700">Qty : {{ product.quantity }}</h3>
                <button @click="cartStore.removeItem(product.id)" class="flex items-center gap-x-2 group">
                    <img
                        src="~/assets/icons/trash.svg"
                        alt="remove"
                        class="group-hover:scale-105 transition ease-linear duration-100"
                    />
                    <span class="font-semibold text-sm text-red-700 group-hover:font-bold transition ease-linear duration-100"
                        >Remove</span
                    >
                </button>
            </div>
        </div>
    </NuxtLink>
</template>
