<template>
  <section id="advantages" class="inner">
    <h2
      class="w-full text-center text-white font-medium text-s16 md:text-s36 pb-2"
      v-scroll-reveal.reset="{ delay: 500 }"
    >
      Почему клиенты доверяют нам?
    </h2>
    <div class="wrapper flex flex-wrap">
      <div
        v-for="advantage in advantages"
        v-bind:key="advantage.id"
        class="w-full lg:w-1/3 lg:p-2"
        v-scroll-reveal.reset="{ delay: 1000 }"
      >
        <div class="advantage-content my-1 lg:my-0 px-6 py-6 lg:py-12">
          <h3 class="font-bold text-s20 md:text-s24 mb-3 md:mb-6">
            {{ advantage.title }}
          </h3>
          <p class="text-s14 md:text-s18 font-light leading-snug">
            {{ advantage.description }}
          </p>
        </div>
        <g-image :src="advantage.image"></g-image>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      advantages: [
        {
          title: "Профессионализм",
          description:
            "У нас работают специалисты высокого уровня. Наши проекты всегда решают поставленные задачи.",
          image: "/img/advantages_1.jpg"
        },
        {
          title: "Оперативность",
          description:
            "Схемы закупки оборудования и нормы трудовой дисциплины позволяют нам быстро приступить к работе и быстро справиться с задачей.",
          image: "/img/advantages_2.jpg"
        },
        {
          title: "Цена",
          description:
            "Мы ведем лояльную ценовую политику. Обратитесь за тендерной заявкой или коммерческим предложением и убедитесь сами.",
          image: "/img/advantages_3.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
#advantages > .wrapper > div > img {
  @apply hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
#advantages > .wrapper > div:first-child h3,
#advantages > .wrapper > div:last-child h3 {
  @apply text-white;
}
#advantages > .wrapper > div:nth-child(2) .advantage-content {
  background: rgba(255, 255, 255, 0.8);
}
#advantages > .wrapper > div:first-child .advantage-content,
#advantages > .wrapper > div:last-child .advantage-content {
  @apply bg-orange-900 text-white;
}
#advantages > .wrapper > div:first-child .advantage-content {
  border-top-left-radius: 1.875rem;
}
#advantages > .wrapper > div:last-child .advantage-content {
  border-bottom-right-radius: 1.875rem;
}
@screen lg {
  #advantages > .wrapper > div > img {
    @apply block;
  }
  .advantage-content {
    min-height: 18rem;
  }
  #advantages > .wrapper > div:last-child .advantage-content {
    border-top-right-radius: 1.875rem;
    border-bottom-right-radius: 0;
  }
}
</style>
