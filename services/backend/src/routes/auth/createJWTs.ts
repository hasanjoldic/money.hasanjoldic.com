import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import jsonwebtoken from "jsonwebtoken";

import { getEnvVar } from "../../utils";

import { IAuthResponseBody } from "./types";

export async function createJWTs({
  email,
  res,
}: {
  email: string;
  res: Response;
}) {
  const newAccessToken = jsonwebtoken.sign({ email }, getEnvVar("JWT_SECRET"), {
    expiresIn: "10m",
  });

  const body: IAuthResponseBody = {
    accessToken: newAccessToken,
  };

  res.status(StatusCodes.OK).json(body);
}
