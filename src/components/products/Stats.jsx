import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

const stats = [
  {
    name: "Products by Sell Through Rate",
    stat: "0%",
    previousStat: "-",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Products by Days of Inventory Remaining",
    stat: "16",
    previousStat: "0 days",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "ABC Product Analysis",
    stat: "$5.5M",
    previousStat: "C-Grade",
    change: "4.05%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Stats() {
  return (
    <div className="relative bg-white">
      <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6 hover:opacity-75">
            <dt className="text-base text-sm font-normal text-gray-900">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {item.previousStat}
                </span>
              </div>

              {/* <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                  />
                )}

                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </div> */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
