import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar } from "./components/catalyst-ui-kit/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./components/catalyst-ui-kit/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "./components/catalyst-ui-kit/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "./components/catalyst-ui-kit/sidebar";
import { SidebarLayout } from "./components/catalyst-ui-kit/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";

export default function AppLayout() {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <Avatar src="/tailwind-logo.svg" />
                <SidebarLabel>Tailwind Labs</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem href="/teams/1/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/1">
                  <Avatar slot="icon" src="/tailwind-logo.svg" />
                  <DropdownLabel>Tailwind Labs</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/teams/2">
                  <Avatar
                    slot="icon"
                    initials="WC"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Workcation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/create">
                  <PlusIcon />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection> */}
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <div
                className={`${
                  selectedTab === "home" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem onClick={() => setSelectedTab("home")}>
                  <HomeIcon />
                  <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
              </div>
              {selectedTab === "home" && (
                <SidebarSection className="pl-8 overflow-hidden ">
                  <SidebarItem href="/home/sub1">
                    <SidebarLabel>Sub Item 1</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/home/sub2">
                    <SidebarLabel>Sub Item 2</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "messaging" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem onClick={() => setSelectedTab("messaging")}>
                  <Square2StackIcon />
                  <SidebarLabel>Messaging</SidebarLabel>
                </SidebarItem>
              </div>
              {selectedTab === "messaging" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/messaging/sub1">
                    <SidebarLabel>Sub Item 1</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/messaging/sub2">
                    <SidebarLabel>Sub Item 2</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "orders" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem onClick={() => setSelectedTab("orders")}>
                  <TicketIcon />
                  <SidebarLabel>Sharing</SidebarLabel>
                </SidebarItem>
              </div>
              {selectedTab === "orders" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/orders/sub1">
                    <SidebarLabel>Sub Item 1</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/orders/sub2">
                    <SidebarLabel>Sub Item 2</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "shopping" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem onClick={() => setSelectedTab("shopping")}>
                  <Cog6ToothIcon />
                  <SidebarLabel>Shopping</SidebarLabel>
                </SidebarItem>
              </div>
              {selectedTab === "shopping" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/orders">
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings/sub2">
                    <SidebarLabel>Sub Item 2</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "marketing2" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem onClick={() => setSelectedTab("marketing2")}>
                  <MegaphoneIcon />
                  <SidebarLabel>Marketing</SidebarLabel>
                </SidebarItem>
              </div>
              {selectedTab === "marketing2" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/marketing2/sub1">
                    <SidebarLabel>Sub Item 1</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/marketing2/sub2">
                    <SidebarLabel>Sub Item 2</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              {/* <SidebarItem href="/marketing">
                <Square2StackIcon />
                <SidebarLabel>Messaging</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                <TicketIcon />
                <SidebarLabel>Sharing</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Shopping</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/marketing">
                <MegaphoneIcon />
                <SidebarLabel>Marketing</SidebarLabel>
              </SidebarItem> */}
            </SidebarSection>
            {/* <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1">
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem href="/events/2">Viking People</SidebarItem>
              <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
              <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
            </SidebarSection> */}
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                <QuestionMarkCircleIcon />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <SparklesIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/profile-photo.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content */}
      <Outlet />
    </SidebarLayout>
  );
}
