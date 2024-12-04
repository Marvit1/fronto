// nuxt.config.ts
export default defineNuxtConfig({
  plugins: [
    '~/plugins/axios.js', // Register your plugin here
  ],

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt', '@stefanobartoletti/nuxt-social-share'],

  runtimeConfig: {
    public: {
      apiBase: 'https://backo-aa1b430f6434.herokuapp.com/api/v1', // Always use Heroku
    },
  },

  app: {
    head: {
      title: 'Data Politics',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'News' },
        { name: 'keywords', content: 'news, updates, articles, latest news' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph Meta Tags
        { property: 'og:title', content: 'Data Politics' },
        { property: 'og:description', content: 'News' },
        { property: 'og:image', content: '' },
        { property: 'og:url', content: '' },
        { property: 'og:type', content: 'website' },
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Data Politics' },
        { name: 'twitter:description', content: 'News' },
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/static/fav.png' },
      ],
    },
  },
});
