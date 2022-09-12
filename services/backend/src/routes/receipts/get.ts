import express, { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { pool } from "../../db";

const router = Router();

const handler = async (req: express.Request, res: express.Response) => {
  const getReceiptsQuery = await pool.query(`
    SELECT id, total, scan_url, received_at
    FROM receipts;
  `);

  const rows = getReceiptsQuery.rows.map((row) => ({
    id: row.id,
    total: row.total,
    receivedAt: row.received_at,
    scanUrl: row.scan_url,
  }));

  if (getReceiptsQuery.rowCount) {
    res.status(StatusCodes.OK).send({ data: rows });
  }
};

router.get("/receipts", handler);

export default router;
