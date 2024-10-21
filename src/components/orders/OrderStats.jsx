import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

const stats = [
  {
    name: "Total Orders",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Ordered Items Over Time",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Returns",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
  {
    name: "Fulfilled Orders Over Time",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
  {
    name: "Delivered Orders",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
  {
    name: "Time to Fulfill",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OrderStats() {
  return (
    <div>
      <dl className="flex flex-wrap rounded-lg bg-white shadow-sm ring-1 ring-gray-300">
        {stats.map((item) => (
          <div
            key={item.name}
            className="flex-1 min-w-[200px] px-4 py-5 sm:p-6"
          >
            <dt className="truncate text-xs font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="text-2xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
