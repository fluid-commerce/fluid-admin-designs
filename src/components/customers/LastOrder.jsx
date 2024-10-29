import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import dummyProductImage from "../../images/apple-vision-pro.png";
import RenderIcon from "../global/RenderIcon";
import Pencil from "../../images/svgs/solid/pencil.svg";
import Trash from "../../images/svgs/solid/trash-can.svg";
import PaginationFooter from "../global/PaginationFooter";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const orders = [
  {
    id: "#1234567890",
    productName: "Product 1",
    type: "One-time purchase",
    quantity: 1,
    price: "$100",
    orderDate: "2024-01-01",
    status: "Paid",
  },
  {
    id: "#1234567891",
    productName: "Product 2",
    type: "Subscription",
    quantity: 2,
    price: "$200",
    orderDate: "2024-02-01",
    status: "Paid",
  },
  {
    id: "#1234567892",
    productName: "Product 3",
    type: "One-time purchase",
    quantity: 3,
    price: "$300",
    orderDate: "2024-03-01",
    status: "Paid",
  },
  {
    id: "#1234567893",
    productName: "Product 4",
    type: "Subscription",
    quantity: 4,
    price: "$400",
    orderDate: "2024-04-01",
    status: "Paid",
  },
  {
    id: "#1234567894",
    productName: "Product 5",
    type: "One-time purchase",
    quantity: 5,
    price: "$500",
    orderDate: "2024-05-01",
    status: "Paid",
  },
];

export default function LastOrder() {
  const [selectedOrders, setSelectedOrders] = useState([]);
  return (
    <div>
      <div className="p-4 text-sm font-medium text-base font-medium leading-6 text-gray-900">
        Orders
      </div>
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50 border-t border-gray-200">
          <tr>
            <th
              scope="col"
              className="w-auto py-2 px-4 text-left text-xs font-medium text-gray-500"
            >
              Product
            </th>
            <th
              scope="col"
              className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
            >
              Status
            </th>
            <th
              scope="col"
              className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
            >
              ID
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
              Quantity
            </th>
            <th
              scope="col"
              className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
            >
              Price
            </th>
            <th
              scope="col"
              className="w-auto px-3 py-2 text-left text-xs font-medium text-gray-500"
            >
              Order Date
            </th>
            <th scope="col" className="w-auto relative py-2 pl-3 pr-4 sm:pr-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders?.map((product, index) => (
            <tr
              key={product.name}
              className={classNames(
                selectedOrders.includes(product)
                  ? "bg-gray-50"
                  : "hover:bg-gray-50 cursor-pointer",
                "h-[77px]"
              )}
            >
              <td
                className={classNames(
                  "whitespace-nowrap px-4 text-sm font-medium min-w-[10rem]",
                  selectedOrders.includes(product)
                    ? "text-indigo-600"
                    : "text-gray-900"
                )}
              >
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={dummyProductImage}
                    alt="Product Image"
                    className="h-12 w-12 flex-none rounded-md object-cover object-center"
                  />
                  <div className="text-sm font-medium">
                    {product.productName}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
                  Paid
                </span>
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                {product.id}
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                {product.type}
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                {product.quantity}
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                {product.price}
              </td>
              <td className="whitespace-nowrap px-3 text-sm text-gray-500">
                {product.orderDate}
              </td>
              <td className="whitespace-nowrap py-7 pl-3 text-right text-sm font-medium sm:pr-3">
                <Menu as="div" className="relative inline-block text-left">
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
      <PaginationFooter />
    </div>
  );
}
