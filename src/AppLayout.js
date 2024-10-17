import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactSVG } from "react-svg";
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

import RenderIcon from "./components/global/RenderIcon";

// FontAwesome Icons
import HouseBlank from "./images/svgs/sharp-solid/house-blank.svg";
import MessagingIcon from "./images/svgs/solid/messages.svg";
import ShoppingCart from "./images/svgs/solid/cart-shopping.svg";
import SharingIcon from "./images/svgs/solid/share-from-square.svg";
import MarketingIcon from "./images/svgs/sharp-solid/megaphone.svg";
import ChevronDown from "./images/svgs/regular/chevron-down.svg";
import MobilePhone from "./images/svgs/solid/mobile-screen-button.svg";
import Users from "./images/svgs/solid/users.svg";
import Gear from "./images/svgs/solid/gear.svg";

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
                <SidebarItem>
                  <RenderIcon path={HouseBlank} />
                  <SidebarLabel>Home</SidebarLabel>
                </SidebarItem>
              </div>
              <div
                className={`${
                  selectedTab === "messaging" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "messaging"
                      ? setSelectedTab(null)
                      : setSelectedTab("messaging");
                  }}
                >
                  <RenderIcon path={MessagingIcon} />
                  <SidebarLabel>Messaging</SidebarLabel>
                </SidebarItem>
              </div>
              <div
                className={`${
                  selectedTab === "orders" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "orders"
                      ? setSelectedTab(null)
                      : setSelectedTab("orders");
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <RenderIcon path={SharingIcon} />
                      <SidebarLabel>Sharing</SidebarLabel>
                    </div>
                    <div>
                      <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "orders" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/orders/sub1">
                    <SidebarLabel>Media</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/orders/sub2">
                    <SidebarLabel>Pages</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/orders/sub2">
                    <SidebarLabel>Enrollments</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/orders/sub2">
                    <SidebarLabel>Playlists</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "shopping" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "shopping"
                      ? setSelectedTab(null)
                      : setSelectedTab("shopping");
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <RenderIcon path={ShoppingCart} />
                      <SidebarLabel>Shopping</SidebarLabel>
                    </div>
                    <div>
                      <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "shopping" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/orders">
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings/sub2">
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings/sub2">
                    <SidebarLabel>Promo Codes</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings/sub2">
                    <SidebarLabel>Preferences</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/settings/sub2">
                    <SidebarLabel>Pending Enrollments</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "marketing" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "marketing"
                      ? setSelectedTab(null)
                      : setSelectedTab("marketing");
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <RenderIcon path={MarketingIcon} />
                      <SidebarLabel>Marketing</SidebarLabel>
                    </div>
                    <div>
                      <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "marketing" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/marketing/sub1">
                    <SidebarLabel>Pop Ups</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/marketing/sub2">
                    <SidebarLabel>Banners</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/marketing/sub2">
                    <SidebarLabel>Chat</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/marketing/sub2">
                    <SidebarLabel>Contacts</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/marketing/sub2">
                    <SidebarLabel>Reviews</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "mobile" ? "bg-gray-200" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "mobile"
                      ? setSelectedTab(null)
                      : setSelectedTab("mobile");
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <RenderIcon path={MobilePhone} size={"h-4 w-4"} />
                      <SidebarLabel>Mobile App</SidebarLabel>
                    </div>
                    <div>
                      <RenderIcon path={ChevronDown} size={"h-3 w-3"} />
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "mobile" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/mobile/sub1">
                    <SidebarLabel>Announcements</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/mobile/sub2">
                    <SidebarLabel>Training</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/mobile/sub2">
                    <SidebarLabel>Events</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/mobile/sub2">
                    <SidebarLabel>Tiles</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/mobile/sub2">
                    <SidebarLabel>Mobile Views</SidebarLabel>
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
                <RenderIcon path={Users} />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <RenderIcon path={Gear} />
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
