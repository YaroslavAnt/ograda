import httpClient from "./httpClient";

const END_POINT = "/variable";

const getAllVars = () => httpClient.get(END_POINT);

const getVarsByPage = page => httpClient.get(END_POINT + `${page}`);

export { getAllVars, getVarsByPage };
