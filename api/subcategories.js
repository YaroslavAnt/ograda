import httpClient from "./httpClient";

const END_POINT = "/subcategories";

const getAll = () => httpClient.get(END_POINT);

const getOne = id => httpClient.get(`${END_POINT}/${id}`);

const getOneByCategory = categoryId =>
  httpClient.get(`${END_POINT}/category/${categoryId}`);

export { getAll, getOne, getOneByCategory };
