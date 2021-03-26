import { Router } from "express";

const router = Router();

router.use("/", (request, response) => {
  return response.send("Hello World");
});

export { router };
