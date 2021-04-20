<template>
  <section id="about" class="inner relative" v-scroll-reveal.reset>
    <h2
      class="font-medium text-s20 md:text-s40 flex items-center pl-5 md:pl-8 pb-2 md:pb-8"
    >О нашей компании
    </h2>
    <p class="font-light text-s14 md:text-s30">
      МастерЛаб - это команда профессионалов, которая сможет справиться с
      задачей любой сложности. Выбрав услуги нашей компании, вы можете быть
      уверенны на 100%, что все проводимые нами работы выполняются в строгом
      соответствии со всеми нормами и правилами, со строгим соблюдением сроков.
      Примеры наших работ можно посмотреть в
      <a
        class="text-orange-900"
        href="https://instagram.com/masterlabminsk"
        target="_blank"
        >instagram</a
      >.
    </p>
  </section>
</template>
<style lang="postcss" scoped>
h2::before {
  @apply bg-orange-900 absolute left-0 ml-4;
  content: "";
  height: 2rem;
  width: 3px;
}
@screen sm {
  h2::before {
    @apply ml-6;
  }
}
@screen md {
  h2::before {
    height: 4rem;
  }
}
</style>
