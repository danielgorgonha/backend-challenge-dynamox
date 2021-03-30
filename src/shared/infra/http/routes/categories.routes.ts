import { Router } from "express";

import { IndexCategoriesController } from "@Modules/products/useCases/indexCategories/IndexCategoriesController";
import { StoreCategoryController } from "@Modules/products/useCases/storeCategory/StoreCategoryController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const storeCategoryController = new StoreCategoryController();
const indexCategoriesController = new IndexCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  storeCategoryController.handle
);
categoriesRoutes.get(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  indexCategoriesController.handle
);
export { categoriesRoutes };
