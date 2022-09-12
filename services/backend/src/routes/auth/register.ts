import express, { Router } from "express";
import { json } from "body-parser";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { body, validationResult } from "express-validator";

import { createJWTs } from "./createJWTs";
// import { User } from "@money.enki.ba/db";
import { sendUnauthorizedResponse } from "./utils";

const router = Router();
const jsonParser = json();

export interface IRegisterRequestBody {
  email: string;
  password: string;
  fullName: string;
}

export const registerValidators = [
  body("email").isEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password minimum length is 8."),
];

export const registerHandler = async (
  req: express.Request<{}, any>,
  res: express.Response
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(StatusCodes.UNAUTHORIZED).json({ errors: errors.array() });
    return;
  }

  const { email, password, fullName } = req.body;

  // const client = await initDB();
  // const userRepository = client.em.getRepository(User);
  // const existingUser = await userRepository.findOne(
  //   { email },
  //   { fields: ["email", "password"] }
  // );

  // if (existingUser) {
  //   sendUnauthorizedResponse(res);
  //   return;
  // }

  // const user = await userRepository.create({ email, password });

  // if (!user) {
  //   sendUnauthorizedResponse(res);
  //   return;
  // }

  // await createJWTs({
  //   email: user.email,
  //   res,
  // });
};

router.post(
  "/register",

  jsonParser,
  registerValidators,
  registerHandler
);

export default router;
