<script>
import ServiciiTratamenteCard from "./ServiciiTratamenteCard.vue";
import FilledButton from "./FilledButton.vue";

export default {
  components: {
    ServiciiTratamenteCard,
    FilledButton,
  },
};
</script>
<template>
  <section class="md:hidden">
    <div class="flex flex-col background-section">
      <h2 class="text-3xl text-master-beige font-bold pt-72">Servicii si Tratamente</h2>
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
      <FilledButton class="margin-max"></FilledButton>
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
/* margin max sets the margin bottom for the svg background at a higher value to show the whole height of the svg picture */
.margin-max {
  margin-bottom: 20rem;
}
</style>
