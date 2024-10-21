import React, { useState } from "react";
import Header from "../../components/products/Header";
import Stats from "../../components/products/Stats";
import CardContainer from "../../components/order-details/CardContainer";
import OrdersTable from "../../components/orders/OrdersTable";
import SideDrawer from "../../components/global/SideDrawer";
import OrderStats from "../../components/orders/OrderStats";

export default function OrdersPage() {
  const [openActiveDrawer, setOpenActiveDrawer] = useState(false);
  return (
    <>
      <main>
        <div className="rounded-t-lg">
          <div className="mx-auto max-w-7xl">
            <Header
              title={"Orders"}
              actionButtonText={"Add"}
              setOpenActiveDrawer={setOpenActiveDrawer}
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <OrderStats />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-6">
          <CardContainer>
            <OrdersTable />
          </CardContainer>
        </div>
        <SideDrawer open={openActiveDrawer} setOpen={setOpenActiveDrawer} />
      </main>
    </>
  );
}
