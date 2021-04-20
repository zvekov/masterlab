<template>
  <section id="services" class="inner relative text-white">
    <h2
      class="font-bold text-s20 md:text-s40 flex items-center pl-5 md:pl-8 md:pb-8 text-white"
    >
      Наши услуги
    </h2>
    <div class="flex flex-wrap md:pt-8">
      <Services1
      v-scroll-reveal.reset
        class="service w-1/2 py-2 md:py-16 px-0 md:px-8 flex justify-center flex-col relative cursor-pointer"
      />
      <Services2
      v-scroll-reveal.reset
        class="service w-1/2 py-2 md:py-16 px-0 md:px-8 flex justify-center flex-col relative cursor-pointer"
      />
      <Services3
      v-scroll-reveal.reset
        class="service w-1/2 py-2 md:py-16 px-0 md:px-8 flex justify-center flex-col relative cursor-pointer"
      />
      <Services4
      v-scroll-reveal.reset
        class="service w-1/2 py-2 md:py-16 px-0 md:px-8 flex justify-center flex-col relative cursor-pointer"
      />
      <Services5
      v-scroll-reveal.reset
        class="service w-1/2 py-2 md:py-16 px-0 md:px-8 flex justify-center flex-col relative cursor-pointer"
      />
    </div>
  </section>
</template>

<script>
import Services1 from "@/components/services/Services1";
import Services2 from "@/components/services/Services2";
import Services3 from "@/components/services/Services3";
import Services4 from "@/components/services/Services4";
import Services5 from "@/components/services/Services5";
export default {
  components: {
    Services1,
    Services2,
    Services3,
    Services4,
    Services5
  }
};
</script>

<style lang="postcss">
#services h2::before {
  @apply bg-orange-900 absolute left-0 ml-4;
  content: "";
  height: 2rem;
  width: 3px;
}
.service {
  min-height: 16rem;
}
@screen sm {
  #services h2::before {
    @apply ml-6;
  }
}
@screen md {
  #services h2::before {
    height: 4rem;
  }

  .service {
    min-height: 20rem;
  }
}
.service .active {
  visibility: hidden;
}
</style>
