<template>
  <app-section :heading="'Контакты'" class="section">
    <div class="contact">
      <form class="form">
        <p class="medium-font">Напишите нам</p>
        <input type="text" placeholder="Имя" class="input" />
        <input type="email" name="email" id="email" placeholder="Эл.почта" class="input" />
        <input type="tel" name="phone" id="phone" placeholder="Телефон" class="input" />
        <textarea class="input area" placeholder="Сообщение" />
        <input type="button" value="Отправить" class="input btn" />
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
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconMailVue from "~/components/icons/IconMail.vue";
import IconPhoneVue from "~/components/icons/IconPhone.vue";
import IconLocationVue from "~/components/icons/IconLocation.vue";
import { contact_data } from "~/static/contact_data";
export default {
  name: "contact",
  components: {
    "app-section": sectionVue,
    "icon-base": IconBaseVue,
    "icon-mail": IconMailVue,
    "icon-phone": IconPhoneVue,
    "icon-location": IconLocationVue
  },
  data() {
    return {
      phone: contact_data.phone,
      email: contact_data.email,
      location: contact_data.location
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;
  }
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;

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