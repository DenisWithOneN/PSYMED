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
  <section class="bg-master_mint">
    <div class="flex flex-col background-section items-center">
      <h2 class="text-master_shadow text-4xl font-bold mt-20">Medici</h2>
      <div class="lg:flex lg:flex-wrap lg:justify-center">
        <MedicCard
        class="my-8 mx-8"
        numeMedic="Sorin Iova"
        medicURL="/images/soriniova.png"
        spec1="Medic primar psihiatru"
        spec2="Doction in stiinte medicale"
        spec3="Sef de lucrari - Universitatea Oradea"
      ></MedicCard>
      <MedicCard
        class="my-8 mx-8"
        numeMedic="Mihai Taut"
        medicURL="/images/mihaitaut.png"
        spec1="Medic specialist psihiatru"
      ></MedicCard>
      <MedicCard
        class="my-8 mx-8"
        numeMedic="Coralia Mladin"
        medicURL="/images/coraliamladin.png"
        spec1="Psiholog clinician"
      ></MedicCard>
      <MedicCard
        class="my-8 mx-8"
        numeMedic="Cristina Emilia Said"
        medicURL="/images/cristinaemilia.png"
        spec1="Medic specialist psihiatru"
      ></MedicCard>
      </div>
      <FilledButton buttonText="program medici" buttonColor="bg-master_shadow" class="my-10"></FilledButton>
    </div>
  </section>
  <div class="spacer divMintDown2"></div>
</template>
<style scoped></style>
