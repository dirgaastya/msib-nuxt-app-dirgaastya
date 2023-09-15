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
                <CheckoutCard
                    v-if="cartStore.cart.products"
                    v-for="(cart, index) in cartStore.cart.products"
                    :key="index"
                    :product="cart"
                />
                <CheckoutCardSkeleton v-else />
            </div>
            <div>
                <CheckoutTotalCard :total="cartStore.cart.total" />
            </div>
        </div>
    </div>
</template>
