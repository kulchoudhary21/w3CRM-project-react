import "../src/ui/css/style.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./content/Dashboard/navs/Footer";
import DashBody from "./content/DashBody";
const MainHeader = React.lazy(() => import("./content/Dashboard/MainHeader"));
const Employees = React.lazy(() => import("./content/employees/Employees1"));

function App() {
  return (
    <div className="show">
      <BrowserRouter>
        <Suspense>
          <MainHeader />
        </Suspense>
        <Routes>
          <Route
            path="/employees"
            element={
              <Suspense>
                <Employees />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense>
                <DashBody />
              </Suspense>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
