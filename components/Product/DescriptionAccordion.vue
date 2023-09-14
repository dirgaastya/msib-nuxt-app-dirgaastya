<script setup lang="ts">
const show = ref(true);
const showHandler = () => {
    show.value = !show.value;
};
</script>
<template>
    <div>
        <div class="flex items-center justify-between">
            <h4 class="font-medium text-base text-gray-500 mb-2">Description</h4>
            <button @click="showHandler" class="w-8 h-8 border border-primary/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M4.16675 10H15.8334"
                        stroke="#0984DD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
        <p v-show="show" class="font-semibold text-xl text-[#262262]">
            <slot />
        </p>
    </div>
</template>
