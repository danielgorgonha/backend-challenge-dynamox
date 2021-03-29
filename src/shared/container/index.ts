import { container } from "tsyringe";

import { UsersRepository } from "@Modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@Modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@Modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ProductRepository } from "@Modules/products/infra/typeorm/repositories/ProductRepository";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";
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
