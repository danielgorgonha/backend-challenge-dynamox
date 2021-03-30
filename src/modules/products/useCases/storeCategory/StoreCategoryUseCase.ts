import { inject, injectable } from "tsyringe";

import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";
import { AppError } from "@Shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class StoreCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    const category = await this.categoriesRepository.store({
      name,
      description,
    });

    return category;
  }
}

export { StoreCategoryUseCase };
