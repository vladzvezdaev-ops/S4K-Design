import { type SchemaTypeDefinition } from "sanity";
import home from "./home";
import settings from "./settings";
import project from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, settings, project],
};
