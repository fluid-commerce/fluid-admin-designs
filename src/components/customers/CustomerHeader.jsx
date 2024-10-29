import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

import RenderIcon from "../global/RenderIcon";
import Dropdown from "../global/Dropdown";
import ChevronLeft from "../../images/svgs/solid/chevron-left.svg";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import Link from "../../images/svgs/solid/link.svg";
import Pinterest from "../../images/svgs/brands/square-pinterest.svg";
import LinkedIn from "../../images/svgs/brands/linkedin.svg";
import Facebook from "../../images/svgs/brands/facebook.svg";
import Reddit from "../../images/svgs/brands/reddit.svg";
import X from "../../images/svgs/brands/x-twitter.svg";
import ArrowUp from "../../images/svgs/solid/arrow-up-long.svg";
import Duplicate from "../../images/svgs/solid/copy.svg";
import Archive from "../../images/svgs/solid/box-archive.svg";
import Trash from "../../images/svgs/solid/trash-can.svg";
import Check from "../../images/svgs/solid/check.svg";
import ChevronRight from "../../images/svgs/solid/chevron-right.svg";

const languages = [
  { id: 1, name: "English (EN)" },
  { id: 2, name: "Spanish (ES)" },
  { id: 3, name: "French (FR)" },
  { id: 4, name: "German (DE)" },
  { id: 5, name: "Italian (IT)" },
  { id: 6, name: "Portuguese (PT)" },
  { id: 7, name: "Russian (RU)" },
  { id: 8, name: "Chinese (ZH)" },
  { id: 9, name: "Japanese (JA)" },
];

export default function CustomerHeader({ title, type }) {
  return (
    <header className="relative isolate z-50 rounded-t-lg">
      <div aria-hidden="true" className="inset-8 -z-10 overflow-hidden">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <a
              href="#"
              onClick={() => window.history.back()}
              className="flex items-center gap-x-2 text-xs text-zinc-500"
            >
              <RenderIcon path={ChevronLeft} size={"w-1.5"} />
              {`All ${type}`}
            </a>
          </div>
          <div>
            <span className="isolate inline-flex rounded-md">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md p-2 px-3 bg-white text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Previous</span>
                <RenderIcon path={ChevronLeft} size={"w-1.5"} />
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center p-2 px-3 rounded-r-md bg-white text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Next</span>
                <RenderIcon path={ChevronRight} size={"w-1.5"} />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl py-1">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                /> */}
            <div className="flex flex-row space-x-3 justify-center items-center">
              <h1 className="text-4xl font-custom font-bold text-zinc-950">
                {title}
              </h1>
              <p className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-500 mt-1 leading-none">
                <svg
                  class="h-1.5 w-1.5 fill-green-500"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx="3" cy="3" r="3"></circle>
                </svg>
                Active
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-2">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex gap-2 items-center bg-white rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600"
              >
                View Rep Account
              </button>
            </span>
            <div className="border-l border-gray-300 h-6 mx-1"></div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex gap-2 items-center bg-white rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600">
                  More
                  <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 gap-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <RenderIcon path={ArrowUp} size={"h-4 w-3"} />
                      Send to Top
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 gap-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <RenderIcon path={Duplicate} size={"h-4 w-4"} />
                      Duplicate
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 gap-4 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <RenderIcon path={Archive} size={"h-4 w-4"} />
                      Archive
                    </a>
                  </MenuItem>
                  <div className="border-t border-gray-300 my-2"></div>
                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 gap-4 text-sm text-red-500 data-[focus]:bg-gray-100 data-[focus]:text-red-500"
                    >
                      <RenderIcon
                        path={Trash}
                        size={"h5 w-4"}
                        type={"destructive"}
                      />
                      Delete
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <span>
              <button
                type="button"
                className="flex flex-row inline-flex gap-2 items-center bg-blue-600 shadow-sm rounded-md px-4 text-white py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-50 hover:text-blue-600"
              >
                {/* <RenderIcon path={Check} size={"w-3"} type={"save"} /> */}
                Add Order
              </button>
            </span>

            <Menu as="div" className="relative sm:hidden">
              <MenuButton className="-m-3 block p-3">
                <span className="sr-only">More</span>
                <EllipsisVerticalIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <button
                    type="button"
                    className="block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                  >
                    Preview
                  </button>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                  >
                    Edit
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
