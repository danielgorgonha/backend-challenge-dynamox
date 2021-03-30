import { CategoriesRepositoryInMemory } from "@Modules/products/repositories/in-memory/CategoriesRepositoryInMemory";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

let deleteCategoryUseCase: DeleteCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Delete Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    deleteCategoryUseCase = new DeleteCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to delete a category", async () => {
    const category = await categoriesRepositoryInMemory.store({
      name: "Verduras",
      description: "Categoria da Verdura",
    });

    const remove = await deleteCategoryUseCase.execute({ id: category.id });

    expect(remove).toEqual(undefined);
  });
});
