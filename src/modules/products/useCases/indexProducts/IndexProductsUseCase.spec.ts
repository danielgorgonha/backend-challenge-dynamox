import { ProductsRepositoryInMemory } from "@Modules/products/repositories/in-memory/ProductsRepositoryInMemory";

import { IndexProductsUseCase } from "./IndexProductsUseCase";

let indexProductsUseCase: IndexProductsUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("List Products", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    indexProductsUseCase = new IndexProductsUseCase(productsRepositoryInMemory);
  });

  it("Should be able to list all products", async () => {
    const product = await productsRepositoryInMemory.store({
      categoryId: "categoryId1",
      name: "Alimento1",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.45,
    });

    const products = await indexProductsUseCase.execute({});

    expect(products).toEqual([product]);
  });

  it("Should be able to list all products by name", async () => {
    const product = await productsRepositoryInMemory.store({
      categoryId: "categoryId2",
      name: "Alimento2",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.45,
    });

    const products = await indexProductsUseCase.execute({
      name: "Alimento2",
    });

    expect(products).toEqual([product]);
  });

  it("Should be able to list all products by categoryId", async () => {
    const product = await productsRepositoryInMemory.store({
      categoryId: "categoryId3",
      name: "Alimento3",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.45,
    });

    const products = await indexProductsUseCase.execute({
      categoryId: "categoryId3",
    });

    expect(products).toEqual([product]);
  });
});
