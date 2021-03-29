import { inject, injectable } from "tsyringe";

import { AppError } from "@Errors/AppError";
import { Category } from "@Modules/products/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

@injectable()
class ShowCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(id: string): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError("Category does not exist");
    }

    return category;
  }
}

export { ShowCategoryUseCase };
