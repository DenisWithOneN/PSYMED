<script setup>
import NumbersCard from "@components/homepage/NumbersCard.vue";
</script>

<template>
  <li class="container mx-auto md:flex justify-evenly lg:justify-between">
    <NumbersCard
      class="my-10 md:my-0"
      number="400"
      dataType="pacienti"
    ></NumbersCard>
    <NumbersCard
      class="my-10 md:my-0"
      number="700"
      dataType="consultatii de psihiatrie"
    ></NumbersCard>
    <NumbersCard
      class="my-10 md:my-0"
      number="250"
      dataType="evaluari psihologice"
    ></NumbersCard>
  </li>
</template>

<style></style>
