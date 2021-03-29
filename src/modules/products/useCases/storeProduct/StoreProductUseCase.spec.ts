import { ProductsRepositoryInMemory } from "@Modules/products/repositories/in-memory/ProductsRepositoryInMemory";

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
});
