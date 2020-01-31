import httpClient from "./httpClient";

const END_POINT = "/categories";

const getAll = () => httpClient.get(END_POINT);

const getOne = id => httpClient.get(`${END_POINT}/${id}`);

export { getAll, getOne };
