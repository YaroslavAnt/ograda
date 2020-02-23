import { BASE_URL } from "./config";

import axios from "axios";
import { replaceWithDash } from "./static/utils";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
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
  modules: ["@nuxtjs/google-analytics", "@nuxtjs/sitemap"],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "http://ograda.zp.ua/",

    sitemaps: [
      {
        exclude: ["/products"],
        path: "/sitemap-pages.xml",
        routes: [
          "/",
          "/about",
          "/blog",
          "/contact",
          "/prices",
          "/products",
          "/services"
        ]
      },
      {
        path: "/sitemap-products.xml",
        gzip: true,
        routes: async () => {
          const { data } = await axios.get(BASE_URL + "api/products-prices");
          let dynRoutes = [];
          data.data.forEach(priceObj =>
            priceObj.products.forEach(product =>
              dynRoutes.push(
                `products/${replaceWithDash(priceObj.name)}/${product.id}`
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
  }
};
