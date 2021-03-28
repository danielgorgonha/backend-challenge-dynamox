import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO } from "../../dtos";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../IProductRepository";

class ProdcutRepository implements IProductRepository {
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
}

export { ProdcutRepository };
