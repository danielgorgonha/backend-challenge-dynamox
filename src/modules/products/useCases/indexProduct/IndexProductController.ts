import { Request, Response } from "express";
import { container } from "tsyringe";

import { IndexProductUseCase } from "./IndexProductUseCase";

class IndexProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const indexProductUseCase = container.resolve(IndexProductUseCase);

    const all = await indexProductUseCase.execute();

    return response.json(all);
  }
}

export { IndexProductController };
