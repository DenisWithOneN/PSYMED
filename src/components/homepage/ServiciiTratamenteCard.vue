<script setup>
defineProps(["service", "description"]);
</script>
<template>
  <div
    class="bg-master_beige rounded-xl flex flex-col items-center w-60 h-56 drop-shadow-lg sm:h-72 sm:w-80"
  >
    <div
      class="bg-master_mint rounded-full w-16 h-16 sm:w-24 sm:h-24 mt-5"
    ></div>
    <p class="text-master_shadow text-center text-xl font-bold pt-2">
      {{ service }}
    </p>
    <p
      class="text-master_shadow text-center pt-2 w-52 leading-tight text-sm sm:w-64 sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
<style scoped></style>
