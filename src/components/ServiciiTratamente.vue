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
  <div class="spacer divMintUp"></div>
  <section class="bg-master_mint">
    <div class="flex flex-col items-center">
      <h2 class="text-4xl text-master_shadow font-bold pt-10">
        Servicii si Tratamente
      </h2>
      <div class="container mx-auto flex flex-col items-center lg:flex-row lg:justify-evenly lg:pt-14">
        <div>
          <ServiciiTratamenteCard
            class="mt-20 lg:mt-0 mb-20"
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
        </div>

        <div>
          <ServiciiTratamenteCard
            class="mb-20"
            service="adeverinte medicale"
            description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
          ></ServiciiTratamenteCard>
          <ServiciiTratamenteCard
            class="mb-20"
            service="consiliere psihologica"
            description="re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est l"
          >
          </ServiciiTratamenteCard>
        </div>
      </div>
      <FilledButton
        class="mb-20"
        buttonText="programeaza-te"
        buttonColor="bg-master_shadow"
      ></FilledButton>
    </div>
  </section>
  <div class="spacer divMintDown"></div>
</template>

<style></style>
