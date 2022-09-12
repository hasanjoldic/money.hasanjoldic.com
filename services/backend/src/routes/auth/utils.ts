import { Response } from "express";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

export function sendUnauthorizedResponse(res: Response) {
  res
    .status(StatusCodes.UNAUTHORIZED)
    .send(getReasonPhrase(StatusCodes.UNAUTHORIZED));
}
