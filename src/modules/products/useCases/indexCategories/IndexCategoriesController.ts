import { Request, Response } from "express";
import { container } from "tsyringe";

import { IndexCategoriesUseCase } from "./IndexCategoriesUseCase";

class IndexCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.query;

    const indexCategoriesUseCase = container.resolve(IndexCategoriesUseCase);

    const categories = await indexCategoriesUseCase.execute({
      id: id as string,
      name: name as string,
    });

    return response.json(categories);
  }
}

export { IndexCategoriesController };
