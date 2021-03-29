import { inject, injectable } from "tsyringe";

import { AppError } from "@Errors/AppError";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

interface IRequest {
  id: string;
  name: string;
  categoryId: string;
  expirationDate: Date;
  manufacturingDate: Date;
  price: number;
  perishableProduct: boolean;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({
    id,
    name,
    categoryId,
    expirationDate,
    manufacturingDate,
    price,
    perishableProduct,
  }: IRequest): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Product does not exist");
    }

    const updateProduct = {
      id,
      name,
      categoryId,
      expirationDate,
      manufacturingDate,
      price,
      perishableProduct,
    };

    await this.productRepository.updateById(updateProduct);
  }
}

export { UpdateProductUseCase };
