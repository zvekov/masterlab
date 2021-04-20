<template>
  <div id="contact" class="footer-wrapper">
    <footer id="footer" class="footer" role="contentinfo">
      <div
        class="inner flex flex-wrap items-start justify-between pt-12 pb-4 md:py-24"
      >
        <div>
          <a href="/#header" v-scroll-to="'#header'" class="order-1">
            <g-image class="footer-logo" src="/img/logo-footer.png"></g-image>
          </a>
          <p class="text-white text-s12 md:text-s24 md:pt-2 font-light">
            УНП 291639060
          </p>
        </div>
        <div class="flex flex-col order-3 md:order-2 pt-8 md:pt-0">
          <a
            class="text-white pt-2 md:pt-1 hover:text-orange-900 font-light md:font-medium text-s14 md:text-s24"
            href="tel:+375292265826"
          >
            +375 29 226 58 26
          </a>
          <a
            class="text-white pt-2 md:pt-2 hover:text-orange-900 font-light md:font-medium text-s14 md:text-s24"
            href="mailto:master-lab@tut.by"
          >
            master-lab@tut.by</a
          >
        </div>
        <ul class="w-1/2 md:w-auto md:pt-1 justify-end flex order-2 md:order-3">
          <li class="pr-2 md:pr-4">
            <a
              class="text-white hover:text-orange-900"
              href="https://instagram.com/masterlabminsk"
              target="_blank"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                class="pl-4 md:pl-0"
              >
                <path
                  class="fill-current"
                  d="M21.53 11.914c-5.324 0-9.657 4.27-9.657 9.518 0 5.248 4.332 9.518 9.658 9.518 5.325 0 9.658-4.27 9.658-9.518 0-5.249-4.333-9.518-9.658-9.518zm0 15.532c-3.385 0-6.14-2.698-6.14-6.014 0-3.316 2.755-6.014 6.14-6.014 3.386 0 6.14 2.698 6.14 6.014 0 3.316-2.753 6.014-6.14 6.014z"
                />
                <path
                  class="fill-current"
                  d="M29.35 3h-15.7C7.778 3 3 7.759 3 13.609V29.39C3 35.241 7.777 40 13.65 40h15.7C35.223 40 40 35.24 40 29.391V13.61C40 7.759 35.223 3 29.35 3zm7.125 26.391c0 3.914-3.196 7.098-7.125 7.098h-15.7c-3.929 0-7.125-3.184-7.125-7.098V13.61c0-3.914 3.196-7.098 7.125-7.098h15.7c3.929 0 7.125 3.184 7.125 7.098V29.39z"
                />
                <path
                  class="fill-current"
                  d="M31.36 13.788a2.268 2.268 0 002.273-2.263A2.268 2.268 0 0031.36 9.26a2.268 2.268 0 00-2.272 2.264 2.268 2.268 0 002.272 2.263z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              class="text-white hover:text-orange-900"
              href="https://instagram.com/masterlabminsk"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="none"
                viewBox="0 0 44 44"
                class="pl-4 md:pl-0"
              >
                <g clip-path="url(#clip0)">
                  <path
                    class="fill-current"
                    d="M19.517 3.906c1.4-1.374 3.384-1.84 5.264-1.895 1.983-.018 3.967-.009 5.95-.009.01 2.164.01 4.319 0 6.482h-3.845c-.81-.054-1.644.584-1.792 1.419-.018 1.445-.009 2.89-.009 4.336 1.88.01 3.759 0 5.638.01-.14 2.09-.392 4.174-.687 6.239-1.662.018-3.324 0-4.986.009-.017 6.168.009 12.326-.009 18.495-2.47.009-4.933-.01-7.404.009-.044-6.168 0-12.336-.026-18.504-1.2-.01-2.41.009-3.611-.01.009-2.073 0-4.147 0-6.212 1.2-.018 2.41 0 3.61-.009.036-2.01-.034-4.03.036-6.042.13-1.607.714-3.214 1.87-4.318z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path
                      fill="#fff"
                      d="M0 0h16.738v37H0z"
                      transform="translate(14 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.footer-wrapper {
  background: url("../../resources/images/bg-footer.jpg") no-repeat center
    bottom;
  background-size: cover;
}
.footer-logo {
  width: 8rem;
}
@screen md {
  .footer-logo {
    @apply w-full;
  }
}
</style>
