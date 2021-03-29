import { inject, injectable } from "tsyringe";

import { Product } from "@Modules/products/infra/typeorm/entities/Product";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";
import { AppError } from "@Shared/errors/AppError";

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
