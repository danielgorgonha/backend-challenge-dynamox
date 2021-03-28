import { Request, Response } from "express";
import { container } from "tsyringe";

import { StoreProductUseCase } from "./StoreProductUseCase";

class StoreProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    } = request.body;

    const storeProductUseCase = container.resolve(StoreProductUseCase);
    await storeProductUseCase.execute({
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    return response.status(201).send();
  }
}

export { StoreProductController };
