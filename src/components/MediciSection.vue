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
  <section class="md:hidden mt-60">
    <div class="flex flex-col background-section">
      <h2 class="text-4xl font-bold mt-80 text-master-beige mb-8">Medici</h2>
      <MedicCard
        class="my-8"
        numeMedic="Sorin Iova"
        medic="src\assets\sorin_iova.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Mihai Taut"
        medic="src\assets\mihai_taut.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Coralia Mladin"
        medic="src\assets\coralia_mladin.png"
      ></MedicCard>
      <MedicCard
        class="my-8"
        numeMedic="Cristina Emilia Said"
        medic="src\assets\cristina_emilia.png"
      ></MedicCard>
      <FilledButton buttonText="program medici" class="my-20"></FilledButton>
    </div>
  </section>
</template>
<style>
.background-section {
  width: auto;
  height: 100%;
  position: relative;
  background-image: url("F:\Universitate\Code\TAW\psymed\src\assets\vector5.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
