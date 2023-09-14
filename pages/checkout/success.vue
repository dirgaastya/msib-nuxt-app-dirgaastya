<template>
    <div class="h-screen pt-10 px-6 md:pt-36 md:pb-[72px] md:px-24 bg-gradient-to-b from-secondary flex flex-col items-center">
        <h3 class="font-semibold text-xl text-gray-900 mb-1">Thank you!</h3>
        <p class="font-normal text-base text-gray-400 mb-6">Your order will be processed immediately.</p>
        <Button @click="$router.push({ path: '/' })" label="Back to Home" icon="home" color="primary" />
    </div>
</template>
