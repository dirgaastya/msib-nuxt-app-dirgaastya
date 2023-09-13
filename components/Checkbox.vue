<script setup lang="ts">
defineProps({
    index: Number,
});
</script>
<template>
    <div class="my-3 flex items-center gap-x-3">
        <input
            type="checkbox"
            :name="`type-${index}`"
            :id="`type-${index}`"
            class="relative peer shrink-0 appearance-none w-4 h-4 border border-gray-300 rounded-md bg-white mt-1 checked:bg-primary checked:border-0"
        />
        <label :for="`type-${index}`" class="font-medium text-gray-700 text-base">Type</label>
        <svg
            class="absolute w-4 h-4 mt-1 p-[1px] text-white hidden peer-checked:block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
</template>
