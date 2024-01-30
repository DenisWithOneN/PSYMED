<script setup>
import Navbar from "@components/homepage/Navbar.vue";
import HeroSection from "@components/homepage/HeroSection.vue";
import NumbersSection from "@components/homepage/NumbersSection.vue";
import FillSectionOne from "@components/homepage/FillSectionOne.vue";
import ServiciiTratamente from "@components/homepage/ServiciiTratamente.vue";
import Gallery from "@components/homepage/Gallery.vue";
import MediciSection from "@components/homepage/MediciSection.vue";
import AppointmentSection from "@components/homepage/AppointmentSection.vue";
import Footer from "@components/homepage/Footer.vue";
</script>
<template>
  <body class="bg-master_bg">
    <Navbar />
    <HeroSection class="mt-14"></HeroSection>
    <NumbersSection class=""></NumbersSection>
    <FillSectionOne class=""></FillSectionOne>
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
