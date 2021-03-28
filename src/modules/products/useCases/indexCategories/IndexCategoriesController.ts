import { Request, Response } from "express";
import { container } from "tsyringe";

import { IndexCategoriesUseCase } from "./IndexCategoriesUseCase";

class IndexCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const indexCategoriesUseCase = container.resolve(IndexCategoriesUseCase);

    const all = await indexCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { IndexCategoriesController };
