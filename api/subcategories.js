import httpClient from "./httpClient";

const END_POINT = "/subcategories";

const getAll = () => httpClient.get(END_POINT);

const getOne = id => httpClient.get(`${END_POINT}/${id}`);

const getByCategory = categoryId =>
  httpClient.get(`${END_POINT}/category/${categoryId}`);

export { getAll, getOne, getByCategory };
