import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderDetails from "./pages/orderDetails/index";
import Marketing from "./pages/marketing";
import AppLayout from "./AppLayout";
import ProductsPage from "./pages/productsPage";
import UrlRedirects from "./pages/urlRedirects";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<OrderDetails />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="orders" element={<OrderDetails />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="url-redirects" element={<UrlRedirects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
