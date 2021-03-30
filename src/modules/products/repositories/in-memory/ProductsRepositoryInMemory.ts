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
  }: IStoreProductDTO): Promise<Product> {
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

    return product;
  }

  async findByName(name: string): Promise<Product> {
    return this.products.find((product) => product.name === name);
  }

  async findAll(categoryId?: string, name?: string): Promise<Product[]> {
    this.products.filter(
      (product) =>
        (categoryId && product.categoryId === categoryId) ||
        (name && product.name === name)
    );
    return this.products;
  }
}

export { ProductsRepositoryInMemory };
