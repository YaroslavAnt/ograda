const END_POINT = "admin/send-email";

export default $axios => ({
  send({ message, email }) {
    return $axios.$post(`${END_POINT}`, { message, email });
  }
});
