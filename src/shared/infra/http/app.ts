import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "@Shared/container";

import { AppError } from "@Shared/errors/AppError";
import { router } from "@Shared/infra/http/routes";
import createConnection from "@Shared/infra/typeorm";

createConnection("localhost");
const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
