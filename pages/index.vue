<template>
  <Head>
    <Meta hid="og:url" title="myapp" property="og:url" :content="`olgucan`" />
  </Head>
  <Header />

  <Change />

  <Middle direction="left" img="6" h2="mid-1-h2" p="mid-1-p" />
  <Middle direction="right" img="7" h2="mid-2-h2" p="mid-2-p" />
  <Middle direction="left" img="5" h2="mid-3-h2" p="mid-3-p" />
  <Digital />
   <Footer />
   <BottomFooter/>
  <!-- <NuxtLink
    v-for="{ code } in locales"
    :key="code"
    :to="switchLocalePath(code)"
    class="mr-4"
  >
    {{ code }}
  </NuxtLink> -->
</template>

<script setup>
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
const switchLocalePath = useSwitchLocalePath();
//const localePath = useLocalePath()

const { locales, locale } = useI18n();
</script>
