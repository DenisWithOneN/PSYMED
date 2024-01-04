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
  <div class="spacer divMintUp2"></div>
  <section class="md:hidden bg-master_mint">
    <div class="flex flex-col background-section items-center justify-center">
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
      <FilledButton buttonText="program medici" buttonColor="bg-master_shadow" class="my-10"></FilledButton>
    </div>
  </section>
  <div class="spacer divMintDown2"></div>
</template>
<style scoped></style>
