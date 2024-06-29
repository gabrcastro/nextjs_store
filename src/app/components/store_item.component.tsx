import Image from "next/image";
import StoreItemButtonComponent from "./store_item_button.component";

export default function StoreItemComponent(params: { product: ProductModel }) {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-white w-full h-full  overflow-hidden">
      <div className="p-4">
      <div className="flex flex-row justify-between">
        <p className="text-gray-900 text-2xl font-medium">
          {params.product.name}
        </p>
        <div className="p-3 rounded-xl bg-gray-800 items-center justify-center min-h-min">
          <span className="text-white text-2xl font-bold">
            R${params.product.price}
          </span>
        </div>
      </div>
      <span className="text-gray-700 font-normal text-xl">{params.product.description}</span>
      </div>
      <StoreItemButtonComponent id={params.product.id} />
    </div>
  );
}
