<script>
import AppointmentStep from "@components/AppointmentStep.vue";
import FilledButton from "@components/FilledButton.vue";
import Map from "@components/Map.vue";

export default {
  components: {
    AppointmentStep,
    FilledButton,
    Map,
  },
};
</script>
<template>
  <section class="container mx-auto flex flex-col items-center justify-center lg:flex-row-reverse lg:items-start xl:items-start">
    <div class="flex flex-col items-center lg:items-start lg:ml-10">
      <h2 class="text-4xl font-bold text-master_shadow mb-10">
        Programeaza-te
      </h2>
      <AppointmentStep
        class="mb-5"
        boxNumber="1"
        boxText="Completeaza formularul sau suna-ne"
      ></AppointmentStep>
      <img
        class="w-4 mb-5 lg:ml-6"
        src="F:\Universitate\Code\TAW\psymed\src\assets\threedots.png"
        alt=""
      />
      <AppointmentStep
        class="mb-5"
        boxNumber="2"
        boxText="Stabilim ziua si ora pentru consult"
      ></AppointmentStep>
      <img
        class="w-4 mb-5 lg:ml-6"
        src="F:\Universitate\Code\TAW\psymed\src\assets\threedots.png"
        alt=""
      />
      <AppointmentStep boxNumber="3" boxText="vino la noi!"></AppointmentStep>
      <FilledButton
        buttonText="Programeaza-te"
        buttonColor="bg-master_shadow"
        class="mt-20"
      ></FilledButton>
    </div>
    <Map class="mt-32 lg:mt-0 lg:mr-10"></Map>
  </section>
</template>
<style></style>
