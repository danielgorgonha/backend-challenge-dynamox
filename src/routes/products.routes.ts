import { Router } from "express";

import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { IndexProductController } from "../modules/products/useCases/indexProduct/IndexProductController";
import { ShowProductController } from "../modules/products/useCases/showProduct/ShowProductController";
import { StoreProductController } from "../modules/products/useCases/storeProduct/StoreProductController";
import { UpdateProductController } from "../modules/products/useCases/updateProduct/UpdateProductController";

const produtsRoutes = Router();

const storeProductController = new StoreProductController();
const indexProductController = new IndexProductController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

produtsRoutes.post("/", storeProductController.handle);
produtsRoutes.get("/", indexProductController.handle);
produtsRoutes.get("/:id", showProductController.handle);
produtsRoutes.delete("/:id", deleteProductController.handle);
produtsRoutes.put("/:id", updateProductController.handle);

export { produtsRoutes };
