<script>
import Navbar from "@components/Navbar.vue";
import HeroSectionMobile from "@components/HeroSectionMobile.vue";
import NumbersSection from "@components/NumbersSection.vue";

export default {
  components: {
    Navbar,
    HeroSectionMobile,
    NumbersSection,
  },
};
</script>
<template>
  <body
    class="bg-gradient-to-b from-body-gradient-contrast to-body-gradient-light min-h-screen"
  >
    <Navbar />
    <HeroSectionMobile></HeroSectionMobile>
    <FilledButton></FilledButton>
    <EmptyButton></EmptyButton>
    <NumbersSection number="400" dataType="pacienti"></NumbersSection>
  </body>
</template>

<style></style>
