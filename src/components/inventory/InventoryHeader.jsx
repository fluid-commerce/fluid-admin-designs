import React, { useState } from "react";

import RenderIcon from "../global/RenderIcon";
import CheckIcon from "../../images/svgs/solid/check.svg";

export default function InventoryHeader({
  title,
  actionButtonText,
  setOpenActiveDrawer,
}) {
  return (
    <header className="relative isolate z-50">
      <div>
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                /> */}
            <div className="flex flex-row space-x-3 justify-center align-center">
              <h1 className="text-4xl font-custom font-bold text-gray-900">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-2">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600"
              >
                Export
              </button>
            </span>
            <span className="hidden sm:block">
              <label className="inline-flex items-center bg-white rounded-md px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600">
                Import
                <input type="file" className="hidden" />
              </label>
            </span>
            <span>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-3 gap-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => setOpenActiveDrawer(true)}
              >
                <RenderIcon path={CheckIcon} size={"w-3"} type={"save"} />
                {actionButtonText}
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
