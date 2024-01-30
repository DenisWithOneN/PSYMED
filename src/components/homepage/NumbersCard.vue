<script setup>
defineProps(['number', 'dataType'])
</script>
<template>
    
    <div class="flex flex-col items-center">
        <div class="bg-master_mint w-40 h-40 rounded-full drop-shadow-3xl lg:w-52 lg:h-52 xl:w-60 xl:h-60"></div>
        <p class="text-master_shadow text-2xl text-center font-bold w-40 mt-5 lg:text-3xl xl:text-4xl lg:w-60 xl:w-96">{{number}}+ <br> {{dataType}}</p>
    </div>
</template>
<style></style>