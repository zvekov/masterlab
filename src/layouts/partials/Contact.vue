<template>
  <section id="order-call" class="inner">
    <div class="w-full md:text-center text-s16 md:text-s48 pb-6 md:pb-16" v-scroll-reveal.reset>
      Оставьте заявку и мы свяжемся с вами
    </div>
    <form
      class="form flex flex-wrap items-end justify-between"
      v-scroll-reveal.reset
      @submit.prevent="sendEmail"
    >
      <div class="row required w-5/12 lg:w-3/12">
        <label class="text-s12 md:text-s18" for="name">Имя</label>
        <input
          class="input input-name"
          id="name"
          type="text"
          name="user_name"
          autocomplete="name"
          required
          aria-required="true"
          placeholder="Иван"
        />
      </div>
      <div class="row required w-7/12 lg:w-6/12 pl-2">
        <label class="text-s12 md:text-s18" for="phone">Телефон</label>
        <input
          v-mask="'+375' + ' (##) ###-##-##'"
          class="input input-phone border-r-0"
          id="phone"
          type="text"
          name="user_phone"
          autocomplete="tel"
          required
          aria-required="true"
          placeholder="+37529 111-11-11"
        />
      </div>
      <div class="row w-full lg:w-auto">
        <input
          type="submit"
          value="Отправить"
          class="btn inline-block w-full py-3 px-10 text-s24 md:text-s30 text-white md:font-medium bg-orange-900 hover:bg-orange-dark"
        />
      </div>
    </form>
  </section>
</template>
<script>
import emailjs from "emailjs-com"

export default {
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "yandex",
          "contactform",
          e.target,
          "user_KnGY4rBrIXljCx5Um60Hr"
        )
        .then(
          (result) => {
            alert("Заявка отправлена!")
          },
          (error) => {
            console.log("FAILED...", error)
          }
        )
    },
  },
}
</script>
<style>
.input {
  border-radius: 0;
  border-color: #000;
}
.btn {
  box-shadow: 0px 4px 10px rgba(189, 88, 0, 0.4);
}
@screen lg {
  .input-name {
    border-bottom-left-radius: 20px;
  }
  .btn {
    border-bottom-right-radius: 20px;
  }
}
</style>
