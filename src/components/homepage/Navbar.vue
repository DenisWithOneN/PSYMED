<script>

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
              </script>
<template>
    <div class="container mx-auto">
        <nav
          class="py-5 bg-none flex md:items-center justify-between"
        >
          <!-- navbar menu icon -->
          <div class="text-3xl cursor-pointer mx-2 md:hidden block lg:mx-0">
            <i class=" text-master_shadow bi bi-list" onclick="Menu(this)"></i>
          </div>

          <!-- navbar pages list -->
          <ul
            class="text-master_shadow md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
          >
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/"
                class="text-xl hover:text-master_mint duration-500"
                >Acasa</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <RouterLink
                to="/test"
                class="text-xl hover:text-master_mint duration-500"
                >Programari</RouterLink>
            </li>
            <li class="mx-4 my-6 md:my-0">
              <a
                href="despre_noi.html"
                class="text-xl hover:text-master_mint duration-500"
                >Despre noi</a
              >
            </li>
            <li class="mx-4 my-6 md:my-0">
              <a
                href="servicii_si_tratamente.html"
                class="text-xl hover:text-master_mint duration-500"
                >Servicii</a
              >
            </li>
            <li class="mx-4 my-6 md:my-0">
              <a
                href="galerie.html"
                class="text-xl hover:text-master_mint duration-500"
                >Galerie</a
              >
            </li>

            <!-- navbar script -->
    
          </ul>
          <!-- navbar logo psymed -->
          <div class="text-master_shadow flex justify-between items-center">
            <a href="index.html"
              ><div class="flex text-2xl cursor-pointer">
                <div>PSYMED</div>
                <i class="bi bi-circle-fill text-2xl mx-2"></i>
              </div></a
            >
          </div>

          <!-- navbar social icons -->
          <div class="text-master_shadow md:hidden flex">
            <a href="https://www.facebook.com/"
              ><i class="bi bi-facebook text-2xl pr-2"></i
            ></a>
            <a href="https://www.instagram.com/?hl=ro"
              ><i class="bi bi-instagram text-2xl"></i
            ></a>
          </div>
        </nav>
      </div>
</template>
<style></style>