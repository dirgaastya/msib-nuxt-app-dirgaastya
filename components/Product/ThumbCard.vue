<script setup lang="ts">
defineProps({
    image: String,
    index: Number,
});
</script>
<template>
    <div class="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
        <img :src="image" :alt="`image-${index}`" class="w-full h-full object-center" />
    </div>
</template>
