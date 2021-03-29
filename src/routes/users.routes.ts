import { Router } from "express";

import { StoreUserController } from "../modules/accounts/useCases/storeUser/StoreUserController";

const usersRoutes = Router();

const storeUserController = new StoreUserController();

usersRoutes.post("/", storeUserController.handle);

export { usersRoutes };
