import { inject, injectable } from "tsyringe";

import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRespository: ICategoriesRepository
  ) {}

  async execute({ id, name, description }: IRequest): Promise<Category> {
    const category = await this.categoriesRespository.updateById(
      id,
      name,
      description
    );

    return category;
  }
}

export { UpdateCategoryUseCase };
