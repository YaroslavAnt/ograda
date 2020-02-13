<template>
  <main>
    <h1>Контакты для заказа еврозаборов</h1>
    <app-section
      :heading="'Контакты'"
      class="section"
    >
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
          <ul v-if="errors.length>0" class="warn">
          <li v-for="(err,idx) in errors" :key="idx">{{err}}</li>
        </ul>
        <input type="button" value="Отправить" class="input btn" @click="submit()" />
      </form>

      <address class="contacts">
        <div class="contacts-item base-font">
          <icon-base :iconColor="'#ff5b00'">
            <icon-phone />
          </icon-base>
          <span class="text">{{phone}}</span>
        </div>
        <div class="contacts-item base-font">
          <icon-base :iconColor="'#ff5b00'">
            <icon-mail />
          </icon-base>
          <span class="text">{{email}}</span>
        </div>
        <div class="contacts-item base-font">
          <icon-base :iconColor="'#ff5b00'">
            <icon-location />
          </icon-base>
          <span class="text">{{location}}</span>
        </div>
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
  </app-section></main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconMailVue from "~/components/icons/IconMail.vue";
import IconPhoneVue from "~/components/icons/IconPhone.vue";
import IconLocationVue from "~/components/icons/IconLocation.vue";
import { contact } from "~/static/content_data";
import { postEmail } from "../../api/email";
import { PHONE, EMAIL } from "../../config";
export default {
  name: "contact",
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Адрес производства еврозаборов в Запорожье, контакты производителя еврозаборов, телефоны производства заборов"
        },
        { name: "og:title", content: this.title },
        { name: "og:description", content: this.description },
        { name: "og:type", content: "website" },
        { name: "og:url", content: this.$route.path },
        { name: "og:image", content: "https://nuxtjs.org/meta_640.png" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: "https://nuxtjs.org/meta_640.png" },
        {
          name: "twitter:image:alt",
          content: "Адрес производства еврозаборов в Запорожье"
        }
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
      this.checkForm() && postEmail(this.formData);
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
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },
  data() {
    return {
      errors: [],
      phone: PHONE,
      email: EMAIL,
      location: contact.location,
      formData: { name: "", email: "", phone: "", message: "" },
      titile: "Контакты для заказа еврозаборов",
      description: "Наши контакты"
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;
  }
  h1 {
    position: absolute;
    left: -500px;
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
      &-item {
        min-height: 50px;
        display: flex;
        align-items: center;
      }
    }
  }

  .map {
    margin-top: 40px;
  }
</style>