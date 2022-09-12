CREATE TABLE IF NOT EXISTS receipt_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  receipt_id UUID REFERENCES receipts(id),

  total DECIMAL(12, 2) NOT NULL CHECK (total > 0),

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON receipt_items(receipt_id);
CREATE INDEX ON receipt_items(created_at);
CREATE INDEX ON receipt_items(updated_at);

DROP TRIGGER IF EXISTS a_receipt_items_timestamp_trigger ON receipt_items;
CREATE TRIGGER a_receipt_items_timestamp_trigger
  BEFORE UPDATE ON receipt_items
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();
