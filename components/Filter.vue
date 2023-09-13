<template>
    <h6 class="text-gray-700 text-lg font-semibold mb-4">Heading</h6>
    <ul>
        <li v-for="index in 10" :key="index">
            <Checkbox :index="index" />
        </li>
    </ul>
</template>
