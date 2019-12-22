export const getSetOfObjItems = (arr, objItem) => {
  return Array.from(new Set(arr.map(el => el[objItem])));
};
