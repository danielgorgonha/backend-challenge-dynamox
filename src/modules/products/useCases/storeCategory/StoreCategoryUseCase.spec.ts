import { AppError } from "@Errors/AppError";
import { CategoriesRepositoryInMemory } from "@Modules/products/repositories/in-memory/CategoriesRepositoryInMemory";

import { StoreCategoryUseCase } from "./StoreCategoryUseCase";

let storeCategoryUseCase: StoreCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    storeCategoryUseCase = new StoreCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };
    await storeCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };

      await storeCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await storeCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
