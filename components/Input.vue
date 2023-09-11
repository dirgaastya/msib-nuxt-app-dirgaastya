<script setup lang="ts">
defineProps({
    modelValue: String,
    placeholder: String,
    type: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: any) => {
    emit("update:modelValue", event.target.value);
};
</script>
<template>
    <input
        type="text"
        :value="modelValue"
        @input="updateValue"
        placeholder="What needs to be done"
        class="h-[52px] py-[10px] px-[18px] text-lg ease-linear duration-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
    />
</template>
