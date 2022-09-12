import express, { Router } from "express";
import { json } from "body-parser";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { body } from "express-validator";

import { isValidRequest } from "../../utils";

import { getUserWithAccessToken } from "./getUserWithAccessToken";
import { sendUnauthorizedResponse } from "./utils";

const router = Router();
const jsonParser = json();

export interface ILogoutRequestBody {
  accessToken: string;
}

router.post(
  "/logout",

  jsonParser,

  body("accessToken").isJWT(),
  body("shouldInvalidateAllJWTs").isBoolean(),

  async (req: express.Request<{}, any, ILogoutRequestBody>, res) => {
    if (!isValidRequest(req, res)) return;

    const { accessToken } = req.body;
    const user = await getUserWithAccessToken(accessToken);

    // if (!user) {
    //   sendUnauthorizedResponse(res);
    //   return;
    // }

    // res.status(StatusCodes.OK).send(getReasonPhrase(StatusCodes.OK));
  }
);

export default router;
