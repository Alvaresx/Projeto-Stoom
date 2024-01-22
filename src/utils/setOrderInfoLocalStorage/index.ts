import { getParsedItemLocalStorage } from "../getParsedItemLocalStorage";

export const setOrderInfoLocalStorage = (
  key: string,
  property: string,
  value: string | number
) => {
  const orderInfo = getParsedItemLocalStorage(key);
  const newInfo = {
    ...orderInfo,
    [property]: value,
  };
  localStorage.setItem(key, JSON.stringify(newInfo));
};
