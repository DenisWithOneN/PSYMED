<script setup>
import FilledButton from "@components/homepage/FilledButton.vue";

</script>
<template>
  <section class="container mx-auto flex flex-col items-center my-20 xl:my-0">
    <h2 class="text-master_shadow text-4xl font-bold mb-8">Galerie</h2>
    <div class="bg-master_mint w-3/4 h-60 sm:h-72 mb-16 lg:hidden"></div>

    <!-- desktop gallery -->
    <div class="hidden lg:flex">
      <div class="mb-20">
        <!-- custom gallery-item dimensions gi1, gi2,gi3 ... -->
        <div class="w-gi1 h-96 bg-master_mint mb-5 mr-5"></div>
        <div class="flex mb-5">
          <span class="w-gi2 h-60 bg-master_mint mr-5"></span>
          <span class="w-gi3 h-60 bg-master_mint"></span>
        </div>
        <div class="flex mb-5">
            <span class="w-gi4 h-40 bg-master_mint mr-5"></span>
            <span class="w-gi5 h-40 bg-master_mint"></span>
          </div>
          <div class="w-gi6 h-60 bg-master_mint"></div>
      </div>
      <div>
        <div class="w-gi7 h-gi7 bg-master_mint mb-5"></div>
        <div class="w-gi8 h-gi8 bg-master_mint mb-5"></div>
        <div class="w-gi9 h-gi9 bg-master_mint"></div>
      </div>
    </div>
    <FilledButton
      buttonText="vezi galerie"
      buttonColor="bg-master_shadow"
    ></FilledButton>
  </section>
</template>
<style></style>
