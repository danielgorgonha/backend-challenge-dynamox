import { ProductsRepositoryInMemory } from "@Modules/products/repositories/in-memory/ProductsRepositoryInMemory";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

let deleteProductUseCase: DeleteProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Delete Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    deleteProductUseCase = new DeleteProductUseCase(productsRepositoryInMemory);
  });

  it("Should be able to delete a product", async () => {
    const product = await productsRepositoryInMemory.store({
      categoryId: "CategoryId",
      name: "Alface",
      manufacturingDate: new Date("2021-03-29"),
      perishableProduct: true,
      expirationDate: new Date("2021-04-29"),
      price: 2.48,
    });

    const remove = await deleteProductUseCase.execute({ id: product.id });

    expect(remove).toEqual(undefined);
  });
});
