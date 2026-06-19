import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index.js";

export default defineConfig({
  name: "e-commerce",
  title: "e-commerce",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "terz7sp5",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
