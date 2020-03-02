import httpClient from "./httpClient";

const END_POINT = "/sliders";

const getAllSlides = () => httpClient.get(END_POINT);

export { getAllSlides };
