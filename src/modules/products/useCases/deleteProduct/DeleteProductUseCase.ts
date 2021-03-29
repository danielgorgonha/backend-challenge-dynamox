import { inject, injectable } from "tsyringe";

import { AppError } from "@Errors/AppError";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

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
