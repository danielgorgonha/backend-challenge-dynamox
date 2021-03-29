import { inject, injectable } from "tsyringe";

import { AppError } from "@Errors/AppError";
import { Product } from "@Modules/products/entities/Product";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

@injectable()
class ShowProductUseCase {
  constructor(
    @inject("ProdcutRepository")
    private prodcutRepository: IProductRepository
  ) {}

  async execute(id: string): Promise<Product> {
    const product = await this.prodcutRepository.findById(id);

    if (!product) {
      throw new AppError("Product does not exist");
    }

    return product;
  }
}

export { ShowProductUseCase };
