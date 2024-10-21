import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/productDetails";
import Marketing from "./pages/marketing";
import AppLayout from "./AppLayout";
import ProductsPage from "./pages/productsPage";
import UrlRedirects from "./pages/urlRedirects";
import OrdersPage from "./pages/orders";
import OrderDetails from "./pages/orderDetails";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/details" element={<ProductDetails />} />
          <Route path="url-redirects" element={<UrlRedirects />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/details" element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
