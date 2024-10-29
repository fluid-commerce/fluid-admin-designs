import React, { useState } from "react";

// Constants
export const EDITABLE_FIELDS = [
  "price",
  "subscription",
  "wholesalePrice",
  "wholesaleSubscriptionPrice",
  "comparePrice",
  "costOfGoodsSold",
  "shipping",
  "tax",
  "cv",
  "qv",
  "wholesaleCv",
  "wholesaleQv",
];

export const AVAILABLE_CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

export const INITIAL_DATA = [
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    enabled: true,
    currency: { code: "USD", symbol: "$", name: "US Dollar" },
    price: 3499.0,
    subscription: 3100.0,
    wholesalePrice: 3000.0,
    wholesaleSubscriptionPrice: 2900.0,
    comparePrice: 0.0,
    costOfGoodsSold: 0.0,
    shipping: 0.0,
    tax: 0.0,
    cv: 500,
    qv: 500,
    wholesaleCv: 500,
    wholesaleQv: 500,
  },
  // Add more countries as needed
];

// Sub-components
export const Toggle = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`
        relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${checked ? "bg-blue-600" : "bg-gray-200"}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 
          transition duration-200 ease-in-out
          ${checked ? "translate-x-4" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export const CurrencySelector = ({ value, onChange }) => {
  return (
    <select
      value={value.code}
      onChange={(e) => {
        const currency = AVAILABLE_CURRENCIES.find(
          (c) => c.code === e.target.value
        );
        if (currency) onChange(currency);
      }}
      className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
    >
      {AVAILABLE_CURRENCIES.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code} ({currency.symbol})
        </option>
      ))}
    </select>
  );
};

export const CurrencyInput = ({
  value,
  currency,
  onChange,
  isEditing,
  onStartEdit,
  onEndEdit,
  onTab,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      onTab(e.shiftKey);
    } else if (e.key === "Enter" || e.key === "Escape") {
      onEndEdit();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};
