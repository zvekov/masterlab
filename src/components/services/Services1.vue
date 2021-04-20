<template>
  <div @mouseleave="hover = false">
    <div
      @mouseover="hover = true"
      :class="{ active: hover }"
      class="service-content flex flex-col items-center"
    >
      <span class="pb-6 md:pb-10">
        <g-image class="px-12 md:px-0" src="/img/water.png"></g-image>
      </span>
      <p class="font-bold text-s12 md:text-s24 text-center px-4 md:px-8">
        Сантехнические работы
      </p>
    </div>
      <p
        v-if="hover"
        class="absolute top-0 bottom-0 h-full py-20 text-s12 md:text-s24"
        v-scroll-reveal.reset
      >
        Установка (монтаж), замена труб отопления, водоснабжения, канализации.
        Ремонт и замена сантехнического оборудования в ванных комнтах и
        санухлах, в т.ч. змеевиков, бойлеров, котельного оборудования,
        сантехнической посуды.
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
