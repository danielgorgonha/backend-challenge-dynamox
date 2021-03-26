import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRotues = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRotues.post("/login", authenticateUserController.handle);

export { authenticateRotues };
