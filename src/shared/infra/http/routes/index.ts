import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../../../swgger.json";
import { authenticateRotues } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
router.use("/users", usersRoutes);
router.use(authenticateRotues);
router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);

export { router };
