import { IStoreProductDTO } from "@Modules/products/dtos";
import { Product } from "@Modules/products/infra/typeorm/entities/Product";

import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async store({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IStoreProductDTO): Promise<void> {
    const product = new Product();

    Object.assign(product, {
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    this.products.push(product);
  }
}

export { ProductsRepositoryInMemory };
