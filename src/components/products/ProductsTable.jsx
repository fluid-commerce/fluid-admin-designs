"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { ComboboxInput, Combobox } from "@headlessui/react";

import TextDropdown from "../global/TextDropdown";
import Dropdown from "../global/Dropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Plus from "../../images/svgs/solid/plus.svg";
import RenderIcon from "../global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
import ProductTabs from "./ProductTabs";
const variants = [
  {
    name: "One",
    inventory: "0",
    sku: "",
    type: "Type",
  },
  {
    name: "Two",
    inventory: "0",
    sku: "",
    type: "Type",
  },
  {
    name: "Three",
    inventory: "0",
    sku: "",
    type: "Type",
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function VarientsTable() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [inputs, setInputs] = useState(variants);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Type");
  const languages = [
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

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedVariants.length > 0 && selectedVariants.length < variants.length;
    setChecked(selectedVariants.length === variants.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      // Add a null check here
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
      <div className="p-3 sm:flex sm:items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <RenderIcon path={MagnifyingGlass} size={"w-4"} />
              </div>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Search Products"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <ProductTabs />
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
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Inventory
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Sales Channels
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Markets
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      B2B Categories
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-3 py-2 text-left text-sm font-medium text-gray-900"
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
                      onClick={() => (window.location.href = "/orders")}
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {/* {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )} */}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          // value={person.email}
                          // checked={selectedPeople.includes(person)}
                          // onChange={(e) =>
                          //   setSelectedPeople(
                          //     e.target.checked
                          //       ? [...selectedPeople, person]
                          //       : selectedPeople.filter((p) => p !== person)
                          //   )
                          // }
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-2 px-4 text-sm font-medium",
                          selectedVariants.includes(variant)
                            ? "text-indigo-600"
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
                        Type
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        Active
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2,650 in stock for 3 variants
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        2
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        0
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Beverages
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Root Beer
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Root Beer Club
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
