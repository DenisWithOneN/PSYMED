<script>
import Navbar from "@components/Navbar.vue";
import HeroSectionMobile from "@components/HeroSectionMobile.vue";
import NumbersSection from "@components/NumbersSection.vue";
import FillSectionOne from "@components/FillSectionOne.vue";
import ServiciiTratamente from "@components/ServiciiTratamente.vue";

export default {
  components: {
    Navbar,
    HeroSectionMobile,
    NumbersSection,
    FillSectionOne,
    ServiciiTratamente,
  },
};
</script>
<template>
  <body
    class="bg-gradient-to-b from-body-gradient-contrast to-body-gradient-light min-h-screen"
  >
    <Navbar />
    <HeroSectionMobile></HeroSectionMobile>
    <NumbersSection class="my-10" number="400" dataType="pacienti"></NumbersSection>
    <NumbersSection class="my-10" number="700" dataType="consultatii de psihiatrie"></NumbersSection>
    <NumbersSection class="my-10" number="250" dataType="evaluari psihologice"></NumbersSection>
    <FillSectionOne></FillSectionOne>
    <ServiciiTratamente></ServiciiTratamente>
  </body>
</template>

<style></style>
