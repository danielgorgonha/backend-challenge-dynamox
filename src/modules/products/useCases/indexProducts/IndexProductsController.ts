import { Request, Response } from "express";
import { container } from "tsyringe";

import { IndexProductsUseCase } from "./IndexProductsUseCase";

class IndexProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { categoryId, name } = request.query;

    const indexProductsUseCase = container.resolve(IndexProductsUseCase);

    const products = await indexProductsUseCase.execute({
      categoryId: categoryId as string,
      name: name as string,
    });

    return response.json(products);
  }
}

export { IndexProductsController };
