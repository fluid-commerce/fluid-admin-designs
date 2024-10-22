import { useState } from "react";

import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";

import EditingCard from "../../components/order-details/EditingCard";
import OptionsCard from "../../components/order-details/OptionsCard";
import SettingsCard from "../../components/order-details/SettingsCard";
import Dropdown from "../../components/global/Dropdown";
import TextDropdown from "../../components/global/TextDropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Tabs from "../../components/global/Tabs";
import VarientsTable from "../../components/order-details/VarientsTable";
import ProductInfo from "../../components/order-details/ProductInfo";
import Header from "../../components/order-details/Header";
import CardContainer from "../../components/order-details/CardContainer";
import RenderIcon from "../../components/global/RenderIcon";
import SideDrawer from "../../components/global/SideDrawer";
import OrdersFeed from "../../components/orders/OrdersFeed";
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

export default function OrderDetails() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <main>
        <div className="rounded-t-lg">
          <div className="mx-auto max-w-7xl">
            <Header title={"R68745"} type={"Orders"} />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-6 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product Details */}
              <CardContainer>
                <div className="flex flex-col p-4 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <div className="text-xs font-medium text-gray-500">
                        Location
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        United States
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      $33.00
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-gray-500">
                      Delivery Method
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Economy
                    </div>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <img
                      src={dummyProductImage}
                      alt="Product Image"
                      className="h-16 w-16 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-900">
                        Apple Vision Pro
                      </div>
                      <div className="text-xs font-medium text-gray-500">
                        SKU: V05555{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContainer>

              {/* Varients Table */}
              <CardContainer>
                <div className="flex flex-col p-4 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <div className="text-xs font-medium text-gray-500">
                        Location
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        United States
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      $33.00
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-gray-500">
                      Delivery Method
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Economy
                    </div>
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <img
                      src={dummyProductImage}
                      alt="Product Image"
                      className="h-16 w-16 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-900">
                        Apple Vision Pro
                      </div>
                      <div className="text-xs font-medium text-gray-500">
                        SKU: V05555{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContainer>

              <CardContainer>
                <div className="flex flex-col p-4 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="flex flex-row justify-between">
                    <div className="text-xs font-medium text-gray-500">
                      Subtotal
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      3 items
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      $99.00
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-xs font-medium text-gray-500">
                      Shipping
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      Economy (54.0lb)
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      $15.00
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm font-medium text-gray-900">
                      Total
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      $114.00
                    </div>
                  </div>
                </div>
              </CardContainer>

              {/* Timeline */}
              <CardContainer>
                <div className="flex flex-col p-4 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <OrdersFeed />
                </div>
              </CardContainer>
            </div>
            {/* Right Column */}
            <div className="lg:col-start-3 space-y-6">
              <div className="flex flex-col space-y-2 -mx-4 p-4 rounded-lg shadow-sm ring-1 ring-gray-300 bg-white sm:mx-0">
                <div className="font-medium sm:text-sm">Notes</div>
                <div className="font-medium text-xs text-gray-500">
                  No notes from customer.
                </div>
              </div>
              <div className="flex flex-col space-y-2 -mx-4 p-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg ">
                <div className="text-lg/6 font-medium sm:text-sm">Customer</div>
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-gray-500">
                    Felipe Lee
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    felipe@gmail.com
                  </div>
                </div>
                <div className="text-lg/6 font-medium sm:text-sm">
                  Shipping Address
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-gray-500">
                    Felipe Lee
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    123 S. Main St.
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    Orem UT, 84057
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    United States
                  </div>
                </div>
                <div className="text-lg/6 font-medium sm:text-sm">
                  Billing Address
                </div>
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-gray-500">
                    Felipe Lee
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    123 S. Main St.
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    Orem UT, 84057
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    United States
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 -mx-4 p-4 rounded-lg shadow-sm ring-1 ring-gray-300 bg-white sm:mx-0">
                <div className="font-medium sm:text-sm">
                  Conversation Summary
                </div>
                <div className="font-medium text-xs text-gray-500">
                  No conversation details available for this order.
                </div>
              </div>
              <div className="-mx-4 p-4 space-y-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg ">
                <div>
                  <div className="flex flex-row items-center text-lg/6 font-medium sm:text-sm relative group">
                    Tags{" "}
                  </div>
                  <TextDropdown options={[]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </main>
    </>
  );
}
