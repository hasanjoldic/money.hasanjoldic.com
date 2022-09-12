const path = require("path");
const YAML = require("yamljs");

export var v1 = YAML.load(path.resolve(__dirname, "./versions/v1.yaml"));
