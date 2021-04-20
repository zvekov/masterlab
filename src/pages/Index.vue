<template>
  <Layout>
    <div
      class="flex h-screen md:h-full items-start pt-32 text-center md:min-h-screen firstscreen"
    >
      <FirstScreen />
    </div>
    <Advantages class="advantages" />
    <About class="py-16 md:py-32" v-scroll-reveal.reset />
    <div class="services">
      <Services class="pt-16 md:pt-32" />
    </div>
    <Contact class="pb-16 md:pb-32" />
  </Layout>
</template>

<script>
import FirstScreen from "~/layouts/partials/FirstScreen";
import Advantages from "~/layouts/partials/Advantages";
import About from "~/layouts/partials/About";
import Services from "~/layouts/partials/Services";
import Contact from "~/layouts/partials/Contact";
export default {
  components: { FirstScreen, Advantages, About, Services, Contact },
  metaInfo: {
    title: "Сантехничекие и электромонтажные работы в Минске и Барановичах",
    titleTemplate: "%s – МастерЛаб",
    description:
      "Команда профессионалов, которая сможет справиться с задачей любой сложности. Выбрав услуги нашей компании, вы можете быть уверенны на 100%, что все проводимые нами работы выполняются в строгом соответствии со всеми нормами и правилами, со строгим соблюдением сроков.",
    keywords:
      "ремонт сантехники, электромонтажные работы, ландшафтный дизайн, слаботочные системы, Минск, Барановичи"
  }
};
</script>
<style lang="postcss" scoped>
.firstscreen {
  background: url("../resources/images/bg-first.jpg") no-repeat center center;
  background-size: cover;
}
.advantages {
  margin-top: -100%;
}
.services {
  background: url("../resources/images/bg-services.jpg") no-repeat 16% bottom;
  background-size: cover;
  padding-bottom: 14rem;
}
@media (min-width: 375px) and (min-height: 812px) {
  .advantages {
    margin-top: -160%;
  }
}
@media (min-height: 660px) and (max-height: 680px) {
  .advantages {
    margin-top: -115%;
  }
}
@media (min-height: 720px) and (max-height: 740px) {
  .advantages {
    margin-top: -135%;
  }
}
@media (min-width: 414px) and (max-height: 740px) {
  .advantages {
    margin-top: -120%;
  }
}
@media (min-width: 768px) and (max-height: 1024px) {
  .advantages {
    margin-top: -60%;
  }
}
@screen lg {
  .services {
    background: url("../resources/images/bg-services.jpg") no-repeat center
      bottom;
    background-size: cover;
    padding-bottom: 18rem;
  }
  .advantages {
    margin-top: -25%;
  }
}
</style>
