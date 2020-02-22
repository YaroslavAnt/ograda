import httpClient from "./httpClient";

const END_POINT = "/products";

const getAllProducts = () => httpClient.get(END_POINT);

const getProduct = id => httpClient.get(`${END_POINT}/${id}`);

const getProductByCategory = category_id =>
  httpClient.get(`${END_POINT}/search/query?category_id=${category_id}`);

const getProductBySubcategory = subcategory_id =>
  httpClient.get(`${END_POINT}/search/query?subcategory_id=${subcategory_id}`);

const getProductsByPage = page => httpClient.get(`${END_POINT}?page=${page}`);

const getSpecialProducts = () => httpClient.get(`/products-stock`);

const getPopularProducts = () => httpClient.get(`/products-popular`);

const getPrices = () => httpClient.get("/products-prices");

const getExhibitions = () => httpClient.get("/exhibition");

export {
  getAllProducts,
  getProduct,
  getProductByCategory,
  getProductBySubcategory,
  getProductsByPage,
  getSpecialProducts,
  getPopularProducts,
  getPrices,
  getExhibitions
};
