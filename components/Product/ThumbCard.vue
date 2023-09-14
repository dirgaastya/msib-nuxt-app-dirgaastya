<script setup lang="ts">
defineProps({
    image: String,
    index: Number,
});
</script>
<template>
    <div class="h-32 bg-gray-100 rounded-lg overflow-hidden">
        <img :src="image" :alt="`image-${index}`" class="h-full object-cover" />
    </div>
</template>
