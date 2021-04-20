<template>
  <div>
    <div id="wrapper" class="wrapper flex flex-col relative min-h-screen">
      <HeaderPartial />
      <main id="main" class="main flex flex-1 flex-col">
        <slot />
      </main>
      <FooterPartial />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue"
import FooterPartial from "~/layouts/partials/Footer.vue"

export default {
  components: {
    HeaderPartial,
    FooterPartial
  },
}
</script>
