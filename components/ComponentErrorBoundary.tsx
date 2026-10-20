"use client";

import React from "react";
import * as Sentry from "@sentry/nextjs";

interface ComponentErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
}

export default function ComponentErrorBoundary({
  name,
  children,
}: ComponentErrorBoundaryProps) {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <div
          role="alert"
          className="p-4 rounded-lg bg-red-950/40 border border-red-500/50 text-red-200 text-sm flex flex-col items-center justify-center gap-2"
        >
          <p className="font-semibold">Failed to load {name}</p>
          <p className="text-xs text-red-300/80">
            {error instanceof Error ? error.message : "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => resetError()}
            className="px-3 py-1 bg-red-600/80 hover:bg-red-600 text-white rounded text-xs transition-colors"
          >
            Try again
          </button>
        </div>
      )}
      beforeCapture={(scope) => {
        scope.setTag("component_name", name);
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
}
