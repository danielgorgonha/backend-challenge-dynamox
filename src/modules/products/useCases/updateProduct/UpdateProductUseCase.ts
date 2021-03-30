import { inject, injectable } from "tsyringe";

import { Product } from "@Modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";
import { AppError } from "@Shared/errors/AppError";

interface IRequest {
  id: string;
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    id,
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IRequest): Promise<Product> {
    if (!categoryId) {
      throw new AppError("categoryId is requerid!");
    }

    if (!name) {
      throw new AppError("name is requerid!");
    }

    if (!manufacturingDate) {
      throw new AppError("manufacturingDate is requerid!");
    }

    if (!perishableProduct) {
      throw new AppError("perishableProduct is requerid!");
    }

    if (!expirationDate) {
      throw new AppError("expirationDate is requerid!");
    }

    if (!price) {
      throw new AppError("price is requerid!");
    }

    if (new Date(manufacturingDate) >= new Date(expirationDate)) {
      throw new AppError(
        "Manufacturing date cannot be greater than expiration date!"
      );
    }

    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("A product already exists with that name!");
    }

    const product = await this.productsRepository.updateById(
      id,
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price
    );

    return product;
  }
}

export { UpdateProductUseCase };
