<template>
  <main>
    <h1 class="heading  with-skewed-bg">Категории товаров</h1>
    <ul class="categories">

      <li
        v-for="category in categories"
        :key='category.id'
      >
        <nuxt-link :to='`/products/${replaceWithDash(category.name) }`'>
          <article class="category-box">
            <h2 class="category big-font">{{category.name}}</h2>
            <ul>
              <li
                v-for="subcategory in category.subcategories"
                :key='subcategory.id'
              >
                <h3 class="subcategory">{{subcategory.name}}</h3>
              </li>
            </ul>
          </article>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { replaceWithDash } from "../../static/utils";
export default {
  name: "products",
  computed: {
    ...mapGetters({
      categories: "categories/getAllCategories"
    })
  },
  methods: {
    replaceWithDash
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
    padding: 85px 20px 20px;
  }
  .heading {
    position: relative;
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin: 20px 0px;
    padding: 12px 24px;
    z-index: 5;
    display: flex;
    justify-content: center;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
  }
  .categories {
    display: grid;
    grid-gap: 24px;
  }
  .category-box {
    cursor: pointer;
    border-radius: 4px;
    padding: 12px;
    border: 1px solid #dadada;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.45);
  }

  .category {
    color: var(--red);
  }
</style>