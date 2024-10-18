import React, { useState } from "react";
import Header from "../../components/products/Header";
import Stats from "../../components/products/Stats";
import CardContainer from "../../components/order-details/CardContainer";
import UrlRedirectsTable from "../../components/urlRedirects/UrlRedirectsTable";
import SideDrawer from "../../components/global/SideDrawer";

export default function () {
  const [openActiveDrawer, setOpenActiveDrawer] = useState(false);
  return (
    <>
      <main>
        <div className="bg-white rounded-t-lg border-b border-gray-900/10">
          <div className="mx-auto max-w-7xl">
            <Header
              title={"URL Redirects"}
              actionButtonText={"Add"}
              setOpenActiveDrawer={setOpenActiveDrawer}
            />
          </div>
        </div>
        <div className="bg-gray-50 border-b border-gray-900/10 relative">
          {/* <div
            aria-hidden="true"
            className="absolute inset-0 z-50 overflow-hidden"
          >
            <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                style={{
                  clipPath:
                    "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                }}
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#378CFF] to-[#E3C6FF]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div> */}
        </div>
        <div className="p-6">
          <div className="mx-auto max-w-7xl">
            <CardContainer>
              <UrlRedirectsTable />
            </CardContainer>
          </div>
        </div>
        <SideDrawer open={openActiveDrawer} setOpen={setOpenActiveDrawer} />
      </main>
    </>
  );
}
