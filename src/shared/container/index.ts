import { container } from "tsyringe";

import { UsersRepository } from "@Modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@Modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@Modules/products/repositories/implementations/CategoriesRepository";
import { ProductRepository } from "@Modules/products/repositories/implementations/ProductRepository";
import { IProductRepository } from "@Modules/products/repositories/IProductRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
