import createProductsAPI from "~/api/products";
import createSlidesAPI from "~/api/slides";
import createPostsAPI from "~/api/posts";
import createEmailAPI from "~/api/email";
import createCategoriesAPI from "~/api/categories";
import createSubcategoriesAPI from "~/api/subcategories";

export default ({ $axios, store }, inject) => {
  $axios.onError(err => {
    console.log({ err });
  });

  // $axios.onRequest(config => {
  //   console.log("req");
  // });

  // const repositoryWithAxios = createServicesAPI(ctx.$axios);
  inject("productsAPI", createProductsAPI($axios));
  inject("slidesAPI", createSlidesAPI($axios));
  inject("postsAPI", createPostsAPI($axios));
  inject("emailAPI", createEmailAPI($axios));
  inject("categoriesAPI", createCategoriesAPI($axios));
  inject("subcategoriesAPI", createSubcategoriesAPI($axios));
};
