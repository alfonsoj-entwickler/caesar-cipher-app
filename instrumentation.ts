import * as Sentry from "@sentry/nextjs";
import EventEmitter from "node:events";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Next.js internal lifecycle listeners (5-6) + Sentry/OpenTelemetry response listeners
    // sum up to 11 on the transient ServerResponse EventEmitter. Increasing the limit
    // silences false-positive MaxListenersExceededWarning without affecting memory.
    EventEmitter.defaultMaxListeners = 20;
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}
// Capture errors from Server Components, middleware, and proxies
export const onRequestError = Sentry.captureRequestError;