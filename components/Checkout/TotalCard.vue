<script setup lang="ts">
defineProps({
    total: Number,
});
</script>
<template>
    <div class="border border-gray-200 p-5 rounded-xl bg-white space-y-5">
        <div class="flex justify-between">
            <div class="flex items-center justify-between">
                <div class="w-1/2">
                    <h4 class="font-normal text-base text-gray-900">Sub Total</h4>
                    <p class="font-normal text-xs text-gray-400">Shipping and taxes calculated at checkout</p>
                </div>
                <h3 v-if="total" class="font-semibold text-xl text-gray-900 text-right">$ {{ total }}</h3>
                <div v-else class="w-8 h-4 rounded-full bg-gray-200 animate-pulse"></div>
            </div>
        </div>
        <CheckoutButton />
    </div>
</template>
