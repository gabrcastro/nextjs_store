"use client";
import "@/app/globals.css";
import useStore from "@/app/stores/store";
import HeaderComponent from "./view/components/header_component/header.component";
import ProductsPage from "./view/products/products.page";
import SidebarComponent from "./view/components/sidebar_component/sidebar.component";
import { ModalBuy } from "./view/components/modal_buy_component/modal_buy.component";

export default function Home() {
  const { collapsed, toggleCollapsed, showModal, toggleModal } = useStore();

  return (
    <div className="page">
      {collapsed ? (
        <div className="containerSidebar">
          <SidebarComponent />
        </div>
      ) : null}
      {showModal && <ModalBuy onClose={() => toggleModal(false)} />}
      <div className="containerContent">
        <HeaderComponent />
        <ProductsPage />
      </div>
    </div>
  );
}
