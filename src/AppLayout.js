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
import HouseBlank from "./images/navIcons/home.svg";
import MessagingIcon from "./images/navIcons/messages.svg";
import ShoppingCart from "./images/navIcons/cart-shopping.svg";
import SharingIcon from "./images/navIcons/rectangle-history-circle-user.svg";
import MarketingIcon from "./images/navIcons/bullhorn.svg";
import ChevronDown from "./images/svgs/solid/chevron-down.svg";
import ChevronUp from "./images/svgs/solid/chevron-up.svg";
import ChevronRight from "./images/svgs/solid/chevron-right.svg";
import MobilePhone from "./images/navIcons/mobile.svg";
import Users from "./images/navIcons/users.svg";
import Gear from "./images/navIcons/cog.svg";

export default function AppLayout() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState({
    name: "Neumi",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHMD8_IBku3bg/company-logo_200_200/company-logo_200_200/0/1630670552271?e=1736985600&v=beta&t=iuGdnNIYAs1aylkMExejssN-mwYQEO65HRZ11dBG9DM",
  });
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
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="flex flex-row gap-3 items-center justify-center">
                    <Avatar
                      slot="icon"
                      className="w-8"
                      src={
                        selectedCompany
                          ? selectedCompany.logo
                          : "https://media.licdn.com/dms/image/v2/C560BAQHMD8_IBku3bg/company-logo_200_200/company-logo_200_200/0/1630670552271?e=1736985600&v=beta&t=iuGdnNIYAs1aylkMExejssN-mwYQEO65HRZ11dBG9DM"
                      }
                    />
                    <SidebarLabel>
                      {selectedCompany ? selectedCompany.name : "Neumi"}
                    </SidebarLabel>
                  </div>
                  <div className="flex flex-col gap-[-0.5rem]">
                    <RenderIcon path={ChevronDown} type={"nav"} size={"w-3"} />
                  </div>
                </div>
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem
                  onClick={() =>
                    setSelectedCompany({
                      name: "Neumi",
                      logo: "https://media.licdn.com/dms/image/v2/C560BAQHMD8_IBku3bg/company-logo_200_200/company-logo_200_200/0/1630670552271?e=1736985600&v=beta&t=iuGdnNIYAs1aylkMExejssN-mwYQEO65HRZ11dBG9DM",
                    })
                  }
                  // href="/teams/1"
                >
                  <Avatar
                    slot="icon"
                    src="https://media.licdn.com/dms/image/v2/C560BAQHMD8_IBku3bg/company-logo_200_200/company-logo_200_200/0/1630670552271?e=1736985600&v=beta&t=iuGdnNIYAs1aylkMExejssN-mwYQEO65HRZ11dBG9DM"
                  />
                  <DropdownLabel>Neumi</DropdownLabel>
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    setSelectedCompany({
                      name: "Asea",
                      logo: "https://media.licdn.com/dms/image/v2/C560BAQFw5K2lEjqUaw/company-logo_200_200/company-logo_200_200/0/1647972264763/asea_llc_logo?e=1736985600&v=beta&t=c-pKlEQaoeI8D_pTAOKefowLhtLLe_xDNCifb5te5Ss",
                    })
                  }
                  // href="/teams/2"
                >
                  <Avatar
                    slot="icon"
                    initials="WC"
                    src="https://media.licdn.com/dms/image/v2/C560BAQFw5K2lEjqUaw/company-logo_200_200/company-logo_200_200/0/1647972264763/asea_llc_logo?e=1736985600&v=beta&t=c-pKlEQaoeI8D_pTAOKefowLhtLLe_xDNCifb5te5Ss"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Asea</DropdownLabel>
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    setSelectedCompany({
                      name: "Fluid",
                      logo: "https://media.licdn.com/dms/image/v2/C560BAQGkxo7qbjaiiA/company-logo_200_200/company-logo_200_200/0/1630649730956?e=1736985600&v=beta&t=-0IOz-1BLf0D5R8TGDXErgidnFa5ukRArVkbj-ELhW8",
                    })
                  }
                  // href="/teams/2"
                >
                  <Avatar
                    slot="icon"
                    initials="WC"
                    src="https://media.licdn.com/dms/image/v2/C560BAQGkxo7qbjaiiA/company-logo_200_200/company-logo_200_200/0/1630649730956?e=1736985600&v=beta&t=-0IOz-1BLf0D5R8TGDXErgidnFa5ukRArVkbj-ELhW8"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Fluid</DropdownLabel>
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    setSelectedCompany({
                      name: "Dotera",
                      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFhZEOXO0ZEiw/company-logo_100_100/company-logo_100_100/0/1631337805878?e=1736985600&v=beta&t=ikVahnX8p-tHhIjLKaXqwp9gubmZbmA1D8AW7I_MYtE",
                    })
                  }
                  // href="/teams/2"
                >
                  <Avatar
                    slot="icon"
                    initials="WC"
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQFhZEOXO0ZEiw/company-logo_100_100/company-logo_100_100/0/1631337805878?e=1736985600&v=beta&t=ikVahnX8p-tHhIjLKaXqwp9gubmZbmA1D8AW7I_MYtE"
                    className="bg-purple-500 text-white"
                  />
                  <DropdownLabel>Dotera</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/teams/create">
                  <PlusIcon />
                  <DropdownLabel>Add Company&hellip;</DropdownLabel>
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
                  <RenderIcon path={HouseBlank} type={"nav"} />
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
                  <RenderIcon path={MessagingIcon} type={"nav"} />
                  <SidebarLabel>Messaging</SidebarLabel>
                </SidebarItem>
              </div>
              <div
                className={`${
                  selectedTab === "sharing" ? "bg-white" : ""
                } rounded-lg cursor-pointer no-hover`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "sharing"
                      ? setSelectedTab(null)
                      : setSelectedTab("sharing");
                  }}
                  active={selectedTab === "sharing"}
                >
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <RenderIcon path={SharingIcon} type={"nav"} />
                      <SidebarLabel>Sharing</SidebarLabel>
                    </div>
                    <div>
                      {selectedTab !== "sharing" ? (
                        <RenderIcon
                          path={ChevronRight}
                          type={"nav"}
                          size={"w-2"}
                        />
                      ) : (
                        <RenderIcon
                          path={ChevronDown}
                          type={"nav"}
                          size={"w-3"}
                        />
                      )}
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "sharing" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/sharing/sub1">
                    <SidebarLabel>Media</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/sharing/sub2">
                    <SidebarLabel>Pages</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/sharing/sub2">
                    <SidebarLabel>Enrollments</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/sharing/sub2">
                    <SidebarLabel>Playlists</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              )}
              <div
                className={`${
                  selectedTab === "shopping" ? "bg-white" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "shopping"
                      ? setSelectedTab(null)
                      : setSelectedTab("shopping");
                  }}
                  active={selectedTab === "shopping"}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <RenderIcon path={ShoppingCart} type={"nav"} />
                      <SidebarLabel>Shopping</SidebarLabel>
                    </div>
                    <div>
                      {selectedTab !== "shopping" ? (
                        <RenderIcon
                          path={ChevronRight}
                          type={"nav"}
                          size={"w-2"}
                        />
                      ) : (
                        <RenderIcon
                          path={ChevronDown}
                          type={"nav"}
                          size={"w-3"}
                        />
                      )}
                    </div>
                  </div>
                </SidebarItem>
              </div>
              {selectedTab === "shopping" && (
                <SidebarSection className="pl-8">
                  <SidebarItem href="/orders">
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/products">
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/url-redirects">
                    <SidebarLabel>URL Redirects</SidebarLabel>
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
                  selectedTab === "marketing" ? "bg-white" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "marketing"
                      ? setSelectedTab(null)
                      : setSelectedTab("marketing");
                  }}
                  active={selectedTab === "marketing"}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <RenderIcon path={MarketingIcon} type={"nav"} />
                      <SidebarLabel>Marketing</SidebarLabel>
                    </div>
                    <div>
                      {selectedTab !== "marketing" ? (
                        <RenderIcon
                          path={ChevronRight}
                          type={"nav"}
                          size={"w-2"}
                        />
                      ) : (
                        <RenderIcon
                          path={ChevronDown}
                          type={"nav"}
                          size={"w-3"}
                        />
                      )}
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
                  selectedTab === "mobile" ? "bg-white" : ""
                } rounded-lg cursor-pointer`}
              >
                <SidebarItem
                  onClick={() => {
                    selectedTab === "mobile"
                      ? setSelectedTab(null)
                      : setSelectedTab("mobile");
                  }}
                  active={selectedTab === "mobile"}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <RenderIcon path={MobilePhone} type={"nav"} />
                      <SidebarLabel>Mobile App</SidebarLabel>
                    </div>
                    <div>
                      {selectedTab !== "mobile" ? (
                        <RenderIcon
                          path={ChevronRight}
                          type={"nav"}
                          size={"w-2"}
                        />
                      ) : (
                        <RenderIcon
                          path={ChevronDown}
                          type={"nav"}
                          size={"w-3"}
                        />
                      )}
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
                <RenderIcon path={Users} type={"nav"} />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <RenderIcon path={Gear} type={"nav"} />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/357419653_10159177522595598_4485332528001871041_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=BDd3ABdipr8Q7kNvgE1pjii&_nc_zt=24&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AUyBQS26CGHc4t7mLOElMXP&oh=00_AYBfTNxQXAvN6ngsHrbeUUTGffsVuD7oSvGInlvApgUbDA&oe=67173E59"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block text-left truncate text-sm/5 font-medium text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <RenderIcon path={ChevronUp} type={"nav"} size={"w-3"} />
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
