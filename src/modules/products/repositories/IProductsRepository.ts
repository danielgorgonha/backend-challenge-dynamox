import { IStoreProductDTO } from "../dtos";

interface IProductsRepository {
  store(data: IStoreProductDTO): Promise<void>;
}

export { IProductsRepository };
