import express, { Response } from "express";
import { validationResult } from "express-validator";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

export function isValidRequest(req: express.Request, res: express.Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    return false;
  }

  return true;
}

export function getEnvVar(key: string) {
  const envVar = process.env[key];

  if (!envVar) {
    throw new Error(`${key} environment variable not set.`);
  }

  return envVar;
}

export function sendBadRequestResponse(res: Response) {
  res
    .status(StatusCodes.BAD_REQUEST)
    .send(getReasonPhrase(StatusCodes.BAD_REQUEST));
}
