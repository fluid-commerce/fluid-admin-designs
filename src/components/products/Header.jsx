import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import RenderIcon from "../global/RenderIcon";
import Plus from "../../images/svgs/solid/plus.svg";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
const customerSegments = [
  { id: 1, name: "US customers" },
  { id: 2, name: "Purchased more than once" },
  { id: 3, name: "Abandoned checkout in past 30 days" },
  { id: 4, name: "International customers" },
];

export default function Header({
  title,
  actionButtonText,
  setOpenActiveDrawer,
}) {
  const [selectedSegment, setSelectedSegment] = useState(null);
  return (
    <header className="relative isolate z-50">
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
          <div
            style={{
              clipPath:
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
      </div> */}

      <div>
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                /> */}
            <div className="flex flex-row space-x-3 justify-center align-center">
              <h1 className="text-4xl font-custom font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-2">
            {title === "Customers" && (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex gap-2 items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600">
                    {selectedSegment ? selectedSegment : "Customer Segments"}
                    <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {customerSegments?.map((segment) => (
                      <MenuItem key={segment.id}>
                        <a
                          href="#"
                          className="block flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                          onClick={() => setSelectedSegment(segment.name)}
                        >
                          {segment.name}
                          {segment.name === selectedSegment && (
                            <span className="items-center pr-4 text-blue-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            )}
            {["Products", "Inventory", "Customers"].includes(title) && (
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600"
                >
                  Export
                </button>
              </span>
            )}
            <span className="hidden sm:block">
              {title === "URL Redirects" ? (
                <label className="inline-flex items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600">
                  Import
                  <input type="file" className="hidden" />
                </label>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600"
                >
                  Import
                </button>
              )}
            </span>
            <span>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-3 gap-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => setOpenActiveDrawer(true)}
              >
                <RenderIcon path={Plus} size={"w-3"} type={"save"} />
                {actionButtonText}
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
