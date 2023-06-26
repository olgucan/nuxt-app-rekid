<template>
  <div class="md:h-[480px] bg-[#E8E4E0]">
    <div class="container mx-auto flex px-8 3xl:px-0 flex-wrap">
      <div class="md:w-1/2 pt-28">
        <h1 class="text-[#404040] text-[40px] font-bold">
          {{ $t("change-1-h1") }}
        </h1>
        <p class="text-[#404040]" v-html="$t('change-1-p')"></p>
        <button class="btn mt-4">{{ $t("mid-btn") }}</button>
      </div>
      <div class="md:w-1/2 relative">
        <nuxt-img
          src="/scene3.png"
          fit="cover"
          class="z-10 md:absolute top-6 left-16"
        />
      </div>
    </div>
  </div>
  <img src="/waveup.svg" class="w-full" />
</template>
