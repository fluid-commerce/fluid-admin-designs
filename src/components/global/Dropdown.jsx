import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import RenderIcon from "./RenderIcon";
import Sidebar from "../../images/svgs/solid/sidebar.svg";

export default function Dropdown({ options }) {
  const [selectedLanguage, setSelectedLanguage] = useState(options?.[0]?.name);

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <MenuButton className="inline-flex gap-2 items-center bg-white rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-blue-50 hover:text-blue-600">
          {selectedLanguage}
          <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {options?.map((language) => (
            <MenuItem key={language.id}>
              <a
                href="#"
                className="block flex justify-between px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                onClick={() => setSelectedLanguage(language.name)}
              >
                {language.name}
                {language.name === selectedLanguage && (
                  <span className="items-center pr-4 text-blue-600">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
