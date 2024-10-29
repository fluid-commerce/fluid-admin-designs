import React from "react";

import dummyProductImage from "../../images/apple-vision-pro.png";

export default function Subscriptions() {
  return (
    <div>
      <div className="p-4">
        <div className="font-medium sm:text-sm text-gray-900">Subcriptions</div>
        <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4 text-sm">
          <div>
            Subscription ID{" "}
            <span className="text-blue-600 pr-2">SUB20985674</span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
              Active
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <div className="text-xs">October 22, 2024 at 3:23pm</div>
            <div className="flex flex-row items-center gap-x-2">
              <div className="text-blue-600">John Doe</div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-4 text-sm border-b border-gray-300 pb-4">
          <div className="flex flex-row justify-center gap-x-2">
            <img
              src={dummyProductImage}
              alt="Product Image"
              className="h-12 w-12 flex-none rounded-md object-cover object-center"
            />
            <div className="font-semibold">Classic Essential Pack</div>
          </div>
          <div className="flex flex-row justify-center gap-x-6">
            <div>x1</div>
            <div>$100</div>
          </div>
        </div>
        <div className="flex flex-row justify-end space-x-2 text-right pt-4">
          <div className="font-custom font-bold">$124.23</div>
        </div>
      </div>
    </div>
  );
}
