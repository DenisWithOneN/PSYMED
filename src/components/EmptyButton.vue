<script setup>
defineProps(["buttonText", 'buttonColor']);
</script>
<template>
  <button
    class=" border-2 p-4 rounded-xl  font-semibold uppercase"
    :class="`border-${buttonColor}`, `text-${buttonColor}`"
  >
    {{ buttonText }}
  </button>
</template>
<style></style>
