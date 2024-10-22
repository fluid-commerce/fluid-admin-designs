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
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import MagnifyingGlass from "./images/svgs/solid/magnifying-glass.svg";
import FluidLogo from "./images/sideNavIcons/Fluid Full Logo.svg";
import RenderIcon from "./components/global/RenderIcon";

// FontAwesome Icons
import HouseBlank from "./images/svgs/regular/house.svg";
import MessagingIcon from "./images/svgs/regular/messages.svg";
import ShoppingCart from "./images/svgs/regular/cart-shopping.svg";
import SharingIcon from "./images/svgs/regular/rectangle-history-circle-user.svg";
import ChevronDown from "./images/svgs/solid/chevron-down.svg";
import ChevronUp from "./images/svgs/solid/chevron-up.svg";
import ChevronRight from "./images/svgs/solid/chevron-right.svg";
import MobilePhone from "./images/svgs/regular/mobile.svg";
import Users from "./images/svgs/regular/users.svg";
import Gear from "./images/svgs/regular/gear.svg";
import User from "./images/svgs/solid/user.svg";
import FullGear from "./images/svgs/solid/gear.svg";
import LightBulb from "./images/svgs/solid/lightbulb.svg";
import Logout from "./images/svgs/solid/arrow-right-from-bracket.svg";
import ShieldCheck from "./images/svgs/solid/shield-check.svg";
import ShoppingBag from "./images/sideNavIcons/size=sm, color=gray, type=shopping-bag.svg";
import ShoppingBagPrimary from "./images/sideNavIcons/size=sm, color=primary, type=shopping-bag.svg";
import HomeIcon from "./images/sideNavIcons/size=sm, color=gray, type=home.svg";
import HomeIconPrimary from "./images/sideNavIcons/size=sm, color=primary, type=home.svg";
import MessagesIcon from "./images/sideNavIcons/size=sm, color=gray, type=message.svg";
import ShareIcon from "./images/sideNavIcons/size=sm, color=gray, type=share.svg";
import ShareIconPrimary from "./images/sideNavIcons/size=sm, color=primary, type=share.svg";
import MarketingIcon from "./images/sideNavIcons/size=sm, color=gray, type=marketing.svg";
import MarketingIconPrimary from "./images/sideNavIcons/size=sm, color=primary, type=marketing.svg";
import MobileIcon from "./images/sideNavIcons/size=sm, color=gray, type=mobile app.svg";
import MobileIconPrimary from "./images/sideNavIcons/size=sm, color=primary, type=mobile app.svg";

