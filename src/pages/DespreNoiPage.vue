<script setup>
import Navbar from "@components/homepage/Navbar.vue";
import Footer from "@components/homepage/Footer.vue";

import { ref, computed } from "vue";

const contactDetails = ref([
  {
    adress: "Strada Ciheiului nr. 35, bloc A3, parter",
    county: "Bihor, Oradea",
    phoneNumber: "(0359) 450 657",
    email: "psymed@emailprovider.com",
  },
]);

const inputMessage = ref("");

const showWarning = computed(() => {
  if (inputMessage.value.length >= 20)
    return "character limit:" + inputMessage.value.length + "/30";
  if (inputMessage.value.length === 30) return "character limit reached";
});

const characterLimitReached = computed(() => inputMessage.value.length === 30);

const resetInput = () => {
  inputMessage.value = '';
};

defineProps({
  contactDetails: Object,
});
</script>
<template>
  <body class="bg-master_bg min-h-screen">
    <Navbar />

    <div class="container mx-auto flex justify-between my-20">
      <div>
        <h1 class="text-master_shadow text-4xl font-bold pb-10">
          Contacteaza-ne
        </h1>
        <h2 class="text-master_shadow text-2xl font-bold pb-5">
          Cabinete de psihiatrie Dr.Iova - psymed
        </h2>
        <ul
          v-for="contactDetails in contactDetails"
          :contactDetails="contactDetails"
        >
          <li class="flex">
            <i class="bi bi-geo-alt-fill pr-2 text-master_shadow text-xl"></i>
            <p class="text-master_shadow">
              {{ contactDetails.adress }} <br />
              {{ contactDetails.county }}
            </p>
          </li>
          <li class="flex">
            <i class="bi bi-telephone-fill pr-2 text-master_shadow text-xl"></i>
            <p class="text-master_shadow">{{ contactDetails.phoneNumber }}</p>
          </li>
          <li class="flex">
            <i class="bi bi-envelope-fill pr-2 text-master_shadow text-xl"></i>
            <p class="text-master_shadow">{{ contactDetails.email }}</p>
          </li>
        </ul>

        <p class="pt-10">contacteaza-ne direct</p>
        <div class="flex flex-col items-start">
          <div class="flex justify-between">
            <input
              class="bg-master_mint placeholder-master_shadow mr-2 p-2 rounded-lg"
              type="text"
              placeholder="nume"
            />
            <input
              class="bg-master_mint placeholder-master_shadow ml-2 p-2 rounded-lg"
              type="text"
              placeholder="prenume"
            />
          </div>
          <input
            class="bg-master_mint w-full my-3 placeholder-master_shadow p-2 rounded-lg"
            type="text"
            placeholder="email"
          />
          <input
            class="bg-master_mint w-full my-3 placeholder-master_shadow p-2 rounded-lg"
            type="text"
            placeholder="telefon"
          />
          <input
            v-model="inputMessage"
            class="bg-master_mint w-full my-3 h-32 placeholder-master_shadow p-2 rounded-lg"
            type="text"
            placeholder="mesaj"
            :readonly="characterLimitReached"
          />
          <div class="flex">
            <i v-if="characterLimitReached" @click="resetInput" class="bi bi-arrow-clockwise pr-2 text-xl"></i>
            <p>{{ showWarning }}</p>
            
          </div>
        </div>
      </div>
      <img
        src="https://picsum.photos/1000/1000"
        alt=""
        class="w-1/2 rounded-xl h-auto"
      />
    </div>
    <Footer></Footer>
  </body>
</template>
