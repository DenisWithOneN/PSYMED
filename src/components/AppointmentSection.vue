<script>
import AppointmentStep from "@components/AppointmentStep.vue";

export default {
  components: {
    AppointmentStep,
  },
};
</script>
<template>
  <section class="flex flex-col items-center">
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
  </section>
</template>
<style></style>