export default function AppLayout() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState({
    name: "Neumi",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHMD8_IBku3bg/company-logo_200_200/company-logo_200_200/0/1630670552271?e=1736985600&v=beta&t=iuGdnNIYAs1aylkMExejssN-mwYQEO65HRZ11dBG9DM",
  });
  return (
    <>
      {/* <div className="flex flex-row  w-full items-center justify-between p-2">
        <RenderIcon path={FluidLogo} size={"w-4"} />
        <div className="relative flex flex-row items-center justify-between p-2">
          <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
            <RenderIcon path={MagnifyingGlass} size={"w-4"} />
          </div>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search"
            className="block w-1/3 rounded-md border-0 h-28px pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Dropdown>
            <div className="flex flex-row items-center justify-between">
              <SidebarItem href="/support">
                <RenderIcon path={Users} type={"nav"} />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                <RenderIcon path={Gear} type={"nav"} />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </div>
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
      </div> */}
      <SidebarLayout
        // navbar={
        //   <Navbar>
        //     <NavbarSpacer />
        //     <NavbarSection>
        //       <NavbarItem href="/search" aria-label="Search">
        //         <MagnifyingGlassIcon />
        //       </NavbarItem>
        //       <NavbarItem href="/inbox" aria-label="Inbox">
        //         <InboxIcon />
        //       </NavbarItem>
        //       <Dropdown>
        //         <DropdownButton as={NavbarItem}>
        //           <Avatar src="/profile-photo.jpg" square />
        //         </DropdownButton>
        //         <DropdownMenu className="min-w-64" anchor="bottom end">
        //           <DropdownItem href="/my-profile">
        //             <RenderIcon path={User} type={"nav"} size={"w-3"} />
        //             <DropdownLabel>My profile</DropdownLabel>
        //           </DropdownItem>
        //           <DropdownItem href="/settings">
        //             <Cog8ToothIcon />
        //             <DropdownLabel>Settings</DropdownLabel>
        //           </DropdownItem>
        //           <DropdownDivider />
        //           <DropdownItem href="/privacy-policy">
        //             <ShieldCheckIcon />
        //             <DropdownLabel>Privacy policy</DropdownLabel>
        //           </DropdownItem>
        //           <DropdownItem href="/share-feedback">
        //             <LightBulbIcon />
        //             <DropdownLabel>Share feedback</DropdownLabel>
        //           </DropdownItem>
        //           <DropdownDivider />
        //           <DropdownItem href="/logout">
        //             <ArrowRightStartOnRectangleIcon />
        //             <DropdownLabel>Sign out</DropdownLabel>
        //           </DropdownItem>
        //         </DropdownMenu>
        //       </Dropdown>
        //     </NavbarSection>
        //   </Navbar>
        // }
        sidebar={
          <Sidebar>
            <SidebarHeader>
              <div className="flex flex-row items-center px-2 mb-6 ml-1 mt-1">
                <RenderIcon path={FluidLogo} size={"w-4"} />
              </div>
              {/* <Dropdown>
                <div className="flex flex-row items-center px-2 mb-6 ml-1 mt-1">
                  <RenderIcon path={FluidLogo} size={"w-4"} />
                </div>
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
                      <RenderIcon
                        path={ChevronDown}
                        type={"nav"}
                        size={"w-3"}
                      />
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
              </Dropdown> */}
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
              <Dropdown>
                <DropdownButton as={SidebarItem}>
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
                      <RenderIcon
                        path={ChevronDown}
                        type={"nav"}
                        size={"w-3"}
                      />
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
              <DropdownDivider />
              <SidebarSection>
                <div
                  className={`${
                    selectedTab === "home" ? "bg-gray-200" : ""
                  } rounded-lg cursor-pointer`}
                >
                  <SidebarItem>
                    {selectedTab === "home" ? (
                      <RenderIcon path={HomeIconPrimary} />
                    ) : (
                      <RenderIcon path={HomeIcon} type={"nav"} />
                    )}
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
                    <RenderIcon path={MessagesIcon} type={"nav"} />
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
                    <div className="flex flex-row items-center justify-between gap-x-28 w-full">
                      <div className="flex items-center gap-3">
                        {selectedTab === "sharing" ? (
                          <RenderIcon path={ShareIconPrimary} />
                        ) : (
                          <RenderIcon path={ShareIcon} type={"nav"} />
                        )}
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
                        {selectedTab === "shopping" ? (
                          <RenderIcon path={ShoppingBagPrimary} />
                        ) : (
                          <RenderIcon path={ShoppingBag} />
                        )}
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
                        {selectedTab === "marketing" ? (
                          <RenderIcon path={MarketingIconPrimary} />
                        ) : (
                          <RenderIcon path={MarketingIcon} />
                        )}
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
                        {selectedTab === "mobile" ? (
                          <RenderIcon path={MobileIconPrimary} />
                        ) : (
                          <RenderIcon path={MobileIcon} type={"nav"} />
                        )}
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
              </SidebarSection>
              {/* <SidebarSpacer /> */}
              {/* <SidebarSection>
                <SidebarItem href="/support">
                  <RenderIcon path={Users} type={"nav"} />
                  <SidebarLabel>Users</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/changelog">
                  <RenderIcon path={Gear} type={"nav"} />
                  <SidebarLabel>Settings</SidebarLabel>
                </SidebarItem>
              </SidebarSection> */}
            </SidebarBody>
            {/* <SidebarFooter className="max-lg:hidden">
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
            </SidebarFooter> */}
          </Sidebar>
        }
      >
        <Outlet />
      </SidebarLayout>
    </>
  );
}
