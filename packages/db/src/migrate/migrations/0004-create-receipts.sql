CREATE TABLE IF NOT EXISTS receipts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  total DECIMAL(12, 2) NOT NULL CHECK (total > 0),
  received_at DATE NOT NULL,
  scan_url TEXT NOT NULL,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON receipts(total);
CREATE INDEX ON receipts(received_at);
CREATE INDEX ON receipts(scan_url);
CREATE INDEX ON receipts(created_at);
CREATE INDEX ON receipts(updated_at);

DROP TRIGGER IF EXISTS a_receipts_timestamp_trigger ON receipts;
CREATE TRIGGER a_receipts_timestamp_trigger
  BEFORE UPDATE ON receipts
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();
