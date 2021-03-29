import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";

interface IRequest {
  categoryId: string;
  name: string;
  manufacturingDate: Date;
  perishableProduct: boolean;
  expirationDate: Date;
  price: number;
}

class StoreProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IRequest): Promise<void> {
    this.productsRepository.store({
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
