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
        {stats.map((item, index) => (
          <div
            key={item.name}
            className={classNames(
              "overflow-hidden rounded-md",
              index === 0 ? "p-0 space-y-2" : "bg-white shadow-sm px-4 py-6"
            )}
          >
            <dt className="truncate text-sm font-medium text-gray-600">
              {item.name}
            </dt>
            <dd
              className={`mt-1 text-3xl ${
                index === 0 ? "text-5xl" : "font-semibold"
              } tracking-tight text-gray-900 font-custom font-bold`}
            >
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
