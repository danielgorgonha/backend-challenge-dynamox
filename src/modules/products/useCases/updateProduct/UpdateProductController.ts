import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      categoryId,
      expirationDate,
      manufacturingDate,
      price,
      perishableProduct,
    } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({
      id,
      name,
      categoryId,
      expirationDate,
      manufacturingDate,
      price,
      perishableProduct,
    });

    return response.send();
  }
}

export { UpdateProductController };
