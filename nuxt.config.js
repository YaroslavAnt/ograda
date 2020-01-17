export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    title: "Продажа и установка еврозаборов в Запорожье и области",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Еврозаборы и тротуарная плитка от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Каталог еврозаборов, еврозабор цена с установкой в запорожье, еврозабор Запорожье, бетонный забор запорожье, еврозабор цена Запорожье, стоимость установки еврозабора, забор под ключ Запорожье, глянцевые еврозаборы в запорожье"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",
        async: ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Pacifico&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/google-analytics"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  googleAnalytics: {
    id: "{YOUR GOOGLE ANALYTICS ID}",
    dev: false
  }
};
