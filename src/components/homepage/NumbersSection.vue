<script>

import NumbersCard from "@components/homepage/NumbersCard.vue";

export default {
  components: {
    NumbersCard,
  },
};
</script>

<template>
    <section class="container mx-auto mt-32 md:flex justify-evenly">
      <NumbersCard
        class="my-10"
        number="400"
        dataType="pacienti"
      ></NumbersCard>
      <NumbersCard
        class="my-10"
        number="700"
        dataType="consultatii de psihiatrie"
      ></NumbersCard>
      <NumbersCard
        class="my-10"
        number="250"
        dataType="evaluari psihologice"
      ></NumbersCard>
    </section>
</template>

<style></style>
