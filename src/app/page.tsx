"use client";
import HeaderComponent from "./view/components/header.component";
import StoreItemComponent from "./view/components/store_item.component";
import ProductsPage from "./view/products/products.page";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeaderComponent />
      <ProductsPage />
    </div>
  );
}
