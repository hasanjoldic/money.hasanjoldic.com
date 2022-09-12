CREATE TABLE receipt_items_receipt_item_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  receipt_item_id UUID REFERENCES receipt_items(id),
  receipt_item_tag_id UUID REFERENCES receipt_item_tags(id),

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON receipt_items_receipt_item_tags(receipt_item_id);
CREATE INDEX ON receipt_items_receipt_item_tags(receipt_item_tag_id);
CREATE INDEX ON receipt_items_receipt_item_tags(created_at);
CREATE INDEX ON receipt_items_receipt_item_tags(updated_at);

DROP TRIGGER IF EXISTS a_receipt_items_receipt_item_tags_timestamp_trigger ON receipt_items_receipt_item_tags;
CREATE TRIGGER a_receipt_items_receipt_item_tags_timestamp_trigger
  BEFORE UPDATE ON receipt_items_receipt_item_tags
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();