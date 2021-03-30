import { Router } from "express";

import { IndexProductsController } from "@Modules/products/useCases/indexProducts/IndexProductsController";
import { StoreProductController } from "@Modules/products/useCases/storeProduct/StoreProductController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const productsRoutes = Router();

const storeProductController = new StoreProductController();
const indexProductController = new IndexProductsController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  storeProductController.handle
);

productsRoutes.get("/", indexProductController.handle);

export { productsRoutes };
