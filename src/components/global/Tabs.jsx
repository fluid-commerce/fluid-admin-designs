import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const [tabs, setTabs] = useState([
    { name: "Short Description", href: "", current: true },
    { name: "Full Description", href: "", current: false },
    { name: "Features", href: "", current: false },
  ]);

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={tabs.find((tab) => tab.current).name}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div>
          <nav aria-label="Tabs" className="-mb-px flex ">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                type="button"
                onClick={() =>
                  setTabs((tabs) =>
                    tabs.map((t) => ({ ...t, current: t.name === tab.name }))
                  )
                }
                href={tab.href}
                aria-current={tab.current ? "page" : undefined}
                className={classNames(
                  tab.current
                    ? "bg-gray-200 border-b border-gray-500/25 text-gray-900 rounded-t-lg"
                    : "text-gray-500 hover:text-gray-700",
                  index === 0
                    ? "whitespace-nowrap px-3 py-3 text-sm font-medium rounded-tl-md"
                    : index === tabs.length - 1
                    ? "whitespace-nowrap px-3 py-3 text-sm font-medium rounded-tr-md"
                    : "whitespace-nowrap px-3 py-3 text-sm font-medium"
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
