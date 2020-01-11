import httpClient from "./httpClient";

const END_POINT = "admin/send-email";

const postEmail = ({ message, email }) =>
  httpClient.post(END_POINT, { message, email });

export { postEmail };
