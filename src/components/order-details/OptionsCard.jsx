import React from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function OptionsCard() {
  const options = [
    {
      QV: "Australia",
      WholesaleCV: "0",
      WholesaleQV: "0",
      CostOfGoodsSold: "0.00",
      Shipping: "0.00",
      Tax: "0.00",
    },
    {
      QV: "United States",
      WholesaleCV: "0",
      WholesaleQV: "0",
      CostOfGoodsSold: "0.00",
      Shipping: "0.00",
      Tax: "0.00",
    },
    {
      QV: "Venezuela",
      WholesaleCV: "0",
      WholesaleQV: "0",
      CostOfGoodsSold: "0.00",
      Shipping: "0.00",
      Tax: "0.00",
    },

    // More people...
  ];
  return (
    <div className="-mx-4 p-4 bg-white shadow sm:rounded-lg shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg ">
      <div className="flex flex-row justify-between border-b border-gray-200 pb-4 mb-4">
        {/* <h2 className="text-base font-semibold leading-6 text-gray-900">
          Options
        </h2> */}
        <button className="group relative">
          <PlusCircleIcon className="w-6 h-6" />
          <span className="absolute bottom-full w-40 left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add options like size or color
          </span>
        </button>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 px-3 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <table className="min-w-full divide-y divide-gray-300 table-fixed">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0  whitespace-nowrap"
                  >
                    QV
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  whitespace-nowrap"
                  >
                    Wholesale CV
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  whitespace-nowrap"
                  >
                    Wholesale QV
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                  >
                    Cost of Goods Sold
                  </th>
                  <th
                    scope="col"
                    className="px-3 pr-12 py-3.5 text-left text-sm font-semibold text-gray-900  whitespace-nowrap"
                  >
                    Shipping
                  </th>
                  <th
                    scope="col"
                    className="px-3 pr-12 py-3.5 text-left text-sm font-semibold text-gray-900  whitespace-nowrap"
                  >
                    Tax
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {options.map((item) => (
                  <>
                    <tr key={item.QV}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                          />
                          {item.QV}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded"
                          value={item.WholesaleCV}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded"
                          value={item.WholesaleQV}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded"
                          value={item.CostOfGoodsSold}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded"
                          value={item.Shipping}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded"
                          value={item.Tax}
                        />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
