import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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

    const dataManufacturing = new Date(manufacturingDate);
    const dataExpiration = new Date(expirationDate);

    if (dataManufacturing >= dataExpiration) {
      throw new AppError("Data cannot be greater than final data");
    }

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
