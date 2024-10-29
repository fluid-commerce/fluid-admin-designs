"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import dummyProductImage from "../../images/apple-vision-pro.png";
import RenderIcon from "../global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
import ProductTabs from "../products/ProductTabs";
import PaginationFooter from "../global/PaginationFooter";
import Dropdown from "../global/Dropdown";
import ChevronUp from "../../images/svgs/solid/chevron-up.svg";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import ArrowUp from "../../images/svgs/regular/arrow-up.svg";
import ArrowDown from "../../images/svgs/regular/arrow-down.svg";

import InventoryInputs from "./InventoryInputs";

const inventoryList = [
  {
    product: "Apple Vision Pro",
    sku: "0",
    unavailable: "10",
    committed: "0",
    available: "5",
    on_hand: "15",
  },
  {
    product: "Apple Vision Pro",
    sku: "0",
    unavailable: "5",
    committed: "0",
    available: "0",
    on_hand: "5",
  },
  {
    product: "Apple Vision Pro",
    sku: "0",
    unavailable: "0",
    committed: "10",
    available: "5",
    on_hand: "15",
  },
  {
    product: "Samsung Galaxy S21",
    sku: "1",
    unavailable: "2",
    committed: "5",
    available: "8",
    on_hand: "15",
  },
  {
    product: "Google Pixel 6",
    sku: "2",
    unavailable: "1",
    committed: "3",
    available: "6",
    on_hand: "10",
  },
  {
    product: "Sony WH-1000XM4",
    sku: "3",
    unavailable: "0",
    committed: "2",
    available: "10",
    on_hand: "12",
  },
  {
    product: "Dell XPS 13",
    sku: "4",
    unavailable: "4",
    committed: "1",
    available: "5",
    on_hand: "10",
  },
  {
    product: "Apple MacBook Pro",
    sku: "5",
    unavailable: "3",
    committed: "4",
    available: "7",
    on_hand: "14",
  },
  {
    product: "Microsoft Surface Pro",
    sku: "6",
    unavailable: "2",
    committed: "3",
    available: "5",
    on_hand: "10",
  },
  {
    product: "Amazon Echo Dot",
    sku: "7",
    unavailable: "1",
    committed: "2",
    available: "7",
    on_hand: "10",
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
  { name: "Available", href: "#", current: false },
  { name: "Committed", href: "#", current: false },
  { name: "Unavailable", href: "#", current: false },
  { name: "On Hand", href: "#", current: false },
];

const productTypeFilters = [
  {
    name: "All Products",
    id: 1,
  },
  {
    name: "Electronics",
    id: 2,
  },
  {
    name: "Furniture",
    id: 3,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InventoryTable() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState([]);
  const [inputs, setInputs] = useState(inventoryList);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedInventory.length > 0 &&
      selectedInventory.length < inventoryList.length;
    setChecked(selectedInventory.length === inventoryList.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedInventory]);

  function toggleAll() {
    setSelectedInventory(checked || indeterminate ? [] : inventoryList);
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
                placeholder="Search Inventory"
                className="block w-full rounded-md border-0 pl-10 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <Dropdown options={productTypeFilters} />
          </div>
        </div>
      </div>
      <div className="flow-root overflow-x-auto">
        <div className="inline-block w-full">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <div className="relative">
                {selectedInventory.length > 0 && (
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
                      <Menu>
                        <MenuButton>
                          <div className="flex flex-row items-center gap-2 hover:cursor-pointer group">
                            Product
                            <div className="opacity-0 group-hover:opacity-100">
                              <RenderIcon
                                path={ChevronDown}
                                size={"w-3"}
                                type={"nav"}
                              />
                            </div>
                          </div>
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute overflow-hidden rounded-md flex flex-col space-y-2 mt-2 w-40 z-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowUp}
                                size={"w-3"}
                                type={"black"}
                              />
                              A-Z
                            </a>
                          </MenuItem>
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowDown}
                                size={"w-3"}
                                type={"black"}
                              />
                              Z-A
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      SKU
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      <Menu>
                        <MenuButton>
                          <div className="flex flex-row items-center gap-2 hover:cursor-pointer group">
                            Unavailable
                            <div className="opacity-0 group-hover:opacity-100">
                              <RenderIcon
                                path={ChevronDown}
                                size={"w-3"}
                                type={"nav"}
                              />
                            </div>
                          </div>
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute overflow-hidden rounded-md flex flex-col space-y-2 mt-2 w-40 z-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowUp}
                                size={"w-3"}
                                type={"black"}
                              />
                              Highest-Lowest
                            </a>
                          </MenuItem>
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowDown}
                                size={"w-3"}
                                type={"black"}
                              />
                              Lowest-Highest
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      <Menu>
                        <MenuButton>
                          <div className="flex flex-row items-center gap-2 hover:cursor-pointer group">
                            Committed
                            <div className="opacity-0 group-hover:opacity-100">
                              <RenderIcon
                                path={ChevronDown}
                                size={"w-3"}
                                type={"nav"}
                              />
                            </div>
                          </div>
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute overflow-hidden rounded-md flex flex-col space-y-2 mt-2 w-40 z-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowUp}
                                size={"w-3"}
                                type={"black"}
                              />
                              Highest-Lowest
                            </a>
                          </MenuItem>
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowDown}
                                size={"w-3"}
                                type={"black"}
                              />
                              Lowest-Highest
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      <Menu>
                        <MenuButton>
                          <div className="flex flex-row items-center gap-2 hover:cursor-pointer group">
                            Available
                            <div className="opacity-0 group-hover:opacity-100">
                              <RenderIcon
                                path={ChevronDown}
                                size={"w-3"}
                                type={"nav"}
                              />
                            </div>
                          </div>
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute overflow-hidden rounded-md flex flex-col space-y-2 mt-2 w-40 z-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowUp}
                                size={"w-3"}
                                type={"black"}
                              />
                              Highest-Lowest
                            </a>
                          </MenuItem>
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowDown}
                                size={"w-3"}
                                type={"black"}
                              />
                              Lowest-Highest
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      <Menu>
                        <MenuButton>
                          <div className="flex flex-row items-center gap-2 hover:cursor-pointer group">
                            On Hand
                            <div className="opacity-0 group-hover:opacity-100">
                              <RenderIcon
                                path={ChevronDown}
                                size={"w-3"}
                                type={"nav"}
                              />
                            </div>
                          </div>
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute overflow-hidden rounded-md flex flex-col space-y-2 mt-2 w-40 z-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowUp}
                                size={"w-3"}
                                type={"black"}
                              />
                              Highest-Lowest
                            </a>
                          </MenuItem>
                          <MenuItem className="block flex px-4 py-2 text-xs font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                            <a
                              href="#"
                              className="flex flex-row items-center gap-2"
                            >
                              <RenderIcon
                                path={ArrowDown}
                                size={"w-3"}
                                type={"black"}
                              />
                              Lowest-Highest
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {inputs?.map((product, index) => (
                    <tr
                      key={product.name}
                      className={classNames(
                        selectedInventory.includes(product)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer",
                        "h-[77px]"
                      )}
                      onClick={() =>
                        (window.location.href = "/products/details")
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={selectedInventory.includes(product)}
                          onChange={(e) =>
                            setSelectedInventory(
                              e.target.checked
                                ? [...selectedInventory, product]
                                : selectedInventory.filter((v) => v !== product)
                            )
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-2 px-4 text-sm font-medium",
                          selectedInventory.includes(product)
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
                            {product.product}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.sku}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {product.unavailable}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        {product.committed}
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        <InventoryInputs
                          value={product.available}
                          type={"available"}
                          setInputs={setInputs}
                          inputs={inputs}
                          index={index}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        <InventoryInputs
                          value={product.on_hand}
                          type={"available"}
                          setInputs={setInputs}
                          inputs={inputs}
                          index={index}
                        />
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
