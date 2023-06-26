<template>
  <div class="bg-[red] w-full h-[5px] m-0"></div>
  <div class="container px-8 3xl:px-0 mx-auto my-8">
    <div
      class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-4 gap-lg-0"
    >
      <div class="w-full md:w-2/5 text-center lg:text-left">
        <NuxtLink to="/" class="text-[32px] text-[#C00000] font-bold"
          >REKID</NuxtLink
        >
      </div>
      <div
        class="w-full md:w-3/5 flex flex-wrap gap-4 gap-lg-0 lg:flex-nowrap justify-evenly items-center"
      >
        <NuxtLink to="/" class="block text-[#C00000] font-bold">{{
          $t("solutions")
        }}</NuxtLink>
        <NuxtLink to="/" class="block font-bold">{{
          $t("memberships")
        }}</NuxtLink>
        <NuxtLink to="/" class="block font-bold">{{ $t("academy") }}</NuxtLink>
        <NuxtLink to="/" class="block font-bold">{{
          $t("community")
        }}</NuxtLink>
        <NuxtLink to="/" class="block font-bold">{{ $t("login") }}</NuxtLink>
        <NuxtLink to="/" class="btn">{{ $t("sign-up") }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>
