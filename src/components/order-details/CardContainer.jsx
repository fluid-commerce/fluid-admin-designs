import React from "react";

export default function CardContainer({ children }) {
  return (
    <div className="space-y-12 -mx-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      {children}
    </div>
  );
}
