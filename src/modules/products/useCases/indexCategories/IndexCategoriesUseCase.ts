import { inject, injectable } from "tsyringe";

import { Category } from "@Modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

interface IRequest {
  id?: string;
  name?: string;
}

@injectable()
class IndexCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ id, name }: IRequest): Promise<Category[]> {
    const categories = this.categoriesRepository.findAll(id, name);
    return categories;
  }
}

export { IndexCategoriesUseCase };
