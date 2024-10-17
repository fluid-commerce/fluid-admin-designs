import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderDetails from "./pages/orderDetails/index";
import Marketing from "./pages/marketing";
import AppLayout from "./AppLayout";

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
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
