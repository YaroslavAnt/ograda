import httpClient from "./httpClient";

const END_POINT = "/posts";

const getAllPosts = () => httpClient.get(END_POINT);

const getPostsByPage = page => httpClient.get(`${END_POINT}?page=${page}`);

export { getAllPosts, getPostsByPage };
