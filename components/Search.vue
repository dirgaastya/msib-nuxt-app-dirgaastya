<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
const productStore = useProductStore();
defineProps({
    placeholder: String,
    width: String,
});

const query = ref<string>("");
</script>
<template>
    {{ query }}
</template>
