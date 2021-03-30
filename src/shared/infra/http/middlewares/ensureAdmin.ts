import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@Modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@Shared/errors/AppError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }

  return next();
}
