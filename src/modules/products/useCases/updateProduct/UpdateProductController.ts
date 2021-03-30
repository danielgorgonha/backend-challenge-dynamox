import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);
    const product = await updateProductUseCase.execute({
      id,
      categoryId,
      name,
      manufacturingDate,
      perishableProduct,
      expirationDate,
      price,
    });

    return response.status(200).json(product);
  }
}

export { UpdateProductController };
