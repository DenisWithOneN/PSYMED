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
  <section class="md:hidden flex flex-col items-center">
    <AppointmentStep
      class="mb-5"
      boxNumber="1"
      boxText="Completeaza formularul sau suna-ne"
    ></AppointmentStep>
    <img
      class="w-4 mb-5"
      src="F:\Universitate\Code\TAW\psymed\src\assets\threedots.png"
      alt=""
    />
    <AppointmentStep
      class="mb-5"
      boxNumber="2"
      boxText="Stabilim ziua si ora pentru consult"
    ></AppointmentStep>
    <img
      class="w-4 mb-5"
      src="F:\Universitate\Code\TAW\psymed\src\assets\threedots.png"
      alt=""
    />
    <AppointmentStep boxNumber="3" boxText="vino la noi!"></AppointmentStep>
    <FilledButton buttonText="Programeaza-te" class="mt-20"></FilledButton>
    <Map class="mt-32"></Map>
  </section>
</template>
<style></style>
