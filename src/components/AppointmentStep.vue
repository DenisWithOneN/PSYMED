<script setup>

defineProps(['boxNumber', 'boxText'])
</script>
<template>

    <div class="flex flex-col items-center lg:flex-row">
        <div class="w-24 h-24 lg:w-16 lg:h-16 bg-master_mint rounded-3xl flex items-center justify-center">
            <p class="text-white text-4xl font-bold">{{ boxNumber }}</p>
        </div>
        <p class="text-master_shadow text-xl font-bold text-center w-32 lg:text-start lg:ml-5 lg:w-72">{{ boxText }}</p>
    </div>
</template>
<style></style>