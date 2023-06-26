// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss','@nuxtjs/i18n','@nuxt/image',],
    i18n: {
      precompile: {
        strictMessage: false,
      },
       lazy:true,
       langDir:'locales',
       strategy:'prefix_except_default',
       defaultLocale:'en',
       
       //vueI18n: './i18n.config.ts' ,// if you are using custom path, default 

       locales: [
       
        {code:"en",
        file:"en.json"
        },
        {code:"tr",
        file:"tr.json"
        },
       ],
       
   },
   
    
// modules: [
//   [
//     '@nuxtjs/i18n',
//     {
//       locales: ['en', 'es'],
//       defaultLocale: 'en',
//       vueI18n: {
//         fallbackLocale: 'en',
//         messages: {
//           en: {
//             greeting: 'Hello world!'
//           },
//           es: {
//             greeting: '¡Hola mundo!'
//           }
//         }
//       }
//     }
//   ]
// ]  

},




)
