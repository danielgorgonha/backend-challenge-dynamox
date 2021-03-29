import { inject, injectable } from "tsyringe";

import { Product } from "@Modules/products/entities/Product";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

@injectable()
class IndexProductUseCase {
  constructor(
    @inject("ProdcutRepository")
    private prodcutRepository: IProductRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = this.prodcutRepository.list();

    return products;
  }
}

export { IndexProductUseCase };
