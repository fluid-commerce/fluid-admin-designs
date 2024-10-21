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

// bg-gray-50
// bg-gray-100

export default function Stats() {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm ring-1 ring-gray-300 sm:p-4 "
          >
            <dt className="truncate text-xs font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
