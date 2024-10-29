import React, { useState } from "react";

// Initial Data
const INITIAL_DATA = [
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

const AVAILABLE_CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

const EDITABLE_FIELDS = [
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

// Sub-components
const Toggle = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 cursor-pointer rounded-full transition-colors focus:outline-none ${
        checked ? "bg-blue-600" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
};

const CurrencySelector = ({ value, onChange }) => {
  return (
    <select
      value={value.code}
      onChange={(e) => {
        const currency = AVAILABLE_CURRENCIES.find(
          (c) => c.code === e.target.value
        );
        if (currency) onChange(currency);
      }}
      className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500"
    >
      {AVAILABLE_CURRENCIES.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code} ({currency.symbol})
        </option>
      ))}
    </select>
  );
};

const CurrencyInput = ({
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

  if (isEditing) {
    return (
      <div className="flex items-center">
        <span className="text-gray-500 mr-1">{currency.symbol}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          onBlur={onEndEdit}
          onKeyDown={handleKeyDown}
          className="w-full bg-blue-50 rounded px-2 py-1 text-right"
          autoFocus
          step="0.01"
        />
      </div>
    );
  }

  return (
    <div className="text-right cursor-pointer" onClick={onStartEdit}>
      <span className="text-gray-500">{currency.symbol}</span>
      <span className="text-gray-900">{value.toFixed(2)}</span>
    </div>
  );
};

const NumberInput = ({
  value,
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

  if (isEditing) {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        onBlur={onEndEdit}
        onKeyDown={handleKeyDown}
        className="w-full bg-blue-50 rounded px-2 py-1 text-right"
        autoFocus
      />
    );
  }

  return (
    <div className="text-right cursor-pointer" onClick={onStartEdit}>
      <span className="text-gray-900">{value}</span>
    </div>
  );
};

// Main Component
const PricingGrid = () => {
  const [countries, setCountries] = useState(INITIAL_DATA);
  const [editingCell, setEditingCell] = useState(null);

  const handleEnableToggle = (code) => {
    setCountries(
      countries.map((country) =>
        country.code === code
          ? { ...country, enabled: !country.enabled }
          : country
      )
    );
  };

  const handleCurrencyChange = (code, currency) => {
    setCountries(
      countries.map((country) =>
        country.code === code ? { ...country, currency } : country
      )
    );
  };

  const handleCellEdit = (code, field, value) => {
    setCountries(
      countries.map((country) =>
        country.code === code ? { ...country, [field]: value } : country
      )
    );
  };

  const handleTab = (currentCountry, currentField, shift) => {
    const currentFieldIndex = EDITABLE_FIELDS.indexOf(currentField);
    let nextFieldIndex = shift ? currentFieldIndex - 1 : currentFieldIndex + 1;

    if (nextFieldIndex >= EDITABLE_FIELDS.length || nextFieldIndex < 0) {
      const currentCountryIndex = countries.findIndex(
        (c) => c.code === currentCountry
      );
      let nextCountryIndex = shift
        ? currentCountryIndex - 1
        : currentCountryIndex + 1;

      if (nextCountryIndex >= countries.length) {
        nextCountryIndex = 0;
      } else if (nextCountryIndex < 0) {
        nextCountryIndex = countries.length - 1;
      }

      nextFieldIndex = shift ? EDITABLE_FIELDS.length - 1 : 0;

      setEditingCell({
        row: countries[nextCountryIndex].code,
        col: EDITABLE_FIELDS[nextFieldIndex],
      });
    } else {
      setEditingCell({
        row: currentCountry,
        col: EDITABLE_FIELDS[nextFieldIndex],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[95%] mx-auto py-6">
        {/* ...rest of your table component code... */}
      </div>
    </div>
  );
};

export default PricingGrid;
