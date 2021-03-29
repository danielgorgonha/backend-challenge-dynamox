import { inject, injectable } from "tsyringe";

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

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }

    this.categoriesRepository.store({ name, description });
  }
}

export { StoreCategoryUseCase };
