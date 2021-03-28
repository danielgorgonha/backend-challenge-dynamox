import { Router } from "express";

import { authenticateRotues } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRotues);
router.use("/categories", categoriesRoutes);

export { router };
