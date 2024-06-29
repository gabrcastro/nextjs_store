import Image from "next/image";
import StoreItemComponent from "./components/store_item.component";

export default function Home() {

  const product: ProductModel = {
    id: 1,
    name: "iPhone X 128 GB",
    brand: "Apple",
    description: "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
    price: 2000.1
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[20%] h-[400px]">
        <StoreItemComponent product={product} />
      </div>
    </main>
  );
}
