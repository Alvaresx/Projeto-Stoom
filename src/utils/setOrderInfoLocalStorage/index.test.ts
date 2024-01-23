import { getParsedItemLocalStorage } from "../getParsedItemLocalStorage";
import { setOrderInfoLocalStorage } from ".";

jest.mock("../getParsedItemLocalStorage", () => ({
  ...jest.requireActual("../getParsedItemLocalStorage"),
  getParsedItemLocalStorage: jest.fn(),
}));

beforeEach(() => {
  const localStorageMock: Record<string, jest.Mock> = {
    setItem: jest.fn(),
  };
  global.localStorage = localStorageMock as Storage;
});

it("should setOrderInfoLocalStorage sets order info correctly", () => {
  const key = "orderKey";
  const property = "dough";
  const value = "fina";

  (getParsedItemLocalStorage as jest.Mock).mockReturnValueOnce({});

  setOrderInfoLocalStorage(key, property, value);

  expect(getParsedItemLocalStorage).toHaveBeenCalledWith(key);

  expect(global.localStorage.setItem).toHaveBeenCalledWith(
    key,
    JSON.stringify({ [property]: value })
  );
});

it("should setOrderInfoLocalStorage updates existing order info correctly", () => {
  const key = "orderKey";
  const property = "dough";
  const value = "grossa";

  (getParsedItemLocalStorage as jest.Mock).mockReturnValueOnce({
    [property]: "fina",
  });

  setOrderInfoLocalStorage(key, property, value);

  expect(getParsedItemLocalStorage).toHaveBeenCalledWith(key);

  expect(global.localStorage.setItem).toHaveBeenCalledWith(
    key,
    JSON.stringify({ [property]: value })
  );
});
