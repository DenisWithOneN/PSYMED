<script>
import FilledButton from "@components/FilledButton.vue";
import EmptyButton from "@components/EmptyButton.vue";

export default {
  components: {
    FilledButton,
    EmptyButton,
  },
};
</script>
<template>
  <div class="container mx-auto md:hidden flex flex-col items-center">
    <img
      class="w-64"
      src="F:\Universitate\Code\TAW\psymed\src\assets\herophoto.png"
      alt="hero section image"
    />
    <h1 class="text-master_shadow text-4xl text-center font-bold">
      Îngrijire cu <br />
      Empatie, Expertiză și Inimă
    </h1>
  </div>
  <img
    class="my-4 md:hidden"
    src="F:\Universitate\Code\TAW\psymed\src\assets\Line 3.svg"
    alt="hero line"
  />
  <div class="container mx-auto md:hidden flex flex-col items-center justify-center">
    <p class="text-center text-master_shadow w-92 px-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation
      <a class="text-master_mint font-bold uppercase" href=""
        >... Citeste mai mult</a
      >
    </p>
    <FilledButton class="my-2 mt-6" buttonText="programeaza-te" buttonColor="master_mint"></FilledButton>
    <EmptyButton class="my-3" buttonText="contact" buttonColor="master_mint"></EmptyButton>
    <div></div>
  </div>
</template>
<style></style>
