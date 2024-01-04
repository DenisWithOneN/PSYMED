<script>
import FilledButton from "@components/FilledButton.vue";

export default {
  components: {
    FilledButton,
  },
};
</script>
<template>
  <section class="md:hidden flex flex-col items-center">
    <h2 class="text-master_shadow text-4xl font-bold mb-8">Galerie</h2>
    <div class="bg-master_mint w-96 h-96 mb-16"></div>
    <FilledButton
      buttonText="vezi galerie"
      buttonColor="bg-master_shadow"
    ></FilledButton>
  </section>
</template>
<style></style>
