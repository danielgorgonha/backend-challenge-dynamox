import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO, IUpdateProductDTO } from "@Modules/products/dtos";
import { Product } from "@Modules/products/infra/typeorm/entities/Product";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

class ProductRepository implements IProductRepository {
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
  }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    await this.repository.save(product);
  }

  async findByName(name: string): Promise<Product> {
    const products = await this.repository.findOne({ name });
    return products;
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);
    return product;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  updateById({
    id,
    name,
    categoryId,
    expirationDate,
    manufacturingDate,
    price,
    perishableProduct,
  }: IUpdateProductDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { ProductRepository };
