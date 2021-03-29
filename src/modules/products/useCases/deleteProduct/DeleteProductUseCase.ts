import { inject, injectable } from "tsyringe";

import { IProductRepository } from "@Modules/products/repositories/IProductRepository";
import { AppError } from "@Shared/errors/AppError";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProdcutRepository")
    private prodcutRepository: IProductRepository
  ) {}

  async execute(id: string): Promise<void> {
    const productAlreadyExists = await this.prodcutRepository.findById(id);

    if (!productAlreadyExists) {
      throw new AppError("Product does not exists");
    }

    await this.prodcutRepository.delete(id);
  }
}

export { DeleteProductUseCase };
