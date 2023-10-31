import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Product from "./scenes/product";
import Customer from "./scenes/customer";
import Order from "./scenes/order";
import ProductForm from "./scenes/form/productForm";
import ProductPage from "./scenes/form/pageProduct";
import OrderPage from "./scenes/form/orderProduct";
import axios from "axios";
import Chart from "./scenes/charts/Chart";
import Bar from "./scenes/charts/Bar";
import Line from "./scenes/charts/Line";
import Pie from "./scenes/charts/Pie"


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/order" element={<Order />} />
              <Route path="/mang-product" element={<ProductPage />} />
              <Route path="/mang-order" element={<OrderPage />} />
              
              <Route path="/chart" element={<Chart />}>
                <Route path="bar" element={<Bar />} />
                <Route path="line" element={<Line />} />
                <Route path="pie" element={<Pie />} />
              </Route>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
