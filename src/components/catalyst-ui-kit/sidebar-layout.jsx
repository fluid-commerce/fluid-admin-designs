"use client";

import * as Headless from "@headlessui/react";
import React, { useState } from "react";
import { NavbarItem } from "./navbar";

import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownLabel,
  DropdownDivider,
} from "./dropdown";

import { SidebarItem, SidebarLabel, SidebarSection } from "./sidebar";
import { Avatar } from "./avatar";

import RenderIcon from "../../components/global/RenderIcon";
import MagnifyingGlass from "../../images/svgs/solid/magnifying-glass.svg";
import FluidLogo from "../../images/sideNavIcons/Fluid Full Logo.svg";
import Users from "../../images/svgs/regular/users.svg";
import Gear from "../../images/svgs/regular/gear.svg";
import ChevronDown from "../../images/svgs/solid/chevron-down.svg";
import User from "../../images/svgs/solid/user.svg";
import FullGear from "../../images/svgs/solid/gear.svg";
import LightBulb from "../../images/svgs/solid/lightbulb.svg";
import Logout from "../../images/svgs/solid/arrow-right-from-bracket.svg";
import ShieldCheck from "../../images/svgs/solid/shield-check.svg";
import UsersIcon from "../../images/sideNavIcons/size=sm, color=gray, type=users.svg";
import SettingsIcon from "../../images/sideNavIcons/size=sm, color=gray, type=settings.svg";

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function MobileSidebar({ open, close, children }) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
      >
        <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-gray-300 light:bg-zinc-900">
          <div className="-mb-3 px-4 pt-3">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  );
}

export function SidebarLayout({ navbar, sidebar, children }) {
  let [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative isolate flex min-h-svh w-full max-lg:flex-col">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 max-lg:hidden">{sidebar}</div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="flex items-center px-4 lg:hidden">
        <div className="py-2.5">
          <NavbarItem
            onClick={() => setShowSidebar(true)}
            aria-label="Open navigation"
          >
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">{navbar}</div>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2">
        <div className="flex flex-row items-center justify-between">
          {/* <RenderIcon path={FluidLogo} size={"w-4"} /> */}
          <div className="relative flex flex-row items-center">
            <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
              <RenderIcon path={MagnifyingGlass} size={"w-4"} />
            </div>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search Fluid"
              className="block w-[30rem] overflow-x-auto rounded-[9px] border-0 h-28px pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Dropdown>
              <div className="flex flex-row items-center justify-between">
                <SidebarItem href="/support">
                  <RenderIcon path={UsersIcon} type={"nav"} />
                </SidebarItem>
                {/* <SidebarItem href="/changelog">
                  <RenderIcon path={SettingsIcon} />
                </SidebarItem> */}
              </div>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-1">
                  <Avatar
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/357419653_10159177522595598_4485332528001871041_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=BDd3ABdipr8Q7kNvgE1pjii&_nc_zt=24&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AUyBQS26CGHc4t7mLOElMXP&oh=00_AYBfTNxQXAvN6ngsHrbeUUTGffsVuD7oSvGInlvApgUbDA&oe=67173E59"
                    className="size-8"
                    square
                    alt="Profile picture"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-xs/5 font-normal text-zinc-400">
                      Erica
                    </span>
                  </span>
                </span>
                <RenderIcon path={ChevronDown} type={"nav"} size={"w-3"} />
              </DropdownButton>
              <DropdownMenu
                className="min-w-64 gap-x-3 hover:text-white"
                anchor="top start"
              >
                <DropdownItem href="/my-profile">
                  <RenderIcon path={User} size={"w-3"} />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <RenderIcon path={FullGear} size={"w-3"} />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <RenderIcon path={ShieldCheck} size={"w-3"} />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <RenderIcon path={LightBulb} size={"w-2.5"} />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <RenderIcon path={Logout} size={"w-3"} type={"nav-menu"} />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="grow lg:rounded-lg lg:ring-1 ring-gray-200 gradient-container">
          <div className="pink-gradient-overlay"></div>
          <div className="relative">{children}</div>
        </div>
      </main>
    </div>
  );
}
