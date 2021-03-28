import { ICreateUserDTO } from "../dtos";
import { User } from "../entities/User";

interface IUsersRepository {
  store(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
