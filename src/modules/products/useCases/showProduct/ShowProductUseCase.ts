import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

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
