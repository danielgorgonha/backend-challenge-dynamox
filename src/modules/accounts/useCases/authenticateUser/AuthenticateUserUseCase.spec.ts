import { AppError } from "@Errors/AppError";
import { IStoreUserDTO } from "@Modules/accounts/dtos";
import { UsersRepositoryInMemory } from "@Modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import { StoreUserUseCase } from "../storeUser/StoreUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let storeUserUseCase: StoreUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    storeUserUseCase = new StoreUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: IStoreUserDTO = {
      name: "User Test",
      email: "user@test.com",
      password: "1234",
    };

    await storeUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("Should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be ablle to authenticate with incorrect password", () => {
    expect(async () => {
      const user: IStoreUserDTO = {
        name: "User Test Error",
        email: "user@user.com",
        password: "1234",
      };

      await storeUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrectPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
