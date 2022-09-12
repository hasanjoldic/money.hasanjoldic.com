const path = require("path");
const YAML = require("yamljs");

exports.v1 = YAML.load(path.resolve(__dirname, "./versions/v1.yaml"));
