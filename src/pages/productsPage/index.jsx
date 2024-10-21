import React from "react";
import Header from "../../components/products/Header";
import Stats from "../../components/products/Stats";
import CardContainer from "../../components/order-details/CardContainer";
import ProductsTable from "../../components/products/ProductsTable";

export default function ProductsPage() {
  return (
    <>
      <main>
        <div className="rounded-t-lg">
          <div className="mx-auto max-w-7xl">
            <Header title={"Products"} actionButtonText={"Add Product"} />
          </div>
        </div>
        <div className="relative p-6">
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
          <div className="mx-auto max-w-7xl px-6">
            <Stats />
          </div>
        </div>
        <div className="p-6">
          <div className="mx-auto max-w-7xl px-6">
            <CardContainer>
              <ProductsTable />
            </CardContainer>
          </div>
        </div>
      </main>
    </>
  );
}
