import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ArrowLeftCircleIcon,
  Bars3Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
  PencilIcon,
  LinkIcon,
  CheckIcon,
  ShareIcon,
  ChevronDownIcon,
  PencilSquareIcon,
  DocumentDuplicateIcon,
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  UserPlusIcon,
  TrashIcon,
  PrinterIcon,
  ChevronLeftIcon,
  PhotoIcon,
  ChevronRightIcon,
  ArrowUpIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

import EditingCard from "../../components/order-details/EditingCard";
import OptionsCard from "../../components/order-details/OptionsCard";
import SettingsCard from "../../components/order-details/SettingsCard";
import Dropdown from "../../components/global/Dropdown";
import TextDropdown from "../../components/global/TextDropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Tabs from "../../components/global/Tabs";
import VarientsTable from "../../components/order-details/VarientsTable";
import ProductDetails from "../../components/order-details/ProductDetails";
import Header from "../../components/order-details/Header";
import CardContainer from "../../components/order-details/CardContainer";
const statusOptions = [
  { id: 1, name: "Active" },
  { id: 2, name: "Inactive" },
];
const purchaseOptions = [
  { id: 1, name: "One-click Fluid Checkout" },
  { id: 2, name: "Redirect on Buy Now Click" },
  { id: 3, name: "Instant Redirect to Buy Now Link" },
];

const internationalTaxTypes = [
  { id: 1, name: "None" },
  { id: 2, name: "Accommodation" },
  { id: 3, name: "Admission To Cultural Events" },
  { id: 4, name: "Admission To Entertainment Events" },
  { id: 5, name: "Admission To Sporting Events" },
  { id: 6, name: "Advertising" },
  { id: 7, name: "Agricultural Supplies" },
  { id: 8, name: "Baby Foodstuffs" },
  { id: 9, name: "Bikes" },
  { id: 10, name: "Books" },
  { id: 11, name: "Childrens Clothing" },
  { id: 12, name: "Domestic Fuel" },
  { id: 13, name: "Domestic Services" },
  { id: 14, name: "Ebooks" },
  { id: 15, name: "Electricity" },
  { id: 16, name: "Electronic Services" },
  { id: 18, name: "Hotels" },
  { id: 19, name: "Medical" },
  { id: 20, name: "Newspapers" },
  { id: 21, name: "Passenger Transport" },
  { id: 22, name: "Pharmaceuticals" },
  { id: 23, name: "Property Renovations" },
  { id: 24, name: "Restaurants" },
  { id: 25, name: "Social Housing" },
  { id: 26, name: "Water" },
  { id: 27, name: "Wine" },
];

