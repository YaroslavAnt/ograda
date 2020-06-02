import { BASE_URL, DOMAIN } from "./config";

import axios from "axios";
import { replaceWithDash } from "./static/utils";
// import appleIcon from "./assets/icons/appletouch.png";

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
      // Pinterest <meta name="p:domain_verify" content="6af9e360d6bb7aabcaeeb6735c8d5f6e"/>
      {
        name: "p:domain_verify",
        content: "6af9e360d6bb7aabcaeeb6735c8d5f6e"
      },
      // Search Console <meta name="google-site-verification" content="..." /> og:site_name
      {
        property: "og:site_name",
        content: "ograda.zp.ua"
      },
      // search console google-site-verification=GfuhtdrpgdSYOTTXhX_YqpKrQnMPw6Eyoz9h02s7lv8
      {
        name: "google-site-verification",
        content: "GfuhtdrpgdSYOTTXhX_YqpKrQnMPw6Eyoz9h02s7lv8"
      }
    ],
    script: [
      // {
      //   src:
      //     "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",
      //   async: ""
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap"
      // }

      //<link rel="apple-touch-icon" size="120x120" href="/apple-touch-icon.png">
      {
        rel: "apple-touch-icon",
        href: "/appletouch.png"
      }
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
  plugins: ["~/plugins/vue-lazysizes.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/google-analytics",
    "@nuxtjs/sitemap",
    "vue-social-sharing/nuxt"
  ],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://ograda.zp.ua/",

    sitemaps: [
      {
        path: "/sitemap-products.xml",
        routes: async () => {
          const { data } = await axios.get(BASE_URL + "api/products-prices");
          let dynRoutes = [];
          data.data.forEach(priceObj => {
            dynRoutes.push(replaceWithDash(`products/${priceObj.name}`));
            return priceObj.products.forEach(product =>
              dynRoutes.push(
                replaceWithDash(`products/${priceObj.name}/${product.name}`)
              )
            );
          });
          return dynRoutes;
        }
      },
      {
        path: "/sitemap-posts.xml",
        routes: async () => {
          const {
            data: { data: posts }
          } = await axios.get(BASE_URL + "api/posts");
          let pages = [];
          for (let page = 1; page <= posts.last_page; page++) {
            const {
              data: { data: paginatedPosts }
            } = await axios.get(BASE_URL + "api/posts?page=" + page);
            paginatedPosts.data.forEach(post => {
              pages.push(`/blog/${post.id}`);
            });
          }
          return pages;
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
    vendor: ["axios"],
    // extend(config, ctx) {},
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  },

  cache: true,

  googleAnalytics: {
    id: "UA-158653896-1",
    dev: false
  }

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: "custom",
  //       path: "*",
  //       component: resolve(__dirname, "pages/error.vue")
  //     });
  //   }
  // }
};
