import { inject, injectable } from "tsyringe";

import { AppError } from "@Errors/AppError";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

interface IRequest {
  id: string;
  name?: string;
  description?: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ id, name, description }: IRequest): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError("Category does not exist");
    }

    const updateCategory = {
      id,
      name,
      description,
    };

    await this.categoriesRepository.updateById(updateCategory);
  }
}

export { UpdateCategoryUseCase };
