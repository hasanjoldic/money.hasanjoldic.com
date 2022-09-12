import path from "path";
import dotenv from "dotenv";
import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

import swaggerUi from "swagger-ui-express";

import { v1 } from "@money.hasanjoldic.com/openapi";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

import routes from "./routes";

export const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(v1));
app.use("/api/v1.yaml", (req, res) => {
  res.send(v1);
});

routes.forEach(({ path, routers }) => {
  routers.forEach((router) => {
    app.use(`/api`, router);
  });
});

const PORT = 3000;

export const server = app.listen(PORT, () => {
  console.log(`Server listening on port :${PORT} 🚀`);
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR), err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
};

app.use(errorHandler);
