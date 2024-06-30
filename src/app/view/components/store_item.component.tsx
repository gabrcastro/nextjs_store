/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import StoreItemButtonComponent from "./store_item_button.component";
import { ProductModel } from "@/app/domain/model/product.model";

export default function StoreItemComponent(params: { product: ProductModel }) {
  return (
    <div className="flex flex-col justify-between items-center rounded-2xl bg-white w-full h-full overflow-hidden shadow-[1px_1px_10px_1px_rgba(0,0,0,0.2)]">
      <div className="p-4">
        <div className=" flex justify-center items-center mb-4">
          <img
            src={params.product.photo}
            alt={params.product.name}
            width={300}
            height={300}
            className="rounded-3xl w-[70%] h-[70%]"
          />
        </div>
        <div className="flex flex-row justify-between mb-2">
          <p className="text-gray-900 text-lg font-medium">
            {params.product.name}
          </p>
          <div className="px-2 py-0 rounded-lg bg-gray-800 items-center justify-center min-h-min max-h-6">
            <span className="text-white text-base font-bold">
              R${params.product.price}
            </span>
          </div>
        </div>
        <span className="text-gray-700 font-normal text-xs">
          {params.product.description}
        </span>
      </div>

      <StoreItemButtonComponent product={params.product} />
    </div>
  );
}
