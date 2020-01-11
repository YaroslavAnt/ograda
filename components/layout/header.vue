<template>
  <header class="header">
    <div class="header-padding header-location">
      <icon-base :iconColor="'#ff5b00'" :width="18" :height="18">
        <icon-location />
      </icon-base>
      <span>{{location}}</span>
    </div>

    <div class="header-padding base-font header-logo">
      <logo />
      <div class="contact">
        <div class="contact-item">
          <icon-base :iconColor="'#ff5b00'">
            <icon-phone />
          </icon-base>
          <span class="text">{{phone}}</span>
        </div>

        <div class="contact-item">
          <icon-base :iconColor="'#ff5b00'">
            <icon-mail />
          </icon-base>
          <span class="text">{{email}}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    color: var(--dark);
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    font-weight: 500;
    height: 105px;

    &-location {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: var(--dark);
      color: var(--white);
      height: 35px;
    }
    &-logo {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .logo-text {
    font-family: "Pacifico", cursive;
  }

  .contact {
    display: flex;
    align-items: center;

    &-item {
      display: flex;
      align-items: center;
      margin-right: 24px;
    }

    svg {
      margin-right: 12px;
      path {
        fill: var(--orange);
      }
    }
  }
</style>

<script>
import LogoVue from "../common/Logo.vue";
import IconBaseVue from "../common/IconBase.vue";
import IconMailVue from "../icons/IconMail.vue";
import IconPhoneVue from "../icons/IconPhone.vue";
import IconLocationVue from "../icons/IconLocation.vue";
import { contact } from "~/static/content_data";

export default {
  name: "header.vue",
  components: {
    logo: LogoVue,
    "icon-base": IconBaseVue,
    "icon-mail": IconMailVue,
    "icon-phone": IconPhoneVue,
    "icon-location": IconLocationVue
  },
  props: ["current_page"],
  data() {
    return {
      phone: contact.phone,
      email: contact.email,
      location: contact.location
    };
  }
};
</script>