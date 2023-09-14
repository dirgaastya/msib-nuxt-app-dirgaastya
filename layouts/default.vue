<template>
    <div>
        <Navbar />
        <slot />
        <FooterMain v-if="useRoute().name === 'index'" />
        <FooterPage v-else />
    </div>
</template>
