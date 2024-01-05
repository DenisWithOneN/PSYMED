<script>
import Navbar from "@components/Navbar.vue";
import HeroSection from "@components/HeroSection.vue";
import NumbersSection from "@components/NumbersSection.vue";
import FillSectionOne from "@components/FillSectionOne.vue";
import ServiciiTratamente from "@components/ServiciiTratamente.vue";
import Gallery from "@components/Gallery.vue";
import MediciSection from "@components/MediciSection.vue";
import AppointmentSection from "@components/AppointmentSection.vue";
import Footer from "@components/Footer.vue";

export default {
  components: {
    Navbar,
    HeroSection,
    NumbersSection,
    FillSectionOne,
    ServiciiTratamente,
    Gallery,
    MediciSection,
    AppointmentSection,
    Footer,
  },
};
</script>
<template>
  <body class="bg-master_bg">
    <Navbar />
    <HeroSection class="mt-14"></HeroSection>
    <NumbersSection class="mb-32"></NumbersSection>
    <FillSectionOne class="mb-20"></FillSectionOne>
    <ServiciiTratamente class=""></ServiciiTratamente>
    <Gallery class=""></Gallery>
    <MediciSection class=""></MediciSection>
    <AppointmentSection class=""></AppointmentSection>
    <Footer></Footer>
  </body>
</template>

<style>

body {
  font-family: 'Inter', sans-serif;
}

</style>
