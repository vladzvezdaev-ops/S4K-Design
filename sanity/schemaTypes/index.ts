import { type SchemaTypeDefinition } from "sanity";
import { homeType } from "./home";
import { projectType } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, projectType],
};
