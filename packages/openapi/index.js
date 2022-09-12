import path from "path";
import YAML from "yamljs";

export var v1 = YAML.load(path.resolve(__dirname, "./versions/v1.yaml"));
