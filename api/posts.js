import httpClient from "./httpClient";

const END_POINT = "/posts";

const getAllPosts = () => httpClient.get(END_POINT);

const getPost = id => httpClient.get(`${END_POINT}/${id}`);

const getPostsByPage = (page = 1) =>
  httpClient.get(`${END_POINT}?page=${page}`);

export { getAllPosts, getPostsByPage, getPost };
