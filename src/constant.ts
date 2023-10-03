import z from "zod";

export const GRAPHQL_ENDPOINT = "/:type/:identifier/:name";

export const subgraphServiceType = z.enum([
  "hosted",
  "gateway",
  "gateway-arbitrum",
  "studio",
]);

/**
 * Cache for 1m 
 */
export const GLOBAL_CACHE_TTL_SECONDS = 60;
