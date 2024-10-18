import React from "react";

import RenderIcon from "../global/RenderIcon";
import Plus from "../../images/svgs/solid/plus.svg";

export default function Header({
  title,
  actionButtonText,
  setOpenActiveDrawer,
}) {
  return (
    <header className="px-6 py-4 relative isolate z-50">
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
          <div
            style={{
              clipPath:
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
      </div> */}

      <div className="max-w-7xl py-1.5">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/48x48/tuple.svg"
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                /> */}
            <div className="flex flex-row space-x-3 justify-center align-center">
              <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 ">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-2">
            {title === "Products" && (
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                >
                  Export
                </button>
              </span>
            )}
            <span className="hidden sm:block">
              {title === "URL Redirects" ? (
                <label className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                  Import
                  <input type="file" className="hidden" />
                </label>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                >
                  Import
                </button>
              )}
            </span>
            <span>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1 gap-1 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={() => setOpenActiveDrawer(true)}
              >
                <RenderIcon path={Plus} size={"w-3"} type={"save"} />
                {actionButtonText}
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
