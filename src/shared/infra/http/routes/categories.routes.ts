import { Router } from "express";

import { DeleteCategoryController } from "@Modules/products/useCases/deleteCategory/DeleteCategoryController";
import { IndexCategoriesController } from "@Modules/products/useCases/indexCategories/IndexCategoriesController";
import { StoreCategoryController } from "@Modules/products/useCases/storeCategory/StoreCategoryController";
import { UpdateCategoryController } from "@Modules/products/useCases/updateCategory/UpdateCategoryController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const storeCategoryController = new StoreCategoryController();
const indexCategoriesController = new IndexCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

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

categoriesRoutes.put(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateCategoryController.handle
);

categoriesRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteCategoryController.handle
);

export { categoriesRoutes };
