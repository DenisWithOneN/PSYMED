<script setup>
defineProps(["buttonText", 'borderColor', 'textColor']);
</script>
<template>
  <button
    class="border-2 p-4 rounded-xl font-semibold uppercase"
    :class="`${borderColor} ${textColor}`"
  >
    {{ buttonText }}
  </button>
</template>
<style></style>
