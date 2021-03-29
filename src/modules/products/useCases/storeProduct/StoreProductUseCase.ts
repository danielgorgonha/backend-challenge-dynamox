import { inject, injectable } from "tsyringe";

import { IProductRepository } from "@Modules/products/repositories/IProductRepository";
import { AppError } from "@Shared/errors/AppError";

interface IRequest {
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}

@injectable()
class StoreProductUseCase {
  constructor(
    @inject("ProdcutRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IRequest): Promise<void> {
    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    }

    this.productRepository.store({
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });
  }
}

export { StoreProductUseCase };
