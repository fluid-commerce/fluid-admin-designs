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
import Trash from "../../images/svgs/solid/trash-can.svg";
import Pencil from "../../images/svgs/solid/pencil.svg";
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
          <h1 className="text-sm font-medium text-base font-medium leading-6 text-gray-900">
            Variants
          </h1>
          <button
            type="button"
            className="inline-flex items-center bg-white ring-1 ring-gray-300 gap-2 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 group"
          >
            <RenderIcon path={Plus} size={"w-3"} />
            Add Variant
          </button>
        </div>
      </div>
      <div className="flow-root">
        <div className="inline-block w-full">
          <div className="inline-block min-w-full align-middle">
            <div className="inline-block w-full">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <thead className="bg-gray-50 border-t border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="w-full py-2 px-4 text-left text-xs font-medium text-gray-500"
                    >
                      Variant
                    </th>
                    <th
                      scope="col"
                      className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      Inventory
                    </th>
                    <th
                      scope="col"
                      className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
                    >
                      SKU
                    </th>
                    <th
                      scope="col"
                      className="w-auto relative py-2 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inputs?.map((variant, index) => (
                    <tr
                      key={variant.name}
                      className={classNames(
                        selectedVariants.includes(variant)
                          ? "bg-gray-50"
                          : "hover:bg-gray-50 cursor-pointer",
                        "h-[77px]"
                      )}
                    >
                      <td
                        className={classNames(
                          "whitespace-nowrap px-4 text-sm font-medium min-w-[10rem]",
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
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        Type
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        <input
                          type="text"
                          name="inventory"
                          id="inventory"
                          value={variant.inventory}
                          onChange={(e) => {
                            const newInputs = [...inputs];
                            newInputs[index] = {
                              ...newInputs[index],
                              inventory: e.target.value,
                            };
                            setInputs(newInputs);
                          }}
                          className="w-full rounded-md border-0 bg-white pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                        <input
                          type="text"
                          name="sku"
                          id="sku"
                          placeholder="SKU"
                          value={variant.sku}
                          onChange={(e) => {
                            const newInputs = [...inputs];
                            newInputs[index] = {
                              ...newInputs[index],
                              sku: e.target.value,
                            };
                            setInputs(newInputs);
                          }}
                          className="w-[4rem] rounded-md border-0 bg-white pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </td>
                      <td className="whitespace-nowrap py-7 pl-3 text-right text-sm font-medium sm:pr-3">
                        {/* <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          ...<span className="sr-only">, {variant.name}</span>
                        </a> */}
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div className="text-gray-500 hover:text-gray-900">
                            <MenuButton className="">...</MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-gray-500 data-[focus]:bg-gray-100"
                                >
                                  <RenderIcon path={Pencil} size={"w-3"} />
                                  Edit
                                </a>
                              </MenuItem>
                              <div className="border-t border-gray-300 my-2"></div>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-2 px-4 py-2 text-sm text-red-500 data-[focus]:bg-gray-100"
                                >
                                  <RenderIcon
                                    path={Trash}
                                    size={"w-3"}
                                    type={"destructive"}
                                  />
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
