<script setup>

defineProps(['medic', 'numeMedic'])

</script>
<template>
  <div class="w-96 h-66 bg-master-light rounded-xl">
    <div class="flex justify-between p-5">
      <div class="flex flex-col justify-center">
        <p class="text-2xl font-bold text-master-grey">Dr. {{ numeMedic }}</p>
        <p>Medic primar psihiatru</p>
        <p>Doctor in stiinte medicale</p>
        <p>Sef de lucrari - </p>
        <p>Universitatea Oradea</p>
      </div>
      <img
      class="w-40"
        :src="medic"
        :alt="numeMedic"
      />
    </div>
  </div>
</template>
<style></style>
