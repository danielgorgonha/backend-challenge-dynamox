import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowProductUseCase } from "./ShowProductUseCase";

class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProductUseCase = container.resolve(ShowProductUseCase);

    const product = await showProductUseCase.execute(id);

    return response.json(product);
  }
}

export { ShowProductController };
