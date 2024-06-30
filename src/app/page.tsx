"use client";
import "@/app/globals.css";
import useStore from "@/app/stores/store";
import HeaderComponent from "./view/components/header.component";
import ProductsPage from "./view/products/products.page";
import SidebarComponent from "./view/components/sidebar.component";

export default function Home() {
  const { collapsed, toggleCollapsed } = useStore();

  return (
    <div className="relative w-full h-full">
      {collapsed ? (
        <div className="fixed h-full right-0 top-0 z-50">
          <SidebarComponent />
        </div>
      ) : null}
      <div className="w-full h-full">
        <HeaderComponent />
        <ProductsPage />
      </div>
    </div>
  );
}
