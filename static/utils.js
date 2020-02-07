export const getSetOfObjItems = (arr, objItem) => {
  return Array.from(new Set(arr.map(el => el[objItem])));
};
export const replaceWithDash = string => {
  return String(string).replace(/\s/g, "-");
};
export const replaceWithSpace = string => {
  return String(string).replace(/-/g, " ");
};
