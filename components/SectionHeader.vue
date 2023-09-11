<script setup lang="ts">
defineProps({
    title: String,
});
</script>
<template>
    <div class="flex items-center justify-between">
        <h3 class="text-2xl font-semibold text-gray-900">{{ title }}</h3>
        <NuxtLink
            to="/"
            class="inline-flex gap-x-3 text-lg text-primary font-semibold hover:font-bold hover:scale-105 transition ease-linear duration-150"
        >
            View all <img src="../assets/icons/arrow-right.svg" width="24" height="24" />
        </NuxtLink>
    </div>
</template>
