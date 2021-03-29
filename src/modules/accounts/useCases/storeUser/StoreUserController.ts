import { Request, Response } from "express";
import { container } from "tsyringe";

import { StoreUserUseCase } from "./StoreUserUseCase";

class StoreUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const storeUserUseCase = container.resolve(StoreUserUseCase);

    await storeUserUseCase.execute({ name, email, password });

    return response.status(201).send();
  }
}

export { StoreUserController };
