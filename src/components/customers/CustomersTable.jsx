"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import dummyProductImage from "../../images/apple-vision-pro.png";
import RenderIcon from "../global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import ProductTabs from "../products/ProductTabs";
import PaginationFooter from "../global/PaginationFooter";
import Dropdown from "../global/Dropdown";
const variants = [
  {
    name: "One",
    inventory: "0",
    sku: "",
    type: "Type",
    status: "active",
  },
  {
    name: "Two",
    inventory: "0",
    sku: "",
    type: "Type",
    status: "inactive",
  },
  {
    name: "Three",
    inventory: "0",
    sku: "",
    type: "Type",
    status: "draft",
  },
];

const customerSegments = [
  { id: 1, name: "US customers" },
  { id: 2, name: "Purchased more than once" },
  { id: 3, name: "Abandoned checkout in past 30 days" },
  { id: 4, name: "International customers" },
];

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Active Subscription", href: "#", current: false },
  { name: "Paused", href: "#", current: false },
  { name: "Cancelled", href: "#", current: false },
];

const customerData = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    orders: 5,
    type: "Regular",
    subscription: "Active",
    amountSpent: "$500",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    location: "London, UK",
    orders: 3,
    type: "VIP",
    subscription: "Paused",
    amountSpent: "$1200",
  },
  {
    name: "Carlos Ruiz",
    email: "carlos.ruiz@example.com",
    location: "Madrid, Spain",
    orders: 8,
    type: "Regular",
    subscription: "Cancelled",
    amountSpent: "$750",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    location: "Toronto, Canada",
    orders: 2,
    type: "Regular",
    subscription: "Active",
    amountSpent: "$300",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    location: "Sydney, Australia",
    orders: 6,
    type: "VIP",
    subscription: "Paused",
    amountSpent: "$950",
  },
  {
    name: "Diana Prince",
    email: "diana.prince@example.com",
    location: "Paris, France",
    orders: 4,
    type: "Regular",
    subscription: "Active",
    amountSpent: "$600",
  },
  {
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    location: "Berlin, Germany",
    orders: 7,
    type: "VIP",
    subscription: "Cancelled",
    amountSpent: "$1100",
  },
  {
    name: "Fiona Gallagher",
    email: "fiona.gallagher@example.com",
    location: "Dublin, Ireland",
    orders: 3,
    type: "Regular",
    subscription: "Paused",
    amountSpent: "$450",
  },
  {
    name: "George Clooney",
    email: "george.clooney@example.com",
    location: "Rome, Italy",
    orders: 5,
    type: "VIP",
    subscription: "Active",
    amountSpent: "$1300",
  },
  {
    name: "Hannah Montana",
    email: "hannah.montana@example.com",
    location: "Los Angeles, USA",
    orders: 9,
    type: "Regular",
    subscription: "Cancelled",
    amountSpent: "$800",
  },
  // Add more customer data as needed
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomersTable() {
  const [selectedSegment, setSelectedSegment] = useState("Customer Segments");

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedCustomers.length > 0 &&
      selectedCustomers.length < customerData.length;
    setChecked(selectedCustomers.length === customerData.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedCustomers]);

  function toggleAll() {
    setSelectedCustomers(checked || indeterminate ? [] : customerData);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div>
      <div className="relative p-3 sm:flex sm:items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <ProductTabs tabs={tabs} />

          <div className="flex flex-row items-center justify-between gap-4">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RenderIcon
                  path={MagnifyingGlass}
                  size={"w-4"}
                  type={"black"}
                />
              </div>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Search customers"
                className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flow-root overflow-x-auto">
        <div className="inline-block w-full">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <div className="relative">
                {selectedCustomers.length > 0 && (
                  <div className="absolute left-20 top-0 flex h-12 items-center space-x-3 bg-gray-50 w-full sm:left-12 border-t border-gray-200">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Set as Active
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Set as Draft
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Set as Archived
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 border-t border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="relative px-7 py-6 sm:w-12 sm:px-6"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    {[
                      "Customer name",
                      "Email",
                      "Location",
                      "Orders",
                      "Type",
                      "Subscription",
                      "Amount spent",
                    ].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="w-1/9 px-3 py-4 text-left text-xs font-medium text-gray-500"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {customerData.map((customer, index) => (
                    <tr
                      key={index}
                      className={classNames(
                        selectedCustomers.includes(customer)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer",
                        "h-[77px]"
                      )}
                      onClick={() =>
                        (window.location.href = "/customer/details")
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={selectedCustomers.includes(customer)}
                          onChange={(e) =>
                            setSelectedCustomers(
                              e.target.checked
                                ? [...selectedCustomers, customer]
                                : selectedCustomers.filter(
                                    (c) => c !== customer
                                  )
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-900">
                        {customer.name}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {customer.location}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {customer.orders}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {customer.type}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {customer.subscription === "Active" ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
                            Active
                          </span>
                        ) : customer.subscription === "Cancelled" ? (
                          <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
                            Cancelled
                          </span>
                        ) : customer.subscription === "Paused" ? (
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
                            Paused
                          </span>
                        ) : null}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {customer.amountSpent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <PaginationFooter />
    </div>
  );
}
