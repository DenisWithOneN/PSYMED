<script setup>
defineProps(["service", "description"]);
</script>
<template>
  <div class="bg-master_beige rounded-xl flex flex-col items-center w-80 h-72">
    <div class="bg-master_mint rounded-full w-24 h-24 mt-5"></div>
    <p class="text-master_shadow text-center text-xl font-bold pt-2">
      {{ service }}
    </p>
    <p class="text-master_shadow text-center pt-2 w-64 leading-tight">
      {{ description }}
    </p>
  </div>
</template>
<style scoped></style>
