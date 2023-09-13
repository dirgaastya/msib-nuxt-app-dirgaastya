<script setup lang="ts">
defineProps({
    label: String,
    color: String,
    icon: String,
    size: String,
    iconPosition: String,
});

const sizes: { [key: string]: string } = {
    sm: "py-2 px-4 md:py-[12px] md:px-[16px]",
    md: "py-2 px-4 md:py-[10px] md:px-[18px] md:text-lg",
};

const colors: { [key: string]: string } = {
    base: "text-gray-600 hover:bg-gray-200 transition ease-linear duration-300",
    white: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-200 transition ease-linear duration-300",
    bordered: "border border-gray-500 text-gray-700 hover:bg-gray-200 transition ease-linear duration-300",
    primary: "bg-primary text-white hover:bg-primary/80 transition ease-linear duration-300",
    danger: "bg-red-500 text-white hover:bg-red-500/80 transition ease-linear duration-300",
};
const icons: { [key: string]: string } = {
    cart: "https://ucarecdn.com/5463c96d-7ad4-4519-95ec-4f49c0db21f1/",
    "arrow-right": "https://ucarecdn.com/c2f9a698-81ab-4c1e-ba06-47caa361b864/",
    "arrow-left": "https://ucarecdn.com/ecfc7a7b-81d5-4291-a718-f4436c6d0b5c/",
    filter: "https://ucarecdn.com/71c1e085-77bc-4ba6-acae-31b930b4efd4/",
};
</script>

<template>
    <button
        :class="`${icon ? 'flex items-center gap-x-3' : ''} ${
            size ? sizes[size] : sizes.md
        }   ease-linear duration-300 rounded-lg  font-semibold ${color ? colors[color] : colors.base}`"
    >
        <img v-if="icon" :class="`${iconPosition == 'right' ? 'order-2' : 'order-1'}`" :src="icons[icon]" :alt="icon" />
        <span :class="`${iconPosition == 'right' ? 'order-1' : 'order-2'}`">{{ label }}</span>
    </button>
</template>
