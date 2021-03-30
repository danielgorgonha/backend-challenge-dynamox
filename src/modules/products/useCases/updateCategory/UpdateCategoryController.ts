import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@Shared/errors/AppError";

import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    if (!name) {
      throw new AppError("Name is requerid!");
    }

    if (!description) {
      throw new AppError("description is requerid!");
    }

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
    const category = await updateCategoryUseCase.execute({
      id,
      name,
      description,
    });

    return response.status(200).json(category);
  }
}

export { UpdateCategoryController };
