import { container } from "tsyringe";

import { UsersRepository } from "@Modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@Modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@Modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ProductsRepository } from "@Modules/products/infra/typeorm/repositories/ProductsRepository";
import { ICategoriesRepository } from "@Modules/products/repositories/ICategoriesRepository";
import { IProductsRepository } from "@Modules/products/repositories/IProductsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);
