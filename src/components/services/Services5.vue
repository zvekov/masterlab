<template>
  <div>
      <div
        @mouseover="hover = true"
        :class="{ active: hover }"
        class="service-content flex flex-col items-center"
      >
        <span class="pb-6 md:pb-10">
          <g-image class="px-12 md:px-0" src="/img/garden.png"></g-image>
        </span>
        <p class="font-bold text-s12 md:text-s24 text-center px-4 md:px-8">
          Ландшафтный дизайн, изготовление и монтаж малых архитектурных форм
        </p>
      </div>
      <p
        v-if="hover"
        @mouseleave="hover = false"
        class="absolute top-0 bottom-0 h-full py-20 text-s12 md:text-s24"
        v-scroll-reveal.reset
      >
        Благоустройство территории малыми архитектурными формами, которые
        используют для функциональности территории, а так же ее художественного
        оформления. К ним относятся: беседки, арки, урны, скамейки, скульптуры,
        перголы, фонтаны, цветочницы, лестницы, подпорные стенки, светильники и
        другие элементы.
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
