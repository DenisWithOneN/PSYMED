<script setup>
defineProps(["buttonText", 'borderColor', 'textColor', 'backgroundColor']);
</script>
<template>
  <button
    class="border-2 p-4 rounded-xl font-semibold uppercase drop-shadow-3xl "
    :class="`${borderColor} ${textColor} ${backgroundColor}`"
  >
    {{ buttonText }}
  </button>
</template>
<style></style>
