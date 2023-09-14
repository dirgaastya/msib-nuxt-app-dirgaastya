<script setup lang="ts">
defineProps({
    image: String,
    index: Number,
});
</script>
<template>
    <div class="w-full h-[546px] rounded-lg overflow-hidden bg-gray-100">
        <img :src="image" :alt="`image-${index}`" class="w-full h-full object-center" />
    </div>
</template>
