import { Router } from "express";

import { StoreProductController } from "@Modules/products/useCases/storeProduct/StoreProductController";

const productsRoutes = Router();

const storeProductController = new StoreProductController();

productsRoutes.post("/", storeProductController.handle);

export { productsRoutes };
