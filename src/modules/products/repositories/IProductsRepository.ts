import { IStoreProductDTO } from "../dtos";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  store(data: IStoreProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
  findAll(categoryId?: string, name?: string): Promise<Product[]>;
  updateById(
    id: string,
    categoryId: string,
    name: string,
    manufacturingDate: Date,
    perishableProduct: boolean,
    expirationDate: Date,
    price: number
  ): Promise<Product>;
  removeById(id: string): Promise<void>;
}

export { IProductsRepository };
