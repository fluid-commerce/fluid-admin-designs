/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars4Icon,
  CalendarIcon,
  CodeBracketIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import { Avatar } from "../../components/catalyst-ui-kit/avatar";

import RenderIcon from "../../components/global/RenderIcon";
import PageIcon from "../../images/svgs/regular/page.svg";
import dummyProductImage from "../../images/apple-vision-pro.png";

const items = [
  {
    id: 1,
    name: "Apple Vision Pro",
    description: "3 in stock. 4 on order.",
    url: "/products/details",
    type: "product",
    color: "bg-indigo-500",
    icon: dummyProductImage,
  },
  {
    id: 2,
    name: "Orders",
    url: "/orders",
    type: "page",
    color: "bg-indigo-500",
    icon: PageIcon,
  },
  {
    id: 3,
    name: "Products",
    url: "/products",
    type: "page",
    color: "bg-indigo-500",
    icon: PageIcon,
  },
  {
    id: 4,
    name: "Customers",
    url: "/customers",
    type: "page",
    color: "bg-indigo-500",
    icon: PageIcon,
  },
  {
    id: 5,
    name: "Inventory",
    url: "/inventory",
    type: "page",
    color: "bg-indigo-500",
    icon: PageIcon,
  },
  {
    id: 6,
    name: "URL Redirects",
    url: "/url-redirects",
    type: "page",
    color: "bg-indigo-500",
    icon: PageIcon,
  },
  {
    id: 7,
    name: "Mutha Body Butter",
    url: "#/images",
    type: "media",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/MUTHA_BodyButter_Glow_PDP_1.jpg?v=1712609424&width=1512",
  },
  {
    id: 8,
    name: "Mutha Night Cream",
    url: "#/images",
    type: "media",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/Copy_of_PDP_Draft_2_cdb880d7-7db9-414b-b691-f85441f43e52.png?v=1722023609&width=1080",
  },
  {
    id: 9,
    name: "Mutha Body Oil",
    url: "#/images",
    type: "media",
    mediaType: "Video",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/Mini_Body_Oil_PDP.png?v=1723480841&width=1080",
  },
  {
    id: 10,
    name: "Mutha Glow Butter",
    url: "#/images",
    type: "media",
    mediaType: "PDF",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/products/MiniBodyButter_0031-R2_3.jpg?v=1705440519&width=1080",
  },
  {
    id: 11,
    name: "John Doe",
    url: "/customers/details",
    type: "contact",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/MUTHA_BodyButter_Glow_PDP_1.jpg?v=1712609424&width=1512",
  },
  {
    id: 12,
    name: "Order #123456",
    customer: "John Doe",
    status: "Paid",
    date: "2024-01-01",
    time: "12:00 PM",
    url: "/orders/details",
    type: "order",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/MUTHA_BodyButter_Glow_PDP_1.jpg?v=1712609424&width=1512",
  },
  {
    id: 17,
    name: "Order #654321",
    customer: "Jane Doe",
    status: "Pending",
    date: "2024-02-15",
    time: "3:30 PM",
    url: "/orders/details",
    type: "order",
    color: "bg-red-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/Mini_Body_Oil_PDP.png?v=1723480841&width=1080",
  },
  {
    id: 18,
    name: "Order #789012",
    customer: "Alice Smith",
    status: "Shipped",
    date: "2024-03-10",
    time: "9:00 AM",
    url: "/orders/details",
    type: "order",
    color: "bg-green-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/products/MiniBodyButter_0031-R2_3.jpg?v=1705440519&width=1080",
  },
  {
    id: 19,
    name: "Order #345678",
    customer: "Bob Johnson",
    status: "Delivered",
    date: "2024-04-05",
    time: "1:45 PM",
    url: "/orders/details",
    type: "order",
    color: "bg-blue-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/products/Blank2192x2192copy4_3.jpg?v=1665161621&width=720",
  },
  {
    id: 20,
    name: "Order #901234",
    customer: "Charlie Brown",
    status: "Cancelled",
    date: "2024-05-20",
    time: "11:15 AM",
    url: "/orders/details",
    type: "order",
    color: "bg-yellow-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/Copy_of_PDP_Draft_2_cdb880d7-7db9-414b-b691-f85441f43e52.png?v=1722023609&width=1080",
  },
  {
    id: 13,
    name: "Enrollments",
    description: "3 in stock. 4 on order.",
    url: "/products/details",
    type: "product",
    color: "bg-indigo-500",
    icon: dummyProductImage,
  },
  {
    id: 14,
    name: "Jane Doe",
    url: "/customers/details",
    type: "contact",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/MUTHA_BodyButter_Glow_PDP_1.jpg?v=1712609424&width=1512",
  },
  {
    id: 15,
    name: "Christopher Doe",
    url: "/customers/details",
    type: "contact",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/files/MUTHA_BodyButter_Glow_PDP_1.jpg?v=1712609424&width=1512",
  },
  {
    id: 16,
    name: "Mutha Candle",
    url: "#/images",
    type: "media",
    mediaType: "Image",
    color: "bg-indigo-500",
    icon: "https://mutha.com/_cdn/shopify/webp/s/files/1/0108/3185/5697/products/Blank2192x2192copy4_3.jpg?v=1665161621&width=720",
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="relative">
      <Combobox as="div" className="relative">
        <MagnifyingGlassIcon
          className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <ComboboxInput
          autoFocus
          className="h-12 w-full border-0 bg-white pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm rounded-md"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
        />

        {filteredItems.length > 0 && (
          <ComboboxOptions
            static
            className="absolute top-10 max-h-96 w-[30rem] transform-gpu scroll-py-3 overflow-y-auto p-3 z-50 bg-white rounded-md shadow-lg"
          >
            {filteredItems.map((item) => (
              <ComboboxOption
                key={item.id}
                value={item}
                className="group flex flex-row items-center cursor-default select-none rounded-xl px-3 py-1 data-[focus]:bg-gray-100"
                onClick={() => {
                  window.location.href = item.url;
                }}
              >
                {item.type === "page" ? (
                  <RenderIcon path={item.icon} size={"w-3"} />
                ) : item.type === "product" ||
                  item.type === "media" ||
                  item.type === "order" ? (
                  <img
                    src={item.icon}
                    alt="Product Image"
                    className="h-9 w-9 flex-none rounded-md object-cover object-center"
                  />
                ) : item.type === "contact" ? (
                  <a href="#" className="group block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="inline-block h-9 w-9 rounded-md"
                        />
                      </div>
                    </div>
                  </a>
                ) : null}
                <div className="ml-4 flex-auto">
                  {item.mediaType ? (
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm font-medium text-gray-700 group-data-[focus]:text-gray-900">
                        {item.name}
                      </p>
                      <span className="inline-flex items-center rounded-full bg-blue-100 ml-2 px-1.5 py-0.5 text-xs font-medium text-blue-700">
                        {item.mediaType}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm font-medium text-gray-700 group-data-[focus]:text-gray-900">
                      {item.name}
                      {item.status && (
                        <span className="inline-flex items-center rounded-full bg-green-100 ml-2 px-1.5 py-0.5 text-xs font-medium text-green-700">
                          {item.status}
                        </span>
                      )}
                    </p>
                  )}
                  {item.customer && (
                    <p className="text-sm font-medium text-gray-700 group-data-[focus]:text-gray-900">
                      {item.customer}
                    </p>
                  )}
                  {item.date && item.time && (
                    <p className="text-xs font-medium text-gray-400 group-data-[focus]:text-gray-900">
                      {`${item.date} at ${item.time}`}
                    </p>
                  )}
                  {item.type === "contact" && (
                    <p className="text-xs font-medium text-gray-400 group-data-[focus]:text-gray-900">
                      johndoe@email.com
                    </p>
                  )}
                  <p className="text-sm text-gray-500 group-data-[focus]:text-gray-700">
                    {item?.description}
                  </p>
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </Combobox>

      {query !== "" && filteredItems.length === 0 && (
        <div className="absolute top-10 w-[30rem] px-6 py-14 bg-white rounded-md shadow-lg text-center text-sm z-50 sm:px-14">
          <ExclamationCircleIcon
            type="outline"
            name="exclamation-circle"
            className="mx-auto h-6 w-6 text-gray-400"
          />
          <p className="mt-4 font-semibold text-gray-900">No results found</p>
          <p className="mt-2 text-gray-500">
            No items found for this search term. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}
