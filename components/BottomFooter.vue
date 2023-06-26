


<template>
    <div class="bg-[#c00000] text-white">
        <div class="container flex gap-4 md:gap-0 justify-center  md:justify-between mx-auto px-8 py-2 3xl:px-0 flex-col md:flex-row">
       <div>
        <p class="text-[12px] text-center md:text-left">{{ $t('bottom-footer-p1') }}</p>
       </div>
       <div class="flex flex-col md:flex-row gap-2 items-center">
        <p>destek@rekid.com</p>
        <span>|</span>
        <div class="flex items-center gap-2">
          <NuxtLink to="/"><nuxt-img src="/icons8-whatsapp-96-3.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-telegram-app-96.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-facebook-f-96-3.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-twitter-96-3.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-instagram-logo-96-3.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-linkedin-2-96-3.png" /></NuxtLink>
          <NuxtLink to="/"><nuxt-img src="/icons8-youtube-96-3.png" /></NuxtLink>
        </div>
       </div>
        </div>
    </div>
</template>