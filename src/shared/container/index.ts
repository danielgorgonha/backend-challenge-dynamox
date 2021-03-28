import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/products/repositories/implementations/CategoriesRepository";
import { ProdcutRepository } from "../../modules/products/repositories/implementations/ProductRepository";
import { IProductRepository } from "../../modules/products/repositories/IProductRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductRepository>(
  "ProdcutRepository",
  ProdcutRepository
);
