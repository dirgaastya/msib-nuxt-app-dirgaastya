<script setup lang="ts">
import { useCartStore } from "~/store/cart.store";
const cartStore = useCartStore();

onMounted(() => {
    cartStore.fetchCart();
});

type NavMenu = {
    name: string;
    to: string;
};

const navigationLinks: NavMenu[] = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Products",
        to: "/products",
    },
    {
        name: "About",
        to: "/about",
    },
];
</script>

<template>
    <nav class="w-full absolute top-0 left-0 z-50 px-6 md:px-24 py-3 flex justify-between items-center">
        <div class="flex items-center gap-x-6">
            <img src="../assets/images/Logo-dark.png" width="142" height="32" />
            <ul class="hidden md:flex md:items-center md:gap-x-6">
                <li v-for="(link, index) in navigationLinks" :key="index">
                    <NuxtLink
                        :to="link.to"
                        class="text-base font-semibold text-gray-600 hover:text-gray-700 transition ease-in duration-300"
                        >{{ link.name }}</NuxtLink
                    >
                </li>
            </ul>
        </div>
        <div class="hidden md:flex md:space-x-3 items-center">
            <!-- <Button label="Log in" />
            <Button label="Sign up" color="primary" /> -->
            <NuxtLink to="/checkout" class="relative w-10 h-10 flex items-center justify-center">
                <span
                    class="absolute top-1 right-0 w-4 h-4 rounded-full bg-orange-500 text-[10px] font-medium text-white text-center block"
                    >{{ cartStore.cart ? cartStore.cart.totalProducts : 0 }}</span
                >
                <img src="~/assets/icons/shopping-cart-2.svg" alt="cart" />
            </NuxtLink>
            <img src="~/assets/images/Avatar.png" class="w-10 h-10 rounded-full overflow-hidden cursor-pointer" />
        </div>
        <div class="block md:hidden cursor-pointer">
            <img src="../assets/icons/hamburger-menu.svg" alt="hamburger" class="w-8 h-8" />
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    font-weight: bold;
    color: rgb(55 65 81);
}
</style>
