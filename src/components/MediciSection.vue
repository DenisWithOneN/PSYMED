<script>
import MedicCard from "@components/MedicCard.vue";
import FilledButton from "@components/FilledButton.vue";

export default {
  components: {
    MedicCard,
    FilledButton,
  },
};
</script>
<template>
  <section class="md:hidden border-2 border-black">
    <div class="flex flex-col background-section">
      <h2 class="text-master_shadow text-4xl font-bold mt-48">Medici</h2>
      <MedicCard
        class="my-8"
        numeMedic="Sorin Iova"
        medicURL="src\assets\sorin_iova.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Mihai Taut"
        medicURL="src\assets\mihai_taut.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Coralia Mladin"
        medicURL="src\assets\coralia_mladin.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Cristina Emilia Said"
        medicURL="src\assets\cristina_emilia.png"
      ></MedicCard>
      <FilledButton buttonText="program medici" class="mt-10"></FilledButton>
    </div>
  </section>
</template>
<style scoped>
.background-section {
  width:100%;
  height: auto;
  position: relative;
  background-image: url("F:\Universitate\Code\TAW\psymed\src\assets\vector5.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}




</style>
