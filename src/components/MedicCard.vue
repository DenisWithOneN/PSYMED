<script setup>

defineProps(['medicURL', 'numeMedic', 'spec1', 'spec2', 'spec3', 'spec4'])

</script>
<template>
  <div class="bg-master_beige rounded-xl w-96 h-66">
    <div class="flex justify-between p-5">
      <div class="flex flex-col justify-center">
        <p class="text-master_shadow text-2xl font-bold">Dr. {{ numeMedic }}</p>
        <p>{{ spec1 }}</p>
        <p>{{ spec2 }}</p>
        <p>{{ spec3 }}</p>
        <p>{{ spec4 }}</p>
      </div>
      <img
      class="w-40"
        :src="medicURL"
        :alt="numeMedic"
      />
    </div>
  </div>
</template>
<style></style>
