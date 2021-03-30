import { inject, injectable } from "tsyringe";

import { Product } from "@Modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";

interface IRequest {
  categoryId?: string;
  name?: string;
}

@injectable()
class IndexProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({ categoryId, name }: IRequest): Promise<Product[]> {
    const products = await this.productsRepository.findAll(categoryId, name);
    return products;
  }
}

export { IndexProductsUseCase };
