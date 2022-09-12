CREATE TABLE IF NOT EXISTS receipt_item_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  parent_id UUID REFERENCES receipt_item_tags(id),

  title VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON receipt_item_tags(parent_id);
CREATE INDEX ON receipt_item_tags(created_at);
CREATE INDEX ON receipt_item_tags(updated_at);

DROP TRIGGER IF EXISTS a_receipt_item_tags_timestamp_trigger ON receipt_item_tags;
CREATE TRIGGER a_receipt_item_tags_timestamp_trigger
  BEFORE UPDATE ON receipt_item_tags
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();