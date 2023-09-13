<script setup lang="ts">
defineProps({
    modelValue: String,
    placeholder: String,
    type: String,
    className: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: any) => {
    emit("update:modelValue", event.target.value);
};
</script>
<template>
    <input
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        :class="`w-full appearance-none h-[52px] py-[10px] px-[18px] pl-10 text-lg ease-linear duration-300 rounded-lg border border-gray-300 outline-none ring-0 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary ${className}`"
    />
</template>
