import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowCategoryUseCase } from "./ShowCategoryUseCase";

class ShowCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCategoryUseCase = container.resolve(ShowCategoryUseCase);

    const category = await showCategoryUseCase.execute(id);

    return response.json(category);
  }
}

export { ShowCategoryController };
