<script>
import Navbar from "@components/homepage/Navbar.vue";
import HeroSection from "@components/homepage/HeroSection.vue";
import NumbersSection from "@components/homepage/NumbersSection.vue";
import FillSectionOne from "@components/homepage/FillSectionOne.vue";
import ServiciiTratamente from "@components/homepage/ServiciiTratamente.vue";
import Gallery from "@components/homepage/Gallery.vue";
import MediciSection from "@components/homepage/MediciSection.vue";
import AppointmentSection from "@components/homepage/AppointmentSection.vue";
import Footer from "@components/homepage/Footer.vue";

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
    <AppointmentSection class="mt-32"></AppointmentSection>
    <Footer></Footer>
  </body>
</template>

<style>

body {
  font-family: 'Inter', sans-serif;
}

</style>
