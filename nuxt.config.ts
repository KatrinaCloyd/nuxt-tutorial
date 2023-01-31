// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Shopping Page",
      meta: [
        {
          name: "description",
          content: "tutorial shopping page for learning nuxt3",
        },
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Special+Elite&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_global.scss" as *;',
        },
      },
    },
  },
});
