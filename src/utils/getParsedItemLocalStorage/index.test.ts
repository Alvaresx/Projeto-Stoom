import { getParsedItemLocalStorage } from ".";

beforeEach(() => {
  const localStorageMock: Record<string, jest.Mock> = {
    getItem: jest.fn(),
  };
  global.localStorage = localStorageMock as Storage;
});

it("should getParsedItemLocalStorage parses JSON correctly", () => {
  const key = "exampleKey";
  const item = { value: "exampleValue" };

  (global.localStorage.getItem as jest.Mock).mockReturnValueOnce(
    JSON.stringify(item)
  );

  const result = getParsedItemLocalStorage(key);

  expect(global.localStorage.getItem).toHaveBeenCalledWith(key);
  expect(result).toEqual(item);
});

it("should getParsedItemLocalStorage returns null for non-existing key", () => {
  const key = "nonExistingKey";

  (global.localStorage.getItem as jest.Mock).mockReturnValueOnce(null);

  const result = getParsedItemLocalStorage(key);

  expect(global.localStorage.getItem).toHaveBeenCalledWith(key);
  expect(result).toBeNull();
});
