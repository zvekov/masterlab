<template>
  <header id="header" class="header" role="banner">
    <div
      class="inner absolute lg:relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-end py-6 px-6 lg:px-4 xl:px-0"
    >
      <a
        class="company-logo-link block"
        href="/#header"
        v-scroll-to="'#header'"
        aria-label="Back to home"
      >
        <Logo />
      </a>

      <nav id="nav" class="nav hidden lg:flex">
        <ul
          class="menu flex flex-col lg:flex-row items-center list-reset text-s16 md:text-s20"
        >
          <li class="px-2 mb-4 md:mr-4 md:mb-0">
            <a
              href="/#about"
              v-scroll-to="'#about'"
              class="link text-s20"
              title="О нас"
            >
              О нас
            </a>
          </li>
          <li class="px-2 mb-4 md:mr-4 md:mb-0">
            <a
              href="/#services"
              v-scroll-to="'#services'"
              class="link text-s20"
              title="Услуги"
            >
              Услуги
            </a>
          </li>
          <li class="px-2 mb-4 md:mr-4 md:mb-0">
            <a
              href="/#order-call"
              v-scroll-to="'#order-call'"
              class="link text-s20"
              title="Заказать звонок"
            >
              Заказать звонок
            </a>
          </li>
          <li class="px-2 mb-4 md:mr-4 md:mb-0">
            <a
              href="/#contact"
              v-scroll-to="'#contact'"
              class="link text-s20"
              title="Контакты"
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <HeaderPhone class="hidden lg:flex items-start text-s24" />
      <MenuBurger class="lg:hidden fixed"></MenuBurger>
      <MenuSidebar>
        <ul class="sidebar-panel-nav flex flex-col items-start pt-12">
          <li>
            <a
              v-on:click="closeSidebarPanel"
              :class="$route.name === '/' && 'router-link-active'"
              class="text-copy-primary hover:text-gray-600"
              href="/#about"
              v-scroll-to="'#about'"
              title="О нас"
              >О нас</a
            >
          </li>
          <li>
            <a
              v-on:click="closeSidebarPanel"
              :class="$route.name === '/' && 'router-link-active'"
              class="text-copy-primary hover:text-gray-600"
              href="/#services"
              v-scroll-to="'#services'"
              title="Услуги"
              >Услуги</a
            >
          </li>
          <li>
            <a
              v-on:click="closeSidebarPanel"
              :class="$route.name === '/' && 'router-link-active'"
              class="text-copy-primary hover:text-gray-600"
              href="/#order-call"
              v-scroll-to="'#order-call'"
              title="Заказать звонок"
              >Заказать звонок</a
            >
          </li>
          <li>
            <a
              v-on:click="closeSidebarPanel"
              :class="$route.name === '/' && 'router-link-active'"
              class="text-copy-primary hover:text-gray-600"
              href="/#contact"
              v-scroll-to="'#contact'"
              title="Контакты"
              >Контакты</a
            >
          </li>
        </ul>
      </MenuSidebar>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";
import HeaderPhone from "~/components/HeaderPhone";
import MenuBurger from "@/components/menu/MenuBurger.vue";
import MenuSidebar from "@/components/menu/MenuSidebar.vue";
import { store, mutations } from "@/store.js";
export default {
  components: {
    Logo,
    HeaderPhone,
    MenuBurger,
    MenuSidebar
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>

<style lang="postcss">
#nav li a {
  @apply relative;
  /* padding-top: 0.4375rem; */
  padding-bottom: 0.375rem;
  border-top: 4px solid transparent;
  transition: 0.3s;
  text-decoration: none;
}
#nav li a:hover {
  @apply text-dark;
}
#nav li a:before,
.menu li a:after {
  @apply absolute;
  content: "";
  transition: transform 0.5s ease;
}
#nav li a:before {
  @apply bg-orange-900 left-0 bottom-0 w-full;
  height: 2px;
  transform: scaleX(0);
}
#nav li a:hover:before,
#nav li a.active--exact:before,
#nav li a.active:before {
  transform: scaleX(1);
}
</style>
