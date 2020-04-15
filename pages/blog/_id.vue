﻿<template>
  <main>
    <article
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <h1 class="heading with-skewed-bg">{{blog.title}}</h1>
      <app-section class="section">

        <div class="box">
          <div class="slider-box">
            <div class="slider-imagebox">
              <img
                :src="BASE_URL + blog.image"
                :alt="blog.title"
                class="slider-image"
                itemprop="image"
              />
              <div
                @click="isZoomActive=true"
                class="icon-box"
              >
                <icon-base color='#fff'>
                  <icon-zoom></icon-zoom>
                </icon-base>
              </div>
            </div>
          </div>

          <div class="box-text">

            <span
              class="card-label base-font"
              itemprop="startDate"
              :content='blog.created_at'
            >
              <icon-base>
                <icon-calendar />
              </icon-base>
              <time
                :datetime="dateTime"
                itemprop="datePublished"
                :content='dateTime'
              >{{date}}</time>
            </span>

            <div itemprop="articleBody">
              <p class="intro-text base-font">
                {{ blog.body }}
              </p>
            </div>

            <nuxt-link
              to='/blog'
              class="link red small-font"
            >&rarr; Смотреть все новости</nuxt-link>

          </div>

          <div
            class="zoom"
            v-if="isZoomActive"
          >
            <div class="zoom-content">
              <app-close
                color='#fff'
                :width='40'
                :isMenuOpen='true'
                class="zoom-close"
                @click.native="isZoomActive=false"
              ></app-close>
              <img
                class="zoom-image"
                :src="BASE_URL + blog.image"
                :alt="blog.title"
              >

            </div>
          </div>
        </div>
      </app-section>
    </article>
  </main>
</template>

<script>
import IntroVue from "~/components/common/Intro.vue";
import sectionVue from "~/components/layout/section.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconCalendarVue from "~/components/icons/IconCalendar.vue";
import { BASE_URL } from "../../config";
import { getPost } from "../../api/posts";
import IconZoomVue from "../../components/icons/IconZoom.vue";
import MenuButtonVue from "../../components/common/MenuButton.vue";

export default {
  name: "BlogPage",
  data() {
    return {
      BASE_URL,
      blog: { created_at: "" },
      isZoomActive: false
    };
  },

  async asyncData({ params }) {
    const { id } = params;
    try {
      const {
        data: { data: blog }
      } = await getPost(id);
      console.log({ blog });

      return { blog };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  },
  components: {
    "icon-base": IconBaseVue,
    "icon-calendar": IconCalendarVue,
    "icon-zoom": IconZoomVue,
    "app-section": sectionVue,
    "app-close": MenuButtonVue
  },
  computed: {
    date() {
      return (
        this.blog.created_at &&
        this.blog.created_at
          .split(" ")[0]
          .split("-")
          .reverse()
          .join(".")
      );
    },
    dateTime() {
      const [dashedDate] = this.blog.created_at.split(" ");
      return dashedDate;
    }
  }
};
</script>

<style lang="scss" scoped>
  .heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin: 20px 16px -20px;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
    @media (min-width: 1024px) {
      margin: 20px 32px -20px;
    }
  }

  .card-label {
    display: inline-flex;
    align-items: center;
    background-color: var(--red);
    color: #fff;
    margin-bottom: 12px;

    // transform: translateY(-50%);
    padding: 10px;
    border-radius: 4px;
  }

  .intro-text,
  .card-label,
  .slider-box {
    margin-bottom: 12px;
  }

  .box {
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }

    .slider-box {
      width: 100%;
      @media (min-width: 768px) {
        width: 42%;
      }
    }

    .box-text {
      @media (min-width: 768px) {
        width: 55%;
      }
      .heading {
        color: var(--red);
      }
      .link {
        font-weight: bold;
      }
    }
  }

  .slider-imagebox {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.85);
    position: relative;
    overflow: hidden;
    padding-bottom: 67%;

    .icon-box {
      display: none;
      @media (min-width: 768px) {
        display: block;
        position: absolute;
        padding: 10px;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        right: 10px;
        bottom: 10px;
        cursor: pointer;
      }
    }
  }

  .slider-image {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);

    &.square {
      top: 0;
      left: 50%;
      width: unset;
      height: 100%;
      transform: translateX(-50%);
    }
  }

  .zoom {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 200;
    }

    &-close {
      position: fixed;
      top: 5%;
      right: 5%;
      z-index: 250;
    }

    &-arrows {
      position: fixed;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;

      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
      }
    }
    &-image {
      position: relative;
      width: 80%;
      max-width: 900px;
    }
  }
</style>