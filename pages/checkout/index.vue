<script setup lang="ts">
import { useCartStore } from "~/store/cart.store";
const cartStore = useCartStore();
</script>
<template>
    <div class="pb-24">
        <div class="pt-10 px-6 md:pt-36 md:pb-[72px] md:px-24 bg-gradient-to-b from-secondary">
            <h1 class="text-3xl md:text-[40px] md:leading-[56px] md:tracking-[-0.8px] font-semibold text-gray-900 mb-6">
                Shopping Cart
            </h1>
        </div>
        <div class="px-6 md:px-28 flex gap-x-6">
            <div class="space-y-6">
                <CheckoutCard v-for="(cart, index) in cartStore.cart.products" :key="index" :product="cart" />
            </div>
            <div>
                <div class="border border-gray-200 p-5 rounded-xl bg-white space-y-5">
                    <div class="flex justify-between">
                        <div class="flex items-center justify-between">
                            <div class="w-1/2">
                                <h4 class="font-normal text-base text-gray-900">Sub Total</h4>
                                <p class="font-normal text-xs text-gray-400">Shipping and taxes calculated at checkout</p>
                            </div>
                            <h3 class="font-semibold text-xl text-gray-900 text-right">$ {{ cartStore.cart.total }}</h3>
                        </div>
                    </div>
                    <CheckoutButton />
                </div>
            </div>
        </div>
    </div>
</template>