const usaTaxTypes = [
  { id: 1, name: "Administrative And Support Services" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Construction And Real Property" },
  { id: 4, name: "Digital Products" },
  { id: 5, name: "Fees, Coupons, Dues And Charges" },
  { id: 6, name: "Food And Beverage" },
  { id: 7, name: "Freight" },
  { id: 8, name: "Health And Wellness" },
  { id: 9, name: "Information Technology" },
  { id: 10, name: "Medical Care" },
];

const themes = [{ id: 1, name: "Default" }];

const tags = [{ id: 1, name: "Promotion" }];

const labels = [{ id: 1, name: "Live Shop" }];

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIconMini,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

const notificationMethods = [
  { id: "email", title: "Allow" },
  { id: "sms", title: "Block" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OrderDetails() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <main>
        <div className="bg-white rounded-t-lg border-b border-gray-900/10 mb-6">
          <div className="mx-auto max-w-7xl">
            <Header />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-4">
              {/* Product Details */}
              <CardContainer>
                <ProductDetails />
              </CardContainer>

              {/* Varients Table */}
              <CardContainer>
                <VarientsTable />
              </CardContainer>
            </div>
            {/* Right Column */}
            <div className="lg:col-start-3 space-y-8">
              <div className="-mx-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm shadow-sm sm:mx-0">
                <div className="font-medium sm:text-sm">Status</div>
                <TextDropdown options={statusOptions} />
              </div>
              <div className="-mx-4 p-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg ">
                <div className="text-lg/6 font-medium sm:text-sm">
                  Purchase Options
                </div>
                <TextDropdown options={purchaseOptions} />
              </div>
              <div className="-mx-4 p-4 space-y-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg ">
                <div>
                  <div className="text-lg/6 font-medium sm:text-sm">
                    USA Tax Category
                  </div>
                  <TextDropdown options={usaTaxTypes} />
                  <p className="text-xs/6 text-slate-500">
                    Determines US Tax Rates
                  </p>
                </div>
                <div>
                  <div className="flex flex-row items-center text-lg/6 font-medium sm:text-sm relative group">
                    International Tax Type{" "}
                    <InformationCircleIcon className="h-4 w-5 text-slate-400" />
                    <span className="absolute hidden group-hover:inline-block bg-gray-800 text-white text-xs rounded py-1 px-2 -mt-8 -ml-2 z-10">
                      International Tax Type Category
                    </span>
                  </div>
                  <TextDropdown options={internationalTaxTypes} />
                </div>
              </div>
              <SettingsCard />
              <div className="divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div className="p-3">
                  {/* Content goes here */}
                  {/* We use less vertical padding on card headers on desktop than on body sections */}
                  <div className="text-lg/6 font-medium sm:text-sm">
                    Product Organization
                  </div>
                </div>
                <div className="py-5 px-3">
                  {/* Content goes here */}
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 space-y-4"
                  >
                    <li>
                      <div>
                        <div className="text-sm font-medium sm:text-sm">
                          Theme
                        </div>
                        <TextDropdown options={themes} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="pt-2 text-sm font-medium sm:text-sm">
                          Product Collection
                        </div>
                        <TextDropdown options={[]} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="pt-2 text-sm font-medium sm:text-sm">
                          Tags
                        </div>
                        <TextDropdown options={tags} />
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="pt-2 text-sm font-medium sm:text-sm">
                          Label
                        </div>
                        <TextDropdown options={labels} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div className="p-3">
                  {/* Content goes here */}
                  {/* We use less vertical padding on card headers on desktop than on body sections */}
                  <div className="text-lg/6 font-medium sm:text-sm">SEO</div>
                </div>
                <div className="py-5 px-3">
                  {/* Content goes here */}
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 space-y-4"
                  >
                    <li>
                      <fieldset className="space-y-2">
                        <legend className="text-lg/6 font-medium sm:text-sm">
                          Search Engines
                        </legend>
                        <div className="space-y-6 space-x-5 sm:flex sm:items-center sm:space-y-0">
                          {notificationMethods.map((notificationMethod) => (
                            <div
                              key={notificationMethod.id}
                              className="flex items-center"
                            >
                              <input
                                defaultChecked={
                                  notificationMethod.id === "email"
                                }
                                id={notificationMethod.id}
                                name="notification-method"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                              />
                              <label
                                htmlFor={notificationMethod.id}
                                className="ml-3 block text-xs font-medium leading-6 text-gray-900"
                              >
                                {notificationMethod.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </li>
                    <li>
                      <div className="flex flex-col space-y-2">
                        <div className="pt-2 text-lg/6 font-medium sm:text-sm">
                          Search Engine Listing
                        </div>
                        <div className="flex flex-row space-x-2">
                          <img
                            src={dummyProductImage}
                            alt="Product Image"
                            className="h-[calc(2rem+2rem)] w-[calc(2rem+2rem)] flex-none rounded-md object-cover object-center"
                          />
                          <div>
                            <h4 className="text-sm/5 font-medium text-zinc-950">
                              Apple Vision Pro
                            </h4>
                            <p className="text-xs/5 font-normal text-zinc-500">
                              Apple Vision Pro is apples first 3D vision camera.
                              You can capture magical spacial photos and...
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}