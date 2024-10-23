import { useState } from "react";

import PageContainer from "../../components/global/PageContainer";
import TextDropdown from "../../components/global/TextDropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import Header from "../../components/order-details/Header";
import CardContainer from "../../components/order-details/CardContainer";
import RenderIcon from "../../components/global/RenderIcon";
import SideDrawer from "../../components/global/SideDrawer";
import OrdersFeed from "../../components/orders/OrdersFeed";

export default function OrderDetails() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <main>
        <PageContainer>
          <Header title={"R68745"} type={"Orders"} />
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-6 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Details */}
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
              <div className="flex flex-col space-y-1 -mx-4 p-4 rounded-lg shadow-sm bg-white sm:mx-0">
                <div className="font-medium sm:text-sm">Notes</div>
                <div className="font-medium text-xs text-gray-500">
                  No notes from customer.
                </div>
              </div>
              <div className="flex flex-col space-y-1 -mx-4 p-4 bg-white shadow sm:rounded-lg shadow-sm sm:mx-0 sm:rounded-lg ">
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
              <div className="flex flex-col space-y-1 -mx-4 p-4 rounded-lg shadow-sm bg-white sm:mx-0">
                <div className="font-medium sm:text-sm">
                  Conversation Summary
                </div>
                <div className="font-medium text-xs text-gray-500">
                  No conversation details available for this order.
                </div>
              </div>
              <div className="-mx-4 p-4 space-y-4 bg-white shadow sm:rounded-lg shadow-sm sm:mx-0 sm:rounded-lg">
                <div>
                  <div className="flex flex-row items-center text-lg/6 font-medium sm:text-sm relative group">
                    Tags{" "}
                  </div>
                  <TextDropdown options={[]} />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
        <SideDrawer open={openDrawer} setOpen={setOpenDrawer} />
      </main>
    </>
  );
}
