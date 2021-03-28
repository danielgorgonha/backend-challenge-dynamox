import { ICreateProductDTO, IUpdateProductDTO } from "../dtos";
import { Product } from "../entities/Product";

interface IProductRepository {
  store({
    categoryId,
    name,
    manufacturingDate,
    perishableProduct,
    expirationDate,
    price,
  }: ICreateProductDTO): Promise<void>;
  list(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  updateById({
    id,
    name,
    categoryId,
    expirationDate,
    manufacturingDate,
    price,
    perishableProduct,
  }: IUpdateProductDTO): Promise<void>;
  findByName(name: string): Promise<Product>;
  findById(id: string): Promise<Product>;
}

export { IProductRepository };
