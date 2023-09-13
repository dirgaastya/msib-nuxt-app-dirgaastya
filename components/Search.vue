<script setup lang="ts">
defineProps({
    placeholder: String,
    width: String,
});
</script>
<template>
    <label :class="`${width} relative block`">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-[14px]">
            <img src="~/assets/icons/search-lg.svg" alt="search-icon" />
        </span>
        <Input type="text" :placeholder="placeholder" />
    </label>
</template>
