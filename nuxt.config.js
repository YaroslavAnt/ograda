import { BASE_URL } from "./config";

import axios from "axios";
import { replaceWithDash } from "./static/utils";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  //server: {
  //port: 3000, // default: 3000
  //host: '0.0.0.0' // default: localhost
  //},
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      //Open Graph
      {
        property: "og:site_name ",
        content: "ograda.zp.ua"
      },
      // Search Console <meta name="google-site-verification" content="..." />
      {
        name: "google-site-verification", content="=BdJ_xcoSc2r3G9tAUUS0qVuEj-4ZNA3gYX2lOoL_wUA"
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
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap"
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#b11030", height: "5px" },
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
  modules: ["@nuxtjs/google-analytics", "@nuxtjs/sitemap"],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "http://ograda.zp.ua/",

    sitemaps: [
      {
        path: "/sitemap-products.xml",
        gzip: true,
        routes: async () => {
          const { data } = await axios.get(BASE_URL + "api/products-prices");
          let dynRoutes = [];
          data.data.forEach(priceObj =>
            priceObj.products.forEach(product =>
              dynRoutes.push(
                `products/${replaceWithDash(priceObj.name)}/${replaceWithDash(
                  product.name
                )}`
              )
            )
          );

          return dynRoutes;
        }
      }
    ]
  },
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
    id: "UA-158653896-1",
    dev: false
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/error.vue")
      });
    }
  }
};
