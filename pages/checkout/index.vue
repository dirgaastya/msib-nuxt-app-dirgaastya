<template>
    <div class="pb-24">
        <div class="pt-10 px-6 md:pt-36 md:pb-[72px] md:px-24 bg-gradient-to-b from-secondary">
            <h1 class="text-3xl md:text-[40px] md:leading-[56px] md:tracking-[-0.8px] font-semibold text-gray-900 mb-6">
                Shopping Cart
            </h1>
        </div>
        <div class="px-6 md:px-28 flex gap-x-6">
            <div class="space-y-6">
                <CheckoutCard v-for="index in 4" :key="index" />
            </div>
            <div>
                <div class="border border-gray-200 p-5 rounded-xl bg-white space-y-5">
                    <div class="flex justify-between">
                        <div class="flex items-center justify-between">
                            <div class="w-1/2">
                                <h4 class="font-base text-base text-gray-900">Sub Total</h4>
                                <p class="font-base text-xs text-gray-400">Shipping and taxes calculated at checkout</p>
                            </div>
                            <h3 class="font-semibold text-xl text-gray-900 text-right">RP.144.000</h3>
                        </div>
                    </div>
                    <CheckoutButton />
                </div>
            </div>
        </div>
    </div>
</template>
