import fs from "fs";
import express, { Router } from "express";
import { body } from "express-validator";
import multer from "multer";
import { StatusCodes } from "http-status-codes";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { isValidRequest, sendBadRequestResponse } from "../../utils";
import { pool } from "../../db";
import { sanitize } from "./utils";

const upload = multer({ dest: "../../../temp" });

const s3Client = new S3Client({
  endpoint: "https://fra1.digitaloceanspaces.com", // Find your endpoint in the control panel, under Settings. Prepend "https://".
  region: "fra1", // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  credentials: {
    accessKeyId: "DO00NF3LEWYPB9VTEC2A", // Access key pair. You can create access key pairs using the control panel or API.
    secretAccessKey: "E48Pph6obmP2Z2QSjg7EzBvZR352O6onJQcC8eDSHZ8", // Secret access key defined through an environment variable.
  },
});

const router = Router();

interface IRequestBody {
  total: string;
}

const validators = [
  body("total").isDecimal({
    decimal_digits: "1,2",
    force_decimal: true,
    locale: "en-US",
  }),
];

export const postReceipts = async (
  req: express.Request<{}, any, IRequestBody>,
  res: express.Response
) => {
  try {
    if (!isValidRequest(req, res)) return;
    if (!req.file) {
      console.error("Missing file in request body");
      sendBadRequestResponse(res);
      return;
    }

    const dateISOString = new Date().toISOString();
    const filename = `${dateISOString}.${req.file.mimetype.split("/")[1]}`;
    const fileStream = fs.createReadStream(req.file.path);

    const params = {
      Bucket: "enki", // The path to the directory you want to upload the object to, starting with your Space name.
      Key: `money.hasanjoldic.com/${filename}`, // Object key, referenced whenever you want to access this file later.
      Body: fileStream, // The object's contents. This variable is an object, not a string.
      ACL: "public-read", // Defines ACL permissions, such as private or public.
      ContentType: req.file.mimetype,
    };

    try {
      console.log("Uploading... " + params.Bucket + "/" + params.Key);
      await s3Client.send(new PutObjectCommand(params));
      console.log(
        "Successfully uploaded object: " + params.Bucket + "/" + params.Key
      );
    } catch (err) {
      console.error(
        "Error uploading object: " + params.Bucket + "/" + params.Key,
        err
      );
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    const queryResult = await pool.query(
      `
        INSERT INTO receipts (scan_url, total, received_at)
        VALUES ($1, $2, $3)
        RETURNING id;
      `,
      [
        `https://enki.fra1.digitaloceanspaces.com/money.hasanjoldic.com/${filename}`,
        Number.parseFloat(req.body.total),
        dateISOString,
      ]
    );

    const receipt = sanitize(queryResult.rows[0]);

    res.status(StatusCodes.OK).send(receipt);
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};

router.post(
  "/receipts",
  upload.single("scanFile"),
  ...validators,
  postReceipts
);

export default router;
