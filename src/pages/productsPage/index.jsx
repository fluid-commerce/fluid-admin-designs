import React from "react";

import PageContainer from "../../components/global/PageContainer";
import Header from "../../components/products/Header";
import Stats from "../../components/products/Stats";
import CardContainer from "../../components/order-details/CardContainer";
import ProductsTable from "../../components/products/ProductsTable";

export default function ProductsPage() {
  return (
    <>
      <main>
        <PageContainer>
          <Header title={"Products"} actionButtonText={"Add Product"} />
          <Stats />
          <CardContainer>
            <ProductsTable />
          </CardContainer>
        </PageContainer>
      </main>
    </>
  );
}
