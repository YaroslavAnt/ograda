import httpClient from "./httpClient";

const END_POINT = "/posts";

const getAllPosts = () => httpClient.get(END_POINT);

export { getAllPosts };
