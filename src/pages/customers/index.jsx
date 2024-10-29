import React, { useState } from "react";

import PageContainer from "../../components/global/PageContainer";
import Header from "../../components/products/Header";
import CustomerStats from "../../components/customers/CustomerStats";
import CardContainer from "../../components/order-details/CardContainer";
import CustomersTable from "../../components/customers/CustomersTable";
import SideDrawer from "../../components/global/SideDrawer";

const stats = [
  // { title: "Total Customers", stat: "2,124" },
  { title: "Total Active Subscriptions", stat: "852" },
  { title: "Cart Abandonment", stat: "33%" },
  { title: "80% Repeat Customers", stat: "1,098" },
];

const initialStat = { title: "Total Customers", stat: "$2,124" };

export default function CustomersPage() {
  const [openActiveDrawer, setOpenActiveDrawer] = useState(false);
  return (
    <>
      <main>
        <PageContainer>
          <Header
            title={"Customers"}
            actionButtonText={"Add Customer"}
            setOpenActiveDrawer={setOpenActiveDrawer}
          />
          <CustomerStats stats={stats} initialStat={initialStat} />
          <CardContainer>
            <CustomersTable />
          </CardContainer>
        </PageContainer>
        <SideDrawer
          open={openActiveDrawer}
          setOpen={setOpenActiveDrawer}
          title={"Add Customer"}
        />
      </main>
    </>
  );
}
