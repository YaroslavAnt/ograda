﻿import httpClient from "./httpClient";

const END_POINT = "/products";

const getAllProducts = () => httpClient.get(END_POINT);

const getProduct = id => httpClient.get(`${END_POINT}/${id}`);

const getProductByCategory = category_id =>
  httpClient.get(`${END_POINT}/search/query?category_id=${category_id}`);

export { getAllProducts, getProduct, getProductByCategory };