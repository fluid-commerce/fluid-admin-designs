import React, { useState } from "react";

import PageContainer from "../../components/global/PageContainer";
import Header from "../../components/products/Header";
import CardContainer from "../../components/order-details/CardContainer";
import OrdersTable from "../../components/orders/OrdersTable";
import SideDrawer from "../../components/global/SideDrawer";
import OrderStats from "../../components/orders/OrderStats";

export default function OrdersPage() {
  const [openActiveDrawer, setOpenActiveDrawer] = useState(false);
  return (
    <>
      <main>
        <PageContainer>
          <Header
            title={"Orders"}
            actionButtonText={"Add"}
            setOpenActiveDrawer={setOpenActiveDrawer}
          />
          <OrderStats />
          <CardContainer>
            <OrdersTable />
          </CardContainer>
        </PageContainer>
        <SideDrawer
          open={openActiveDrawer}
          setOpen={setOpenActiveDrawer}
          title={"Add Order"}
        />
      </main>
    </>
  );
}
