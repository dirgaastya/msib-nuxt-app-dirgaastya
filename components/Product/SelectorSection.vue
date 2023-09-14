<script setup lang="ts">
defineProps({
    title: String,
});
</script>
<template>
    <div>
        <h4 class="font-medium text-base text-gray-500 mb-2 capitalize">{{ title }}</h4>
        <div class="flex items-center gap-x-2">
            <slot />
        </div>
    </div>
</template>
