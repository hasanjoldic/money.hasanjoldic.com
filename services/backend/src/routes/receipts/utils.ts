export function sanitize(row: any) {
  return {
    id: row.id,
    total: row.total,
    receivedAt: row.received_at,
    scanUrl: row.scan_url,
  };
}
