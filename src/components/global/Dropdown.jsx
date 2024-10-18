import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import RenderIcon from "./RenderIcon";
import Sidebar from "../../images/svgs/solid/sidebar.svg";

export default function Dropdown({ options }) {
  const [selectedLanguage, setSelectedLanguage] = useState("English (EN)");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 group">
          {options[0].name}
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
