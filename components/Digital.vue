<template>
  <div
    class="md:mt-80 mt-20 bg-[#E8E4E0] md:bg-[url('/wavebottom.svg')] bg-cover min-h-[480px]"
    
  >
    <div
      class="container mx-auto flex px-8 py-4 3xl:px-0 flex-col md:flex-row  justify-around lg:flex-nowrap items-center"
    >
      <div class="md:w-1/3 mt-32">
        <h1 class="text-[#c00000] text-[32px] text-center font-bold">
          {{ $t("digital-h2") }}
        </h1>
        <p
          class="text-[#404040] text-center px-12 mt-5"
          v-html="$t('digital-p')"
        ></p>
        <div class="flex justify-center gap-5 mt-8">
          <nuxt-link to="/">
            <img src="/appstore.svg" fit="contain" class=" "
          /></nuxt-link>
          <nuxt-link to="/">
            <img src="/googleplay.svg" fit="contain" class=""
          /></nuxt-link>
        </div>
      </div>
      <div class="md:w-1/3 relative flex">
        <img
          src="/Obszar_kompozycji_1.png"
          fit="contain"
          class="h-[400px] absolute left-32 top-24"
        />
        <img
          src="/Obszar_kompozycji_1@2x.png"
          fit="contain"
          class="h-[500px] xl:ml-64"
        />
      </div>
    </div>
  </div>
</template>
