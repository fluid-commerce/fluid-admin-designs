function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductTabs({ tabs }) {
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
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden z-50 sm:block">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow ring-1 ring-gray-300"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={classNames(
                tab.current ? "bg-gray-100" : "hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 overflow-hidden bg-white px-4 py-2 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
              )}
            >
              <span>{tab.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
