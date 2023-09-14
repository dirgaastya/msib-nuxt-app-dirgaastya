<script setup lang="ts">
defineProps({
    color: String,
    available: Boolean,
    active: Boolean,
});

const colors: { [key: string]: string } = {
    orange: "bg-orange-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
};

const variants: { [key: string]: string } = {
    available: "bg-gray-50 border-2 border-transparent",
    active: "bg-white border-2 border-primary",
    notAvailable: "bg-gray-200 border-2 border-transparent cursor-not-allowed",
};
</script>

<template>
    <button
        :disabled="!available"
        :class="`${
            available && active ? variants.active : available ? variants.available : variants.notAvailable
        } h-14 rounded-lg  flex items-center gap-x-4 ps-2 pe-4 py-2`"
    >
        <span :class="`w-10 h-10 rounded-full ${color ? colors[color] : ''}`"></span>
        <span class="font-semibold text-lg text-gray-600">Color Name</span>
    </button>
</template>
