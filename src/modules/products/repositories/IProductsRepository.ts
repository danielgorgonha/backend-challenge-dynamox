import { IStoreProductDTO } from "../dtos";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  store(data: IStoreProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
}

export { IProductsRepository };
