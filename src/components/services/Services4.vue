<template>
  <div>
      <div
        @mouseover="hover = true"
        :class="{ active: hover }"
        class="service-content flex flex-col items-center"
      >
        <span class="pb-6 md:pb-10">
          <g-image class="px-12 md:px-0" src="/img/sensor.png"></g-image>
        </span>
        <p class="font-bold text-s12 md:text-s24 text-center px-4 md:px-8">
          Монтаж слаботочных систем и систем видеонаблюдения
        </p>
      </div>
      <p
        v-if="hover"
        @mouseleave="hover = false"
        class="absolute top-0 bottom-0 h-full py-20 text-s12 md:text-s24"
        v-scroll-reveal.reset
      >
        Установка пожарной сигнализации, охранной сигнализации, видеонаблюдения
        и регистрации, контроля управления доступом (СКУД), телефонной связи,
        спутникового телевидения, локальные, вычеслительные, структурированные,
        кабельные или СКС, представляющие собой многофункциональные комплексы,
        объединяющие все слаботочные устройства в одно целое.
      </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
