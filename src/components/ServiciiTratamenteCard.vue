<script setup>
import {ref} from 'vue';

defineProps(['service', 'description'])

</script>
<template>
  <div class="w-80 h-72 bg-master-beige rounded-xl flex flex-col items-center">
    <div class="w-24 h-24 mt-5 bg-secondary-purple rounded-full"></div>
    <p class="text-master-grey text-center text-xl font-bold pt-2">{{ service }}</p>
    <p class="text-master-grey text-center pt-2 w-64 leading-tight">
      {{ description }}
    </p>
  </div>
</template>
<style scoped></style>
