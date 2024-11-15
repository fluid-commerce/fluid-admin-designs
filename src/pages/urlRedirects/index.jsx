import React, { useState } from "react";

import PageContainer from "../../components/global/PageContainer";
import Header from "../../components/products/Header";
import CardContainer from "../../components/order-details/CardContainer";
import UrlRedirectsTable from "../../components/urlRedirects/UrlRedirectsTable";
import SideDrawer from "../../components/global/SideDrawer";

export default function UrlRedirects() {
  const [openActiveDrawer, setOpenActiveDrawer] = useState(false);
  return (
    <>
      <main>
        <PageContainer>
          <Header
            title={"URL Redirects"}
            actionButtonText={"Add"}
            setOpenActiveDrawer={setOpenActiveDrawer}
          />
          <CardContainer>
            <UrlRedirectsTable />
          </CardContainer>
        </PageContainer>
        <SideDrawer
          open={openActiveDrawer}
          setOpen={setOpenActiveDrawer}
          title={"Add URL Redirect"}
        />
      </main>
    </>
  );
}
