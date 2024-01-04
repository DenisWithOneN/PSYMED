<script setup>
defineProps(['number', 'dataType'])
</script>
<template>
    
    <div class="md:hidden flex flex-col items-center">
        <div class="bg-master_mint w-40 h-40 rounded-full"></div>
        <p class="text-master_shadow text-xl text-center font-bold mt-2">{{number}}+ <br> {{dataType}}</p>
    </div>
</template>
<style></style>