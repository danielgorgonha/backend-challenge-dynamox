import { IStoreUserDTO } from "@Modules/accounts/dtos";
import { User } from "@Modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async store({ name, email, password }: IStoreUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { name, email, password });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };
