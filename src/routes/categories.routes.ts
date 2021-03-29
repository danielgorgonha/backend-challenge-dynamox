import { Router } from "express";

import { DeleteCategoryController } from "@Modules/products/useCases/deleteCategory/DeleteCategoryController";
import { IndexCategoriesController } from "@Modules/products/useCases/indexCategories/IndexCategoriesController";
import { ShowCategoryController } from "@Modules/products/useCases/showCategories/ShowCategoryController";
import { StoreCategoryController } from "@Modules/products/useCases/storeCategory/StoreCategoryController";
import { UpdateCategoryController } from "@Modules/products/useCases/updateCategory/UpdateCategoryController";

const categoriesRoutes = Router();

const storeCategoryController = new StoreCategoryController();
const indexCategoriesController = new IndexCategoriesController();
const showCategoryController = new ShowCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post("/", storeCategoryController.handle);
categoriesRoutes.get("/", indexCategoriesController.handle);
categoriesRoutes.get("/:id", showCategoryController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);

export { categoriesRoutes };
