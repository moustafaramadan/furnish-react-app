import { defineCliConfig } from "@sanity/cli";

export default defineCliConfig({
  studioHost: "e-commerce-terz7sp5",
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "terz7sp5",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
});
