export const currencyFormatter = (currency: number) => {
  return currency.toLocaleString("pt-br", {
    currency: "BRL",
    style: "currency",
  });
};
