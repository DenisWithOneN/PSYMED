<script setup>

import { RouterLink } from "vue-router";

function Menu(e) {
                let list = document.querySelector("ul");
                e.name === "menu"
                  ? ((e.name = "close"),
                    list.classList.add("top-[80px]"),
                    list.classList.add("opacity-100"))
                  : ((e.name = "menu"),
                    list.classList.remove("top-[80px]"),
                    list.classList.remove("opacity-100"));
              }

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  
  
};
</script>
<template>
    <div class="container mx-auto">
        <nav
          class="py-5 bg-none flex md:items-center justify-between"
        >
          <!-- navbar menu icon -->
          <div class="text-3xl cursor-pointer mx-2 md:hidden block lg:mx-0">
            <i class=" text-master_shadow bi bi-list" @click="toggleMenu"></i>
          </div>

          <!-- navbar pages list -->
          <ul :class="{ 'top-[80px]': isMenuOpen, 'opacity-100': isMenuOpen, 'bg-master_bg': isMenuOpen}"
            class="text-master_shadow text-center md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
          >
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/"
                class="text-xl hover:text-master_mint duration-500"
                >Acasa</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/programari"
                class="text-xl hover:text-master_mint duration-500"
                >Programari</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/despre_noi"
                class="text-xl hover:text-master_mint duration-500"
                >Despre noi</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/servicii"
                class="text-xl hover:text-master_mint duration-500"
                >Servicii</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/galerie"
                class="text-xl hover:text-master_mint duration-500"
                >Galerie</RouterLink>
            </li>

            <!-- navbar script -->
    
          </ul>
          <!-- navbar logo psymed -->
          <div class="text-master_shadow flex justify-between items-center">
            <RouterLink
                to="/"
                class="text-xl hover:text-master_mint duration-500"
                ><div class="uppercase text-master_shadow font-bold">psymed</div></RouterLink>
            
          </div>

          <!-- navbar social icons -->
          <div class="text-master_shadow md:hidden flex">
            <a href="https://www.facebook.com/"
              ><i class="bi bi-facebook text-2xl pr-2"></i
            ></a>
            <a href="https://www.instagram.com/clinicadriova.psymed/?hl=ro"
              ><i class="bi bi-instagram text-2xl"></i
            ></a>
          </div>
        </nav>
      </div>
</template>
<style></style>