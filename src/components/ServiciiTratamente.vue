<script>
import ServiciiTratamenteCard from "@components/ServiciiTratamenteCard.vue";
import FilledButton from "@components/FilledButton.vue";

export default {
  components: {
    ServiciiTratamenteCard,
    FilledButton,
  },
};
</script>
<template>
  <section class="md:hidden bg-master_mint">
    <div class=" spacer layer1"></div>
    <div class=" flex flex-col justify-center items-center">
      <h2 class="text-4xl text-master_shadow font-bold pt-10">Servicii si Tratamente</h2>
      <ServiciiTratamenteCard
        class="mt-20 mb-20"
        service="consultatie psihiatrie"
        description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
      ></ServiciiTratamenteCard>

      <ServiciiTratamenteCard
        class="mb-20"
        service="referate medicale"
        description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
      ></ServiciiTratamenteCard>

      <ServiciiTratamenteCard
        class="mb-32"
        service="adeverinte medicale"
        description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
      ></ServiciiTratamenteCard>
      <FilledButton buttonText="programeaza-te"></FilledButton>
    </div>
  </section>
</template>

<style scoped>
.background-section {
  width: auto;
  height: 100%;
  position: relative;
  background-image: url("F:\Universitate\Code\TAW\psymed\src\assets\vector4.svg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
