import * as Sentry from "@sentry/nextjs";
import EventEmitter from "node:events";

EventEmitter.defaultMaxListeners = 20;

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Capture 100% in dev, 10% in production
  // Adjust based on your traffic volume
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
});