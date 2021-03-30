import { inject, injectable } from "tsyringe";

import { Product } from "@Modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";
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
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IRequest): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists!");
    }

    if (new Date(manufacturingDate) >= new Date(expirationDate)) {
      throw new AppError(
        "Manufacturing date cannot be greater than expiration date!"
      );
    }

    const product = await this.productsRepository.store({
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    return product;
  }
}

export { StoreProductUseCase };
