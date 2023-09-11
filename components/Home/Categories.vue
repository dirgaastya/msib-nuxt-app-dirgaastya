<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";

type TCategory = {
    name: string;
    image: string;
};

const categories: TCategory[] = [
    {
        name: "Men's Fashion",
        image: "https://ucarecdn.com/4a9af0dc-76a7-4613-994a-f0c519baa782/",
    },
    {
        name: "Women's Fashion",
        image: "https://ucarecdn.com/e5962e86-ccba-4754-bddb-a63270b10562/",
    },
    {
        name: "Bicycle",
        image: "https://ucarecdn.com/fa725444-7c51-4811-a707-5591dc2a742c/",
    },
    {
        name: "Handphone",
        image: "https://ucarecdn.com/8377aac0-1634-4b85-a65f-9f873a478d4d/",
    },
    {
        name: "Hobbies and Collections",
        image: "https://ucarecdn.com/4020a4d9-a60f-4818-8cc8-ed39ba73c97e/",
    },
    {
        name: "Household",
        image: "https://ucarecdn.com/6c4fac1a-c684-45cf-aeea-a5cb85ae458d/",
    },
];
</script>
<template>
    <div class="py-12 px-6 space-y-8 md:p-24 md:pt-32">
        <SectionHeader title="Categories" />
        <div class="grid grid-cols-3 md:grid-cols-6 md:px-6 gap-10 flex-w">
            <NuxtLink to="/" v-for="(category, index) in categories" :key="index" class="group text-center space-y-3">
                <img :src="category.image" class="md:max-w-[126px] mx-auto group-hover:brightness-90" />
                <p class="text-sm md:text-base font-semibold group-hover:scale-105">{{ category.name }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
