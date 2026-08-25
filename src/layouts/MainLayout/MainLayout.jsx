import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="app-shell" data-testid="app-shell">
      <main className="app-main" data-testid="app-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;