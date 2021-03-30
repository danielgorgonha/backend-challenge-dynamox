import { inject, injectable } from "tsyringe";

import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";
import { AppError } from "@Shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ id, name, description }: IRequest): Promise<Category> {
    if (!name) {
      throw new AppError("Name is requerid!");
    }

    if (!description) {
      throw new AppError("description is requerid!");
    }

    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("A category already exists with that name!");
    }

    const category = await this.categoriesRepository.updateById(
      id,
      name,
      description
    );

    return category;
  }
}

export { UpdateCategoryUseCase };
