import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

import PageContainer from "../../components/global/PageContainer";
import SettingsCard from "../../components/order-details/SettingsCard";
import TextDropdown from "../../components/global/TextDropdown";
import dummyProductImage from "../../images/apple-vision-pro.png";
import CustomerHeader from "../../components/customers/CustomerHeader";
import CardContainer from "../../components/order-details/CardContainer";
import Edit from "../../images/svgs/regular/pencil.svg";
import RenderIcon from "../../components/global/RenderIcon";
import ActivityFeed from "../../components/global/ActivityFeed";
import SideDrawer from "../../components/global/SideDrawer";
import CustomerStats from "../../components/customers/CustomerStats";
import LastOrder from "../../components/customers/LastOrder";
import Subscriptions from "../../components/customers/Subscriptions";
import EnvelopeIcon from "../../images/svgs/regular/envelope.svg";
import MailboxIcon from "../../images/svgs/regular/mailbox.svg";
import PhoneIcon from "../../images/svgs/regular/phone.svg";
import CreditCardIcon from "../../images/svgs/regular/credit-card.svg";
import PencilIcon from "../../images/svgs/regular/pencil.svg";
import EditCustomerDrawer from "../../components/customers/EditCustomerDrawer";

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

const collections = [{ id: 1, name: "Technology" }];

const labels = [{ id: 1, name: "Live Shop" }];

const notificationMethods = [
  { id: "email", title: "Allow" },
  { id: "sms", title: "Block" },
];

const stats = [
  { title: "Active Subscriptions", stat: "3" },
  { title: "Total Orders", stat: "12" },
  { title: "Total Products Received", stat: "108" },
];

const initialStat = { title: "Total Amount Spent", stat: "$1,234" };

export default function CustomerDetails() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  return (
    <>
      <main>
        <PageContainer>
          <CustomerHeader title={"John Doe"} type={"Customers"} />
          <CustomerStats stats={stats} initialStat={initialStat} />
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-6 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Last order placed */}
              <CardContainer>
                <LastOrder />
              </CardContainer>

              {/* Subscriptions */}
              <CardContainer>
                <Subscriptions />
              </CardContainer>

              {/* Activity Feed */}
              <CardContainer>
                <ActivityFeed />
              </CardContainer>
            </div>
            {/* Right Column */}
            <div className="lg:col-start-3 space-y-6">
              <CardContainer>
                <div className="p-4 space-y-4 text-sm">
                  <div className="flex flex-row justify-between items-center">
                    <div className="font-medium sm:text-sm text-gray-900 text-gray-900">
                      Customer ID{" "}
                      <span className="text-blue-600 pr-2">#ID20985674</span>
                    </div>
                    <div
                      className="cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 group"
                      onClick={() => {
                        setOpenEditDrawer(true);
                      }}
                    >
                      <RenderIcon path={PencilIcon} size={"w-4"} />
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="inline-block h-8 w-8 rounded-full"
                    />
                    <div className="text-blue-600">John Doe</div>
                  </div>
                  <div className="space-y-4 text-xs font-medium text-gray-500">
                    <div className="flex flex-row items-center gap-x-4">
                      <RenderIcon path={EnvelopeIcon} size={"w-4"} />
                      <div>john.doe@example.com</div>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                      <RenderIcon path={MailboxIcon} size={"w-4"} />
                      <div>123 S. Main Street American Fork, UT 84057</div>
                    </div>
                    <div className="flex flex-row items-center gap-x-4">
                      <RenderIcon path={PhoneIcon} size={"w-4"} />
                      <div>+1 (801) 758-4123</div>
                    </div>
                  </div>
                </div>
              </CardContainer>
              <CardContainer>
                <div className="p-4 space-y-4 text-sm">
                  <div className="font-medium sm:text-sm text-gray-900 text-gray-900">
                    Payment Methods
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    1 saved card
                  </div>

                  <div className="flex flex-row gap-x-2">
                    <RenderIcon path={CreditCardIcon} size={"w-4"} />
                    <div className="text-xs font-medium text-gray-500">
                      <div className="text-gray-900">Card •••• 6730</div>
                      <div>Exp: 01/2025</div>
                    </div>
                  </div>
                </div>
              </CardContainer>
              <CardContainer>
                <div className="p-4 space-y-4 text-sm">
                  <div className="font-medium sm:text-sm text-gray-900 text-gray-900">
                    Store Credit
                  </div>
                  <div className="text-xs font-medium text-gray-500">None</div>
                </div>
              </CardContainer>
              <CardContainer>
                <div className="p-4 space-y-4 text-sm">
                  <div className="font-medium sm:text-sm text-gray-900 text-gray-900">
                    Notes
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, voluptate eveniet laborum nulla mollitia veritatis
                    recusandae porro nostrum cum molestias.
                  </div>
                </div>
              </CardContainer>
            </div>
          </div>
        </PageContainer>
        <SideDrawer open={openDrawer} setOpen={setOpenDrawer} />
        <EditCustomerDrawer open={openEditDrawer} setOpen={setOpenEditDrawer} />
      </main>
    </>
  );
}
