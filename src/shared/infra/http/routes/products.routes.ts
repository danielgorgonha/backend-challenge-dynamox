import { Router } from "express";

import { DeleteProductController } from "@Modules/products/useCases/deleteProduct/DeleteProductController";
import { IndexProductsController } from "@Modules/products/useCases/indexProducts/IndexProductsController";
import { StoreProductController } from "@Modules/products/useCases/storeProduct/StoreProductController";
import { UpdateProductController } from "@Modules/products/useCases/updateProduct/UpdateProductController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const productsRoutes = Router();

const storeProductController = new StoreProductController();
const indexProductController = new IndexProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  storeProductController.handle
);

productsRoutes.get("/", indexProductController.handle);

productsRoutes.put(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateProductController.handle
);

productsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteProductController.handle
);

export { productsRoutes };
