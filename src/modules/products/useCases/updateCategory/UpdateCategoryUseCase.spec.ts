import { CategoriesRepositoryInMemory } from "@Modules/products/repositories/in-memory/CategoriesRepositoryInMemory";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

let updateCategoryUseCase: UpdateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Update Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    updateCategoryUseCase = new UpdateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to update category", async () => {
    const categoryStore = await categoriesRepositoryInMemory.store({
      name: "Frios",
      description: "Categoria de Frios",
    });

    const categoryUpdate = await updateCategoryUseCase.execute({
      id: categoryStore.id,
      name: "Verduras",
      description: "Categoria de Verduras",
    });

    expect(categoryStore).toEqual(categoryUpdate);
  });
});
