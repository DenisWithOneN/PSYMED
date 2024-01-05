<script setup>

defineProps(['medicURL', 'numeMedic', 'spec1', 'spec2', 'spec3', 'spec4'])

</script>
<template>
  <div class="bg-master_beige rounded-xl w-auto h-66 drop-shadow-lg sm:w-96 sm:h-48 lg:w-96 lg:h-72">
    <div class="flex justify-between items-center p-5">
      <div class="flex flex-col justify-center pr-3">
        <p class="text-master_shadow text-lg font-bold md:text-2xl lg:text-2xl ">Dr. {{ numeMedic }}</p>
        <p class="text-master_shadow">--</p>
        <p class="text-sm sm:text-base">{{ spec1 }}</p>
        <p class="text-sm sm:text-base">{{ spec2 }}</p>
        <p class="text-sm sm:text-base">{{ spec3 }}</p>
        <p class="text-sm sm:text-base">{{ spec4 }}</p>
      </div>
      <img
      class="w-auto h-32 sm:h-40 lg:h-60"
        :src="medicURL"
        :alt="numeMedic"
      />
    </div>
  </div>
</template>
<style></style>
