import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  LinkIcon,
  PrinterIcon,
  HeartIcon,
  ArrowUpIcon,
  DocumentDuplicateIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

import Dropdown from "../global/Dropdown";

export default function Header() {
  return (
    <header className="p-6 bg-white mb-6 relative isolate z-50 rounded-t-lg">
      {/* <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                style={{
                  clipPath:
                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                }}
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div> */}

      <div aria-hidden="true" className="inset-8 -z-10 overflow-hidden">
        <div className="flex flex-row justify-between items-center space-x-2">
          <div className="flex flex-row items-center space-x-2 cursor-pointer">
            <ChevronLeftIcon className="h-4 w-4 text-gray-400" />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm/6 text-zinc-500"
            >
              Orders
            </a>
          </div>
          <div>
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="relative inline-flex items-center rounded-l-md px-1 py-1 bg-white text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center px-1 py-1 rounded-r-md bg-white text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="h-4 w-4" />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl py-2">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                /> */}
            <div className="flex flex-row space-x-3 justify-center align-center">
              <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 ">
                Apple Vision Pro
              </h1>
              <p className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 text-xs font-medium text-green-700">
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
            <Dropdown />
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-900">
                  Share
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-auto mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1 z-50">
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <LinkIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Copy Link
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <PrinterIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Pinterest
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      LinkedIn
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Facebook
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Reddit
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      X
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-900 ">
                  Actions
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
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
                      className="block flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <ArrowUpIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Send to Top
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <DocumentDuplicateIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Duplicate
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      <ArchiveBoxXMarkIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      />
                      Archive
                    </a>
                  </MenuItem>
                  <div className="border-t border-gray-300 my-2"></div>
                  <MenuItem>
                    <a
                      href="#"
                      className="block flex items-center px-4 py-2 text-sm text-red-700 data-[focus]:bg-gray-100 data-[focus]:text-red-900"
                    >
                      <TrashIcon
                        aria-hidden="true"
                        className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500"
                      />
                      Delete
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className="border-l border-gray-300 h-6 mx-2"></div>
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center bg-gray-200 rounded-md px-3 py-1 text-sm font-medium text-gray-900"
              >
                Preview
              </button>
            </span>
            <span>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <CheckIcon
                  aria-hidden="true"
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                />
                Save
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
