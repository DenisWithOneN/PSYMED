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
  <section class="container mx-auto flex justify-evenly">
    <section class="lg:flex lg:flex-col">
      <div class="flex flex-col items-center">
        <img
          class="pb-10 w-52 md:mb-0 sm:w-64 lg:hidden"
          src="F:\Universitate\Code\TAW\psymed\src\assets\herophoto.png"
          alt="hero section image"
        />
      </div>
      <div class="flex flex-col items-center justify-center lg:items-start">
        <div class="mb-5 md:mb-0">
          <h1
            class="text-master_shadow text-3xl text-center font-bold mb-5 px-5 lg:text-start sm:text-4xl sm:px-0"
          >
            Îngrijire cu <br />
            Empatie, Expertiză și Inimă
          </h1>

          <p
            class="text-center text-master_shadow text-sm md:text-base md:w-101 sm:w-92 px-4 lg:px-0 lg:text-start"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation <br />
            <a class="text-master_mint font-bold uppercase" href=""
              >... Citeste mai mult</a
            >
          </p>
        </div>
        <div class="flex flex-col md:flex-row md:mt-5">
          <FilledButton
            class="my-2 md:mr-2"
            buttonText="programeaza-te"
            buttonColor="bg-master_mint"
          ></FilledButton>
          <EmptyButton
            class="my-2 md:ml-2"
            buttonText="contact"
            borderColor="border-master_mint"
            textColor="text-master_mint"
          ></EmptyButton>
        </div>
      </div>
    </section>

    <img
      class="hidden lg:block"
      src="F:\Universitate\Code\TAW\psymed\src\assets\herophoto.png"
      alt="hero section image"
    />
  </section>
</template>
<style></style>
