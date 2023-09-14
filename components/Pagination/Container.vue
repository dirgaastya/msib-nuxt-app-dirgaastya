<template>
    <div class="flex justify-between items-center">
        <Button label="Previous" color="bordered" icon="arrow-left" size="sm" />
        <ul class="flex">
            <PaginationNumberPage :active="true" :number="1" />
            <PaginationNumberPage :active="false" :number="2" />
            <PaginationNumberPage :active="false" :number="3" />
        </ul>
        <Button label="Next" color="bordered" icon="arrow-right" iconPosition="right" size="sm" />
    </div>
</template>
