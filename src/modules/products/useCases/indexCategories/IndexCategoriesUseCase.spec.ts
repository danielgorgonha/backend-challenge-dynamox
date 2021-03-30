import { CategoriesRepositoryInMemory } from "@Modules/products/repositories/in-memory/CategoriesRepositoryInMemory";

import { IndexCategoriesUseCase } from "./IndexCategoriesUseCase";

let indexCategoriesUseCase: IndexCategoriesUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("List Categories", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    indexCategoriesUseCase = new IndexCategoriesUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to list all categories", async () => {
    const category = await categoriesRepositoryInMemory.store({
      name: "Verduras",
      description: "Categoria de verduras",
    });

    const categories = await indexCategoriesUseCase.execute({});

    expect(categories).toEqual([category]);
  });

  it("Should be able to list all categories by id", async () => {
    const category = await categoriesRepositoryInMemory.store({
      name: "Carnes",
      description: "Categoria de Carnes",
    });

    const categories = await indexCategoriesUseCase.execute({
      id: category.id,
    });

    expect(categories).toEqual([category]);
  });

  it("Should be able to list all categories by name", async () => {
    const category = await categoriesRepositoryInMemory.store({
      name: "Legumes",
      description: "Categoria de Legumes",
    });

    const categories = await indexCategoriesUseCase.execute({
      name: "Legumes",
    });

    expect(categories).toEqual([category]);
  });
});
