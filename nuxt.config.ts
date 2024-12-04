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
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.google.com/imgres?q=png%20data%20politics&imgurl=https%3A%2F%2Fassets.genially.com%2Fs3fs-public%2FPolitical%2520data%2520videoen.png%3FVersionId%3DRIbsNy.tn2VksT1OFvXHd.NbrU3DEx8w&imgrefurl=https%3A%2F%2Fgenially.com%2Ftemplate%2Fpolitical-data-video%2F&docid=wAVmprzPCBITfM&tbnid=DH4NYaBGk_ozoM&vet=12ahUKEwj227O8kY6KAxVQA9sEHeHjMOwQM3oECEcQAA..i&w=600&h=336&hcb=2&ved=2ahUKEwj227O8kY6KAxVQA9sEHeHjMOwQM3oECEcQAA' },
      ],
    },
  },
});
