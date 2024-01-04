<script setup>

defineProps(['medicURL', 'numeMedic'])

</script>
<template>
  <div class="bg-master_beige rounded-xl w-96 h-66">
    <div class="flex justify-between p-5">
      <div class="flex flex-col justify-center">
        <p class="text-master_shadow text-2xl font-bold">Dr. {{ numeMedic }}</p>
        <p>Medic primar psihiatru</p>
        <p>Doctor in stiinte medicale</p>
        <p>Sef de lucrari - </p>
        <p>Universitatea Oradea</p>
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
