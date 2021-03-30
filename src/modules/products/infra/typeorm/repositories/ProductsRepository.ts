import { getRepository, Repository } from "typeorm";

import { IStoreProductDTO } from "@Modules/products/dtos";
import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";

import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async store({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: IStoreProductDTO): Promise<Product> {
    const product = this.repository.create({
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    await this.repository.save(product);

    return product;
  }
  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({ name });
    return product;
  }

  async findAll(categoryId?: string, name?: string): Promise<Product[]> {
    const productsQuery = this.repository.createQueryBuilder("p");

    if (categoryId) {
      productsQuery.andWhere("p.categoryId = :categoryId", { categoryId });
    }

    if (name) {
      productsQuery.andWhere("p.name = :name", { name });
    }

    const products = await productsQuery.getMany();

    return products;
  }
}

export { ProductsRepository };
