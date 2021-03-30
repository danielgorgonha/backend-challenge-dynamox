import { ProductsRepositoryInMemory } from "@Modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { AppError } from "@Shared/errors/AppError";

import { StoreProductUseCase } from "./StoreProductUseCase";

let storeProductUseCase: StoreProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Create Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    storeProductUseCase = new StoreProductUseCase(productsRepositoryInMemory);
  });

  it("Should be able to create a new product", async () => {
    await storeProductUseCase.execute({
      categoryId: "Category",
      name: "Product Name",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: false,
      expirationDate: new Date("2022-12-31"),
      price: 50,
    });
  });

  it("Should not be able to create a product with name", () => {
    expect(async () => {
      await storeProductUseCase.execute({
        categoryId: "Category",
        name: "Product1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: false,
        expirationDate: new Date("2022-12-31"),
        price: 50,
      });

      await storeProductUseCase.execute({
        categoryId: "Category",
        name: "Product1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: false,
        expirationDate: new Date("2022-12-31"),
        price: 50,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be possible to register a new product with a manufacturing date greater than the expiration date", () => {
    expect(async () => {
      await storeProductUseCase.execute({
        categoryId: "Category",
        name: "Product1",
        manufacturingDate: new Date("2021-03-29"),
        perishableProduct: false,
        expirationDate: new Date("2021-03-29"),
        price: 50,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
