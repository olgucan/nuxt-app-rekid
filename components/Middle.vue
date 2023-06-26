<template>
  <div class="relative mt-48">
    <div
      :class="`container px-8 3xl:px-0 mx-auto flex flex-wrap min-h-[502px] ${
        direction == 'right' && 'flex-row-reverse'
      } `"
    >
      <div class="md:w-3/5">
        <img
          :src="`/Mask_Group_${img}.png`"
          :class="`md:absolute  ${direction}-0 w-full  md:w-1/2 `"
          sizes="sm:100vw md:50vw"
        />
      </div>
      <div class="md:w-2/5 justify-self-end self-center">
        <p class="w-20 mb-4 h-6 bg-[#c00000]"></p>
        <div class="">
          <h2 class="secondary">{{ $t(h2) }}</h2>
          <p v-html="$t(p)"></p>
          <button class="btn mt-8">{{ $t("mid-btn") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  direction: String,
  img: String,
  h2: String,
  p: String,
});
</script>
