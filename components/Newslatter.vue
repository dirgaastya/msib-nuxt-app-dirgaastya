<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
    <div class="px-6 py-10 md:px-24 md:py-12 bg-gray-900 flex flex-col gap-y-3 lg:flex-row items-center justify-between">
        <div class="">
            <h4 class="font-semibold text-white text-xl">
                Join Our Newslatter
            </h4>
            <p class="font-normal text-base text-gray-200">
                Join over 4,000+ startups already growing with Morpheme.
            </p>
        </div>
        <div class="space-y-3">
            <div class="flex items-center gap-x-3">
                <Input type="email" placeholder="Enter Your Email" />
                <Button label="Subscribe" color="primary" />
            </div>
            <img src="../assets/icons/info-circle.svg" alt="info" />
        </div>
    </div>
</template>
