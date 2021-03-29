import { Router } from "express";

import { IndexCategoriesController } from "@Modules/products/useCases/indexCategories/IndexCategoriesController";
import { StoreCategoryController } from "@Modules/products/useCases/storeCategory/StoreCategoryController";

const categoriesRoutes = Router();

const storeCategoryController = new StoreCategoryController();
const indexCategoriesController = new IndexCategoriesController();

categoriesRoutes.post("/", storeCategoryController.handle);
categoriesRoutes.get("/", indexCategoriesController.handle);
export { categoriesRoutes };
