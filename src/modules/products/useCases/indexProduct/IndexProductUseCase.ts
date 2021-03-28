import { inject, injectable } from "tsyringe";

import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

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
