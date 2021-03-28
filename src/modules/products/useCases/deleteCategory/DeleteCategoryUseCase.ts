import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findById(id);

    if (!categoryAlreadyExists) {
      throw new AppError("Category does not exist");
    }

    await this.categoriesRepository.delete(id);
  }
}

export { DeleteCategoryUseCase };
