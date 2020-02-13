import httpClient from "./httpClient";

const END_POINT = "/products";

const getAllProducts = () => httpClient.get(END_POINT);

const getProduct = id => httpClient.get(`${END_POINT}/${id}`);

const getProductByCategory = category_id =>
  httpClient.get(`${END_POINT}/search/query?category_id=${category_id}`);

const getProductBySubcategory = subcategory_id =>
  httpClient.get(`${END_POINT}/search/query?subcategory_id=${subcategory_id}`);

const getSpecialProducts = () => httpClient.get(`/products-stock`);
export {
  getAllProducts,
  getProduct,
  getProductByCategory,
  getProductBySubcategory,
  getSpecialProducts
};
