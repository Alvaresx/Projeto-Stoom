export const getParsedItemLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};
