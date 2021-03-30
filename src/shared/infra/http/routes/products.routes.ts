import { Router } from "express";

import { StoreProductController } from "@Modules/products/useCases/storeProduct/StoreProductController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const productsRoutes = Router();

const storeProductController = new StoreProductController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  storeProductController.handle
);

export { productsRoutes };
