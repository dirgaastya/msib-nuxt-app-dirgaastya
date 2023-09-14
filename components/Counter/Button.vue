<script setup lang="ts">
defineProps({
    state: String,
    active: Boolean,
});

const variants: { [key: string]: string } = {
    active: " bg-primary cursor-pointer",
    disable: "bg-gray-200 cursor-not-allowed",
};
const states: { [key: string]: string } = {
    plus: "plus",
    minus: "minus",
};
</script>
<template>
    <button
        :disabled="!active"
        :class="`w-14 h-14 rounded-lg p-2 flex justify-center  items-center ${active ? variants.active : variants.disable}`"
    >
        <img :src="`/assets/icons/${state ? states[state] : ''}.svg`" width="24" heigth="24" :alt="state" />
    </button>
</template>
