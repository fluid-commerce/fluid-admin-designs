import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import CreditCardIcon from "../../images/svgs/regular/credit-card.svg";
import PencilIcon from "../../images/svgs/regular/pencil.svg";
import TrashIcon from "../../images/svgs/regular/trash-can.svg";
import PlusIcon from "../../images/svgs/regular/plus.svg";
import XMarkIcon from "../../images/svgs/regular/xmark-large.svg";
import CheckIcon from "../../images/svgs/regular/check.svg";
import RenderIcon from "../global/RenderIcon";
import AddCardForm from "./AddCardForm";
export default function EditCustomerDrawer({ open, setOpen }) {
  const [displayAddCard, setDisplayAddCard] = useState(false);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto">
                  <div className="border-b border-gray-300 px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                        Edit Customer Information
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md text-gray-900 hover:text-gray-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
                          <RenderIcon path={XMarkIcon} size={"w-4"} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="divide-y divide-gray-200 px-4 sm:px-6">
                      <div className="space-y-6 pb-5 pt-6">
                        <div>
                          <label
                            htmlFor="project-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First Name
                          </label>
                          <div className="mt-2">
                            <input
                              id="project-name"
                              name="project-name"
                              type="text"
                              placeholder="First Name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Last Name
                          </label>
                          <div className="mt-2">
                            <input
                              id="project-name"
                              name="project-name"
                              type="text"
                              placeholder="Last Name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              id="project-name"
                              name="project-name"
                              type="text"
                              placeholder="Email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="project-name"
                              name="project-name"
                              type="text"
                              placeholder="Phone Number"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-row justify-between items-center">
                            <div className="text-base font-semibold leading-6 text-gray-900">
                              Payment Methods
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                              {displayAddCard && (
                                <div
                                  className="cursor-pointer flex flex-row items-center gap-x-2 text-white bg-blue-600 rounded-md px-3 py-1 text-sm font-medium hover:bg-blue-500"
                                  onClick={() =>
                                    setDisplayAddCard(!displayAddCard)
                                  }
                                >
                                  {" "}
                                  <RenderIcon
                                    path={CheckIcon}
                                    size={"w-4"}
                                    type={"save"}
                                  />
                                  Add Card
                                </div>
                              )}
                              <div
                                className="cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 group"
                                onClick={() =>
                                  setDisplayAddCard(!displayAddCard)
                                }
                              >
                                <RenderIcon
                                  path={displayAddCard ? XMarkIcon : PlusIcon}
                                  size={"w-4"}
                                />
                              </div>
                            </div>
                          </div>
                          {displayAddCard && <AddCardForm />}
                          <div className="text-sm py-2 text-gray-500">
                            1 card saved
                          </div>
                          <div className="flex flex-row justify-between w-full rounded-md border-0 bg-gray-50 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm ">
                            <div className="flex flex-row items-center gap-x-2">
                              <RenderIcon path={CreditCardIcon} size={"w-4"} />
                              <div className="text-xs font-medium text-gray-500">
                                <div className="text-gray-900">
                                  Card •••• 6730
                                </div>
                                <div>Exp: 01/2025</div>
                              </div>
                            </div>
                            <Menu
                              as="div"
                              className="relative inline-block text-left"
                            >
                              <div className="text-gray-500 hover:text-gray-900">
                                <MenuButton className="text-xl pb-2">
                                  ...
                                </MenuButton>
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
                                      <RenderIcon
                                        path={PencilIcon}
                                        size={"w-3"}
                                      />
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
                                        path={TrashIcon}
                                        size={"w-3"}
                                        type={"destructive"}
                                      />
                                      Delete
                                    </a>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </Menu>
                          </div>
                          <div className="flex flex-col space-y-2 mt-6">
                            <div className="text-base font-semibold leading-6 text-gray-900">
                              Notes
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Velit expedita recusandae
                              architecto repellendus quas, debitis laborum
                              facilis at. Nesciunt, eos.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4 py-4">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
