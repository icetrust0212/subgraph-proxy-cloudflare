import { AnalyticsEngine } from "./analytics";

export interface Env {
  ryze_proxy_test: KVNamespace;
  ryze_proxy_test_key_usage: AnalyticsEngine;
  loki_secret: string;
  loki_username: string;
  environment: "development" | "production";
  SUBGRAPH_API_KEY?: string;
}

export type CfRequest = Request & { cf?: IncomingRequestCfProperties };
