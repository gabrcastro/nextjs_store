/* eslint-disable @next/next/no-img-element */
import { ProductModel } from "@/app/domain/model/product.model";
import { useEffect, useState } from "react";
import { truncateString } from "../utils/stringUtil";

export default function CartItemComponent(params: { product: ProductModel }) {
  const [qtd, setQtd] = useState(1);

  useEffect(() => {
    if (qtd < 0) {
      setQtd(0);
    }
  }, [qtd]);

  return (
    <div className="flex flex-col mt-2">
      <div className="flex flex-row p-4 bg-white rounded-lg h-24 w-full justify-between items-center">
        <img
          src={params.product.photo}
          alt={params.product.name}
          width={300}
          height={300}
          className="w-[15%]"
        />

        <div className="w-full flex flex-row items-center justify-between ml-2">
          <p className="text-black font-medium max-w-[25%] min-w-[25%]">
            {truncateString(params.product.name, 18)}
          </p>

          <div className="flex flex-col -mt-3">
            <span className="text-[10px]">Qtd</span>
            <div className="bg-white rounded-md border-[1px] border-gray-300 p-0">
              <div className="flex flex-row">
                <button
                  onClick={() => setQtd(qtd - 1)}
                  className="px-2 hover:brightness-125"
                >
                  -
                </button>
                <span className="px-3">{qtd}</span>
                <button
                  onClick={() => setQtd(qtd + 1)}
                  className="px-2 hover:brightness-125"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <p className="text-black font-bold text-lg mr-2">
            R${params.product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
