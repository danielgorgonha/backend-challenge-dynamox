import { Router } from "express";

import { DeleteProductController } from "@Modules/products/useCases/deleteProduct/DeleteProductController";
import { IndexProductController } from "@Modules/products/useCases/indexProduct/IndexProductController";
import { ShowProductController } from "@Modules/products/useCases/showProduct/ShowProductController";
import { StoreProductController } from "@Modules/products/useCases/storeProduct/StoreProductController";
import { UpdateProductController } from "@Modules/products/useCases/updateProduct/UpdateProductController";

const productsRoutes = Router();

const storeProductController = new StoreProductController();
const indexProductController = new IndexProductController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

productsRoutes.post("/", storeProductController.handle);
productsRoutes.get("/", indexProductController.handle);
productsRoutes.get("/:id", showProductController.handle);
productsRoutes.delete("/:id", deleteProductController.handle);
productsRoutes.put("/:id", updateProductController.handle);

export { productsRoutes };
