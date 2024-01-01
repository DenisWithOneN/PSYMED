<script>
import Navbar from "@components/Navbar.vue";
import HeroSectionMobile from "@components/HeroSectionMobile.vue";
import NumbersSection from "@components/NumbersSection.vue";
import FillSectionOne from "@components/FillSectionOne.vue";
import ServiciiTratamente from "@components/ServiciiTratamente.vue";
import Gallery from "@components/Gallery.vue";
import MediciSection from "@components/MediciSection.vue";

export default {
  components: {
    Navbar,
    HeroSectionMobile,
    NumbersSection,
    FillSectionOne,
    ServiciiTratamente,
    Gallery,
    MediciSection,
  },
};
</script>
<template>
  <body
    class="bg-gradient-to-tl from-body-gradient-contrast to-white min-h-screen"
  >
    <Navbar />
    <HeroSectionMobile></HeroSectionMobile>
    <section class="mt-32">
      <NumbersSection
        class="my-10"
        number="400"
        dataType="pacienti"
      ></NumbersSection>
      <NumbersSection
        class="my-10"
        number="700"
        dataType="consultatii de psihiatrie"
      ></NumbersSection>
      <NumbersSection
        class="my-10"
        number="250"
        dataType="evaluari psihologice"
      ></NumbersSection>
    </section>
    <FillSectionOne class="my-40"></FillSectionOne>
    <ServiciiTratamente></ServiciiTratamente>
    <Gallery></Gallery>
    <MediciSection></MediciSection>
  </body>
</template>

<style></style>
