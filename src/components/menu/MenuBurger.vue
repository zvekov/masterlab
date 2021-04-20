<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click.prevent="toggle">
    <slot>
      <div class="button-container">
        <button type="button" class="burger-button outline-none" title="Menu">
          <span class="hidden">Toggle menu</span>
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </div>
    </slot>
  </div>
</template>
<script>
import { store, mutations } from "@/store.js";

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
<style lang="postcss">
button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}
#burger {
  z-index: 1000;
}
.button-container {
  @apply right-0 mr-4 fixed;
}
#burger.active .button-container {
  @apply mr-40 mt-48 pt-3 pr-6;
}
.burger-button {
  margin-left: 0.5rem;
  position: relative;
  height: 30px;
  width: 38px;
  display: block;
  z-index: 60;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  z-index: 9999;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform: scaleX(1);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #000;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
  background-color: #000;
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
  background-color: #000;
}
</style>