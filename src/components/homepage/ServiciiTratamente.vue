<script setup>
import ServiciiTratamenteCard from "@components/homepage/ServiciiTratamenteCard.vue";
import FilledButton from "@components/homepage/FilledButton.vue";
import { RouterLink } from "vue-router";

</script>
<template>
  <div class="spacer divMintUp"></div>
  <section class="bg-master_mint">
    <div class="container mx-auto flex flex-col items-center">
      <h2
        class="text-4xl text-master_shadow text-center font-bold mt-10 mb-10 lg:mb-20 xl:text-6xl"
      >
        Servicii si Tratamente
      </h2>
      <div
        class="container mx-auto flex flex-col justify-center items-center md:flex-wrap md:flex-row xl:flex-nowrap"
      >
        <ServiciiTratamenteCard
          class="mx-10 mb-20"
          service="consultatie psihiatrie"
          description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
        ></ServiciiTratamenteCard>

        <ServiciiTratamenteCard
          class="mx-10 mb-20"
          service="referate medicale"
          description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
        ></ServiciiTratamenteCard>

        <ServiciiTratamenteCard
          class="mx-10 mb-20"
          service="adeverinte medicale"
          description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
        ></ServiciiTratamenteCard>
        <ServiciiTratamenteCard
          class="mx-10 mb-20"
          service="consiliere psihologica"
          description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
        >
        </ServiciiTratamenteCard>
      </div>
      <RouterLink to="/programari"
        ><FilledButton
          class="mb-5"
          buttonText="programeaza-te"
          buttonColor="bg-master_shadow"
        ></FilledButton
      ></RouterLink>
    </div>
  </section>
  <div class="spacer divMintDown"></div>
</template>

<style></style>
