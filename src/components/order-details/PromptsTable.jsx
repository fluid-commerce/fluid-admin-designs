"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  TrashIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

import TextDropdown from "../global/TextDropdown";
import Dropdown from "../global/Dropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Plus from "../../images/svgs/solid/plus.svg";
import RenderIcon from "../global/RenderIcon";

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

export default function PromptsTable() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState([]);
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
          <h1 className="text-sm font-medium text-base font-medium leading-6 text-gray-900">
            Prompts
          </h1>
          <button
            type="button"
            className="inline-flex items-center bg-gray-100 gap-2 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 group"
          >
            <RenderIcon path={Plus} size={"w-3"} />
            Add Prompt
          </button>
        </div>
      </div>
      <div className="flow-root">
        <div className="">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 border-t border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/12 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="w-10/12 py-2 px-4 text-left text-xs font-medium text-gray-500"
                    >
                      Prompt
                    </th>
                    <th
                      scope="col"
                      className="w-1/12 px-3 py-2 text-left text-xs font-medium text-gray-500"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {variants.map((variant) => (
                    <tr
                      key={variant.name}
                      className={classNames(
                        selectedVariants.includes(variant)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer"
                      )}
                    >
                      <td className="w-1/12 whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        Type
                      </td>
                      <td
                        className={classNames(
                          "w-10/12 whitespace-nowrap py-2 px-4 text-sm font-medium",
                          selectedVariants.includes(variant)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        <div className="w-full flex flex-row items-center gap-4">
                          <div className="text-sm font-medium">
                            {variant.name}
                          </div>
                        </div>
                      </td>

                      <td className="w-1/12 whitespace-nowrap py-4 pl-3 text-sm font-medium sm:pr-3">
                        {/* <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          ...<span className="sr-only">, {variant.name}</span>
                        </a> */}
                        <Menu as="div" className="relative inline-block">
                          <div className="text-gray-600 hover:text-gray-900">
                            <MenuButton className="">...</MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                  <PencilIcon className="w-4 h-4 text-gray-400" />
                                  Edit
                                </a>
                              </MenuItem>
                              <div className="border-t border-gray-300 my-2"></div>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-red-700 data-[focus]:bg-gray-100 data-[focus]:text-red-900"
                                >
                                  <TrashIcon className="w-4 h-4 text-red-400 group-hover:text-red-500" />
                                  Delete
                                </a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </Menu>
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
