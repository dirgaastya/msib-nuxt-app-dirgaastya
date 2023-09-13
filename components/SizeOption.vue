<script setup lang="ts">
defineProps({
    label: String,
    available: Boolean,
    active: Boolean,
});
const variants: { [key: string]: string } = {
    available: "bg-gray-50 border-2 border-transparent",
    active: "bg-white border-2 border-primary",
    notAvailable: "bg-gray-200 text-white border-2 border-transparent",
};
</script>
<template>
    <button
        :class="`${
            available && active ? variants.active : available ? variants.available : variants.notAvailable
        } w-14 h-14  rounded-lg  flex items-center justify-center`"
    >
        <span class="font-semibold text-lg text-gray-600">{{ label }}</span>
    </button>
</template>
