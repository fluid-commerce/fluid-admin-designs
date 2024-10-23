import React from "react";

export default function PageContainer({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-10 py-8 space-y-12">{children}</div>
  );
}
