<script setup>
import {ref} from 'vue';

defineProps(['number', 'dataType'])
</script>
<template>
    
    <div class="md: hidden flex flex-col items-center">
        <div class="bg-secondary-purple w-32 h-32 rounded-full"></div>
        <p class="text-center font-bold text-master-grey mt-2">{{number}}+ <br> {{dataType}}</p>
    </div>
</template>
<style></style>