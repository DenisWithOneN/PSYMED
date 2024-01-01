<script>
import FilledButton from './FilledButton.vue';

export default {
    components: {
        FilledButton,
    }
}
</script>
<template>
  <section class="md:hidden flex flex-col items-center">
    <h2 class="text-3xl font-bold text-master-grey mb-8">Galerie</h2>
    <div class="w-96 h-96 bg-violet-300 mb-16"></div>
    <FilledButton></FilledButton>
  </section>
</template>
<style></style>
