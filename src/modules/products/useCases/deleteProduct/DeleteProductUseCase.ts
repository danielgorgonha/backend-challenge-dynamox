import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";

interface IRequest {
  id: string;
}

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    await this.productsRepository.removeById(id);
  }
}

export { DeleteProductUseCase };
