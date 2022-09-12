import express, { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { pool } from "../../db";
import { sanitize } from "./utils";

const router = Router();

const handler = async (req: express.Request, res: express.Response) => {
  const getReceiptsQuery = await pool.query(`
    SELECT id, total, scan_url, received_at
    FROM receipts;
  `);

  const rows = getReceiptsQuery.rows.map(sanitize);

  res.status(StatusCodes.OK).send({ data: rows });
};

router.get("/receipts", handler);

export default router;
