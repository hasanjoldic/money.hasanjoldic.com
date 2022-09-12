import express, { Router } from "express";
import { json } from "body-parser";
import { body } from "express-validator";

// import { User } from "@money.enki.ba/db";

import { isValidRequest, compareHash } from "../../utils";
import { createJWTs } from "./createJWTs";
import { sendUnauthorizedResponse } from "./utils";

const router = Router();
const jsonParser = json();

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export const loginValidators = [
  body("email").isEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password minimum length is 8."),
];

export const loginHandler = async (
  req: express.Request<{}, any, ILoginRequestBody>,
  res: express.Response
) => {
  if (!isValidRequest(req, res)) return;

  const { email, password } = req.body;

  // const client = await initDB();
  // const userRepository = client.em.getRepository(User);
  // const user = await userRepository.findOne(
  //   { email },
  //   { fields: ["email", "password"] }
  // );

  // if (!user) {
  //   sendUnauthorizedResponse(res);
  //   return;
  // }

  // const isValidPassword = await compareHash(password, user?.password);

  // if (!isValidPassword) {
  //   sendUnauthorizedResponse(res);
  //   return;
  // }

  // await createJWTs({
  //   email: user?.email,
  //   res,
  // });
};

router.post("/login", jsonParser, ...loginValidators, loginHandler);

export default router;
