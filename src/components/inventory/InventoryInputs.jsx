import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import RenderIcon from "../global/RenderIcon";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";

export default function InventoryInputs({
  value,
  type,
  setInputs,
  inputs,
  index,
}) {
  return (
    <div className="flex items-center gap-2">
      <Menu
        as="div"
        className="relative inline-block text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="available"
            id="available"
            placeholder="Available"
            value={value}
            onChange={(e) => {
              const newInputs = [...inputs];
              newInputs[index] = {
                ...newInputs[index],
                [type]: e.target.value,
              };
              setInputs(newInputs);
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-[4rem] rounded-md border-0 bg-white pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          <MenuButton
            className="flex items-center rounded-full bg-white text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <RenderIcon path={ChevronDown} size={"w-3"} />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute flex right-0 mt-2 w-56 z-40 p-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <div>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <option>Move to Unavailable</option>
                  <option>Move to Available</option>
                </select>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quantity"
                  className="block text-sm/6 pt-2 font-medium text-gray-900"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  name="available"
                  id="available"
                  placeholder="0"
                  // value={product.available}
                  // onChange={(e) => {
                  //   const newInputs = [...inputs];
                  //   newInputs[index] = {
                  //     ...newInputs[index],
                  //     available: e.target.value,
                  //   };
                  //   setInputs(newInputs);
                  // }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full rounded-md border-0 bg-white pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quantity"
                  className="block text-sm/6 pt-2 font-medium text-gray-900"
                >
                  Reason
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="block w-full rounded-md border-0 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <option>Damaged</option>
                  <option>Received</option>
                  <option>Other</option>
                </select>
              </div>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
