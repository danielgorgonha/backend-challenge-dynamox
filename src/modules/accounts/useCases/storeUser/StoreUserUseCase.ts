import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IStoreUserDTO } from "@Modules/accounts/dtos";
import { IUsersRepository } from "@Modules/accounts/repositories/IUsersRepository";
import { AppError } from "@Shared/errors/AppError";

@injectable()
class StoreUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: IStoreUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.store({ name, email, password: passwordHash });
  }
}

export { StoreUserUseCase };
