import { getRepository, Repository } from "typeorm";

import { IStoreUserDTO } from "@Modules/accounts/dtos";
import { User } from "@Modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@Modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async store({ name, email, password }: IStoreUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
