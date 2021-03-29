import { inject, injectable } from "tsyringe";

import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

@injectable()
class IndexCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { IndexCategoriesUseCase };
