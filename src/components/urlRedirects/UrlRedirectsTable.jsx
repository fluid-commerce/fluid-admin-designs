"use client";

import { useLayoutEffect, useRef, useState } from "react";

import TextDropdown from "../global/TextDropdown";
import Dropdown from "../global/Dropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Plus from "../../images/svgs/solid/plus.svg";
import RenderIcon from "../global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
// import ProductTabs from "./ProductTabs";
import PaginationFooter from "../global/PaginationFooter";
import Modal from "../global/Modal";
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

const filterOptions = [
  {
    name: "Last Modified",
    id: 1,
  },
  {
    name: "Date Created",
    id: 2,
  },
  {
    name: "Alphabetical (Old Path)",
    id: 2,
  },
  {
    name: "Alphabetical (New Path)",
    id: 2,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mockData = Array.from({ length: 20 }, (_, index) => ({
  oldPath: `https://example.com/old-path-${index + 1}`,
  newPath: `https://example.com/new-path-${index + 1}`,
}));

export default function UrlRedirectsTable() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [inputs, setInputs] = useState(variants);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedVariants.length > 0 && selectedVariants.length < mockData.length;
    setChecked(selectedVariants.length === mockData.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedVariants]);

  function toggleAll() {
    setSelectedVariants(checked || indeterminate ? [] : mockData);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div>
      <div className="relative p-3 sm:flex sm:items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <div className="rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
                <RenderIcon path={MagnifyingGlass} size={"w-4"} />
              </div>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Search URL Redirects"
                className="block w-full rounded-md border-0 h-28px pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {selectedVariants.length > 0 && (
                <div className="absolute top-0.5 flex h-12 items-center space-x-3 bg-white sm:left-64">
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Export
                    </button>
                  </span>
                  <span className="hidden sm:block">
                    <button
                      type="button"
                      className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setOpenDeleteModal(true)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>
          <Dropdown options={filterOptions} />
          {/* <ProductTabs /> */}
        </div>
      </div>
      <div className="flow-root">
        <div className="inline-block w-full">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 border-t border-gray-200">
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
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
                      className="w-1/2 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Old Path
                    </th>
                    <th
                      scope="col"
                      className="w-1/2 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      New Path
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {mockData.map((url, index) => (
                    <tr
                      key={index}
                      className={classNames(
                        selectedVariants.includes(url)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer",
                        "h-[77px]"
                      )}
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={selectedVariants.includes(url)}
                          onChange={(e) =>
                            setSelectedVariants(
                              e.target.checked
                                ? [...selectedVariants, url]
                                : selectedVariants.filter((v) => v !== url)
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-4 text-sm text-gray-900">
                        {url.oldPath}
                      </td>
                      <td className="whitespace-nowrap px-4 text-sm text-gray-900">
                        {url.newPath}
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
      <Modal open={openDeleteModal} setOpen={setOpenDeleteModal} />
    </div>
  );
}
