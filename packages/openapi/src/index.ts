import path from "path";
import YAML from "yamljs";

export const v1 = YAML.load(path.resolve(__dirname, "./v1.yaml"));
