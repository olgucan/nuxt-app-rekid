


<template>
    <div class="container px-8 3xl:px-0 mx-auto my-8 flex justify-between items-center flex-col md:flex-row">
            <div>
                 <div class="flex items-center">
                    <div><NuxtLink to="/"><nuxt-img src="/Logo.png"></nuxt-img></NuxtLink></div>
                    <div><NuxtLink to="/" class="text-[32px] text-[#c00000] font-bold" >REKID</NuxtLink>
                         <p class="text-[32px] text-[#404040] ">{{ $t('footer-p1') }}</p>
                    </div>
                 </div>
                 <div>
                    <p class="text-[#404040]" v-html="$t('footer-p2')" ></p>
                 </div>
            </div>
            <div class="mt-8 md:mt-0">
                 <NuxtLink to="/"><nuxt-img src="/ETBIS.png"  /></NuxtLink>
            </div>
    </div>
</template>