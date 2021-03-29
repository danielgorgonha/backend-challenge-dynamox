import { IStoreUserDTO } from "../dtos";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  store(data: IStoreUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
