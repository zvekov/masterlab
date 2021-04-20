// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from "~/layouts/Default.vue"
import VueScrollTo from "vue-scrollto"
import VueTheMask from "vue-the-mask"
import "~/resources/scss/main.scss"
import VueSweetalert2 from "vue-sweetalert2"
import VueScrollReveal from 'gridsome-scroll-reveal';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  Vue.use(VueTheMask)


  Vue.use(VueScrollReveal, {
    class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 1000,
    scale: 1,
    distance: "1rem",
    mobile: true,
  } )
  
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueSweetalert2)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "ru", class: "min-h-full antialiased" }

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  })
  head.script.push({
    src: "/replain.js",
    body: false,
    defer: true,
  })
  head.meta.push({
    name: "yandex-verification",
    content: "593271e0c628adc1",
  })
}
