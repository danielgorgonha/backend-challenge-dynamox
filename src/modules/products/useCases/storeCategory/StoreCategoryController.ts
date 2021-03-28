import { Request, Response } from "express";
import { container } from "tsyringe";

import { StoreCategoryUseCase } from "./StoreCategoryUseCase";

class StoreCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const storeCategoryUseCase = container.resolve(StoreCategoryUseCase);
    await storeCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { StoreCategoryController };
