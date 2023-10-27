import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Product from "./scenes/product";
import Customer from "./scenes/customer";
import Order from "./scenes/order";
import ProductForm from "./scenes/form/productForm"
import ProductPage from "./scenes/form/pageProduct"
import OrderPage from "./scenes/form/orderProduct";
import axios from "axios";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme , colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />}/>
              <Route path="/customer" element={<Customer />} />
              <Route path="/order" element={<Order />} />
              <Route path="/mang-product" element={<ProductPage />} />
              <Route path="/mang-order" element={<OrderPage />} />
              {/* <Route path="/mang-product" element={<ProductForm />} /> */}
              {/* 
               />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    );
}

export default App;
