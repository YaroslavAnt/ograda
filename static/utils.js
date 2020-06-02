// export const getSetOfObjItems = (arr, objItem) => {
//   return Array.from(new Set(arr.map(el => el[objItem])));
// };
export const replaceWithDash = string => {
  return String(string)
    .replace(/\s/g, "-")
    .replace(/\"|\'/g, "")
    .toLowerCase();
};
export const replaceWithSpace = string => {
  return String(string).replace(/-/g, " ");
  // .toLowerCase();
};
// export const getTranslit = string => {
//   const [cyrylic, latin] = string.split("#");
//   return latin || cyrylic;
// };
// export const getCyrylic = string => {
//   const [cyrylic] = string.split("#");
//   return cyrylic;
// };
