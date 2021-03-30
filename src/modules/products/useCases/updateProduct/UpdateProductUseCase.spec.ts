import { ProductsRepositoryInMemory } from "@Modules/products/repositories/in-memory/ProductsRepositoryInMemory";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

let updateProductUseCase: UpdateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Update Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory);
  });

  it("Should be able to update a product", async () => {
    const productStore = await productsRepositoryInMemory.store({
      categoryId: "CategoryId",
      name: "Alface",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.48,
    });

    const productUpdate = await updateProductUseCase.execute({
      id: productStore.id,
      categoryId: "CategoryId",
      name: "Repolho",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.48,
    });

    expect(productStore).toEqual(productUpdate);
  });
});
