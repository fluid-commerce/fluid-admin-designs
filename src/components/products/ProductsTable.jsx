"use client";

import { useLayoutEffect, useRef, useState } from "react";

import dummyProductImage from "../../images/apple-vision-pro.png";
import RenderIcon from "../global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
import ProductTabs from "./ProductTabs";
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

const typeOptions = [
  {
    name: "Size",
    id: 1,
  },
  {
    name: "Material",
    id: 2,
  },
  {
    name: "Color",
    id: 2,
  },
  {
    name: "Style",
    id: 2,
  },
];

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Active", href: "#", current: false },
  { name: "Draft", href: "#", current: false },
  { name: "Archived", href: "#", current: false },
];

const locationFilters = [
  {
    name: "All Countries",
    id: 1,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function VarientsTable() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [inputs, setInputs] = useState(variants);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedVariants.length > 0 && selectedVariants.length < variants.length;
    setChecked(selectedVariants.length === variants.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedVariants]);

  function toggleAll() {
    setSelectedVariants(checked || indeterminate ? [] : variants);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div>
      <div className="relative p-3 sm:flex sm:items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <ProductTabs tabs={tabs} />

          <div className="flex flex-row items-center gap-4">
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
                placeholder="Search Products"
                className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {/* {selectedVariants.length > 0 && (
                <div className="absolute top-0.5 flex h-12 items-center space-x-3 bg-white sm:left-64">
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Set as Active
                    </button>
                  </span>
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Set as Draft
                    </button>
                  </span>
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Set as Archived
                    </button>
                  </span>
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-red-50 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              )} */}
            </div>
            <Dropdown options={locationFilters} />
          </div>
        </div>
      </div>
      <div className="flow-root overflow-hidden">
        <div className="inline-block w-full">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <div className="relative">
                {selectedVariants.length > 0 && (
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
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Inventory
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Sales Channels
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Markets
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      B2B Categories
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Vendors
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {inputs?.map((variant, index) => (
                    <tr
                      key={variant.name}
                      className={classNames(
                        selectedVariants.includes(variant)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer"
                      )}
                      onClick={() =>
                        (window.location.href = "/products/details")
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={selectedVariants.includes(variant)}
                          onChange={(e) =>
                            setSelectedVariants(
                              e.target.checked
                                ? [...selectedVariants, variant]
                                : selectedVariants.filter((v) => v !== variant)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-2 px-4 text-sm font-medium",
                          selectedVariants.includes(variant)
                            ? "text-blue-600"
                            : "text-gray-900"
                        )}
                      >
                        <div className="w-full flex flex-row items-center gap-4">
                          <img
                            src={dummyProductImage}
                            alt="Product Image"
                            className="h-12 w-12 flex-none rounded-md object-cover object-center"
                          />
                          <div className="text-sm font-medium">
                            {variant.name}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {variant.status === "active" ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
                            Active
                          </span>
                        ) : variant.status === "inactive" ? (
                          <span class="inline-flex items-center rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
                            Inactive
                          </span>
                        ) : variant.status === "draft" ? (
                          <span class="inline-flex items-center rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800">
                            Draft
                          </span>
                        ) : null}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        10
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        2,650 in stock for 3 variants
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        2
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        0
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        Electronics
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        Apple Vision Pro
                      </td>
                      <td className="whitespace-nowrap px-3 py-10 text-sm text-gray-500">
                        Apple Vision Pro
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
