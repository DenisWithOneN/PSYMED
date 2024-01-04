<script setup>
defineProps(["buttonText", "buttonColor"]);
</script>

<template>
  <button class="font-semibold text-white uppercase p-4 rounded-xl" :class="buttonColor">
    {{ buttonText }}
  </button>
</template>

<style></style>
