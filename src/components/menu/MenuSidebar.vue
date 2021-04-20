<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter {
  transform: translateY(-100%);
  transition: all 75ms ease-in 0s;
}
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 100ms ease-out 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  @apply fixed top-0 right-0 w-auto z-50 h-auto pl-12 pr-10 pb-12;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.9);
}
.sidebar-panel li {
  @apply text-s18 font-medium;
  padding: 0.5rem 0;
}
</style>