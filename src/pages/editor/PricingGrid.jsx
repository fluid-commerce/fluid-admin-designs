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

const AVAILABLE_CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "CAD", symbol: "$", name: "Canadian Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "AUD", symbol: "$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
];

// Sub-components
const Toggle = ({ checked, onChange }) => {
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
          className="w-full bg-blue-50 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 text-right"
          autoFocus
          step="0.01"
        />
      </div>
    );
  }

  return (
    <div
      className="text-right cursor-pointer hover:bg-blue-50 rounded px-2 py-1"
      onClick={onStartEdit}
    >
      <span className="text-gray-500">{currency.symbol}</span>
      <span className="text-gray-900">
        {value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
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
        className="w-full bg-blue-50 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 text-right"
        autoFocus
      />
    );
  }

  return (
    <div
      className="text-right cursor-pointer hover:bg-blue-50 rounded px-2 py-1"
      onClick={onStartEdit}
    >
      <span className="text-gray-900">{value.toLocaleString()}</span>
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 sticky left-0 bg-gray-50"
                    rowSpan={2}
                  >
                    Enable
                  </th>
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 sticky left-[44px] bg-gray-50"
                    rowSpan={2}
                  >
                    Country
                  </th>
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 sticky left-[250px] bg-gray-50"
                    rowSpan={2}
                  >
                    Currency
                  </th>
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                    colSpan={5}
                  >
                    Pricing
                  </th>
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
                    colSpan={3}
                  >
                    Additional Costs
                  </th>
                  <th
                    className="py-2 px-4 text-left font-medium text-gray-500 uppercase tracking-wider"
                    colSpan={4}
                  >
                    Points
                  </th>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Price
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Subscription
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Wholesale
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Wholesale Sub
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Compare At
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    COGS
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Shipping
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Tax
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    CV
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    QV
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm border-r border-gray-200">
                    Wholesale CV
                  </th>
                  <th className="py-1.5 px-2 text-right font-medium text-gray-500 text-sm">
                    Wholesale QV
                  </th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                  <tr
                    key={country.code}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="w-10 py-1.5 pl-4 pr-2 sticky left-0 bg-white border-r border-gray-200">
                      <Toggle
                        checked={country.enabled}
                        onChange={() => handleEnableToggle(country.code)}
                      />
                    </td>
                    <td className="py-1.5 px-2 sticky left-[44px] bg-white border-r border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{country.flag}</span>
                        <span className="text-gray-900">{country.name}</span>
                      </div>
                    </td>
                    <td className="py-1.5 px-2 sticky left-[250px] bg-white border-r border-gray-200">
                      <CurrencySelector
                        value={country.currency}
                        onChange={(currency) =>
                          handleCurrencyChange(country.code, currency)
                        }
                      />
                    </td>
                    {EDITABLE_FIELDS.map((field) => (
                      <td
                        key={field}
                        className="py-1.5 px-2 border-r border-gray-200"
                      >
                        {field.includes("price") ||
                        field.includes("cost") ||
                        field === "shipping" ||
                        field === "tax" ? (
                          <CurrencyInput
                            value={country[field]}
                            currency={country.currency}
                            onChange={(value) =>
                              handleCellEdit(country.code, field, value)
                            }
                            isEditing={
                              editingCell?.row === country.code &&
                              editingCell?.col === field
                            }
                            onStartEdit={() =>
                              setEditingCell({ row: country.code, col: field })
                            }
                            onEndEdit={() => setEditingCell(null)}
                            onTab={(shift) =>
                              handleTab(country.code, field, shift)
                            }
                          />
                        ) : (
                          <NumberInput
                            value={country[field]}
                            onChange={(value) =>
                              handleCellEdit(country.code, field, value)
                            }
                            isEditing={
                              editingCell?.row === country.code &&
                              editingCell?.col === field
                            }
                            onStartEdit={() =>
                              setEditingCell({ row: country.code, col: field })
                            }
                            onEndEdit={() => setEditingCell(null)}
                            onTab={(shift) =>
                              handleTab(country.code, field, shift)
                            }
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
