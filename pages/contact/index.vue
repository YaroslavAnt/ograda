﻿<template>
  <main>
    <h1 class="heading with-skewed-bg">{{ title }}</h1>
    <app-section class="section">
      <div class="contact">
        <form class="form">
          <p class="medium-font">Напишите нам</p>
          <!-- <input
          type="text"
          placeholder="Имя"
          class="input"
          v-model="formData.name"
        /> -->
          <input
            type="email"
            placeholder="Ваша эл.почта"
            class="input"
            v-model="formData.email"
          />
          <!-- <input
          type="tel"
          placeholder="Телефон"
          class="input"
          v-model="formData.phone"
        /> -->
          <textarea
            class="input area"
            placeholder="Сообщение"
            v-model="formData.message"
          />
          <ul v-if="errors.length > 0" class="warn">
            <li v-for="(err, idx) in errors" :key="idx">{{ err }}</li>
          </ul>
          <input
            type="button"
            value="Отправить"
            class="input btn"
            @click="submit()"
          />
        </form>

        <address class="contacts base-font">
          <icon-base :iconColor="'#ff5b00'">
            <icon-phone />
          </icon-base>
          <span class="text"
            ><a :href="`tel:${PHONE}`">{{ PHONE }}</a
            ><br /><a :href="`tel:${PHONE1}`">{{ PHONE1 }}</a></span
          >
          <icon-base :iconColor="'#ff5b00'">
            <icon-mail />
          </icon-base>
          <span class="text">{{ email }}</span>
          <icon-base :iconColor="'#ff5b00'">
            <icon-location />
          </icon-base>
          <span class="text">{{ location }}</span>
        </address>
      </div>

      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85691.1183801365!2d35.20966283943174!3d47.84254863008602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5de14b237415%3A0xe7caf92c070da69e!2z0JXQstGA0L7Qt9Cw0LHQvtGAINCX0LDQv9C-0YDQvtC20YzQtS4g0JLQvtGA0L7RgtCwINC60LDQu9C40YLQutC4LiDQo9GB0YLQsNC90L7QstC60LAuINCU0L7RgdGC0LDQstC60LAu!5e0!3m2!1sru!2sua!4v1578224881507!5m2!1sru!2sua"
          frameborder="0"
          style="border:0; height:300px; width:100%"
          allowfullscreen
        ></iframe>
      </div>
    </app-section>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconMailVue from "~/components/icons/IconMail.vue";
import IconPhoneVue from "~/components/icons/IconPhone.vue";
import IconLocationVue from "~/components/icons/IconLocation.vue";
import { PHONE, EMAIL, PHONE1, DOMAIN, LOCATION } from "../../config";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";

export default {
  name: "contact",
  head() {
    return {
      title: "☏ " + this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords
        },

        // Open Graph
        { property: "og:title", content: this.title },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: this.DOMAIN + this.$route.path },
        {
          property: "og:image",
          content: DOMAIN + this.ogImage
        },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.title },
        {
          name: "twitter:description",
          content: this.description
        },
        {
          name: "twitter:image",
          content: DOMAIN + this.ogImage
        },
        {
          name: "twitter:image:alt",
          content: "Адрес производства еврозаборов в Запорожье"
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.path } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  },
  components: {
    "app-section": sectionVue,
    "icon-base": IconBaseVue,
    "icon-mail": IconMailVue,
    "icon-phone": IconPhoneVue,
    "icon-location": IconLocationVue
  },

  methods: {
    submit() {
      this.errors = [];
      this.checkForm() && this.$emailAPI.send(this.formData);
    },
    checkForm: function(e) {
      if (!this.formData.message) {
        this.errors.push("Введите Ваше сообщение.");
      }
      if (!this.formData.email) {
        this.errors.push("Укажите электронную почту.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный адрес электронной почты.");
      }

      if (!this.errors.length) {
        return true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },

  data() {
    return {
      errors: [],
      PHONE,
      PHONE1,
      email: EMAIL,
      location: LOCATION,
      formData: { name: "", email: "", phone: "", message: "" },
      title: "Контакты для заказа еврозаборов",
      description: "Наши контакты",
      keywords:
        "купить бетонный забор, еврозабор в запорожье цена, тротуарная плитка в запорожье цена, ворота и калитки",
      fetchedVars: "{}",
      ogImage,
      DOMAIN
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
}
.section {
  background-color: #fff;
  padding-top: 100px;
}
.heading {
  font-weight: bold;
  width: calc(100% - 32px);
  font-size: 22px;
  line-height: 1;
  display: inline-block;
  text-align: center;
  color: #fff;
  margin: 40px 16px 20px;
  padding: 12px 24px;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;

  &::before {
    background-color: var(--green);
  }

  @media (min-width: 600px) {
    font-size: 28px;
    line-height: 1;
    margin-bottom: 20px 16px 40px;
  }
}
.warn {
  color: red;
}
.contact {
  display: grid;
  grid-gap: 24px;
  align-items: center;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .input {
    min-height: 50px;
    border: none;
    border-radius: 4px;
    margin-top: 8px;
    padding: 8px 16px;
    border: 1px solid #aaa;
  }
  .area {
    min-height: 100px;
    resize: none;
  }
  .btn {
    cursor: pointer;
  }
  .contacts {
    display: grid;
    grid-template-columns: 12% 1fr;
    grid-gap: 10px;
  }
}

.map {
  margin-top: 40px;
}
</style>
