import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    await this.categoriesRepository.removeById(id);
  }
}

export { DeleteCategoryUseCase };
