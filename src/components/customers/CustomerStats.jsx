import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// bg-gray-50
// bg-gray-100

export default function CustomerStats({ stats, initialStat }) {
  return (
    <div className="flex flex-row justify-between gap-4 w-full">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-md">{initialStat?.title}</div>
        <div className="text-4xl font-custom font-bold">
          {initialStat?.stat}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 bg-white rounded-md shadow-sm">
        {stats?.map((item, index) => (
          <div
            className={`flex-1 flex-col gap-4 py-6 px-16 relative`}
            key={item.title}
          >
            {index === 1 && (
              <>
                <div className="absolute left-0 top-1/4 h-1/2 w-px bg-gray-300"></div>
                <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-300"></div>
              </>
            )}
            <div className="text-md whitespace-nowrap">{item.title}</div>
            <div className="text-2xl font-custom font-bold">{item.stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
