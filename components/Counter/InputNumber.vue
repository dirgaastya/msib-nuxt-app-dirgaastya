<script setup lang="ts">
defineProps({
    modelValue: Number,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: any) => {
    emit("update:modelValue", event.target.value);
};
</script>
<template>
    <input
        type="number"
        :value="modelValue"
        @input="updateValue"
        :class="`remove-arrow h-[52px] w-14 p-2 text-center text-xl font-semibold text-gray-900 ease-linear duration-300 rounded-lg border border-gray-300 outline-none ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary `"
    />
</template>
