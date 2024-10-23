import React from "react";

export default function CardContainer({ children }) {
  return (
    <div className="space-y-12 -mx-4 bg-white shadow rounded-md shadow-sm sm:mx-0">
      {children}
    </div>
  );
}
