import React from "react";

import PageContainer from "../../components/global/PageContainer";
import InventoryHeader from "../../components/inventory/InventoryHeader";
import Stats from "../../components/products/Stats";
import CardContainer from "../../components/order-details/CardContainer";
import InventoryTable from "../../components/inventory/InventoryTable";

export default function InventoryPage() {
  return (
    <>
      <main>
        <PageContainer>
          <InventoryHeader title={"Inventory"} actionButtonText={"Save"} />
          <CardContainer>
            <InventoryTable />
          </CardContainer>
        </PageContainer>
      </main>
    </>
  );
}
