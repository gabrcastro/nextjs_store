import useStore from "@/app/stores/store";
import CartItemComponent from "./cart_item.component";
import { ProductModel } from "@/app/domain/model/product.model";

export default function SidebarComponent() {
  const { collapsed, toggleCollapsed } = useStore();

  let storedProducts = localStorage.getItem('cart');
  let productsArray: ProductModel[] = storedProducts ? JSON.parse(storedProducts) : [];

  return (
    <div className="h-[100%] w-[500px] bg-blue-700 p-10 z-50 overflow-y-scroll">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[40px] text-white font-bold">Carrinho de compras</p>
        <button
          className="w-8 h-8 rounded-full bg-black hover:bg-gray-950 hover:brightness-125"
          onClick={toggleCollapsed}
        >
          <span className="font-medium text-white">X</span>
        </button>
      </div>

      {productsArray.map((product) => (
        <CartItemComponent key={product.id} product={product}/>
      ))}

      <div className="flex flex-col bottom-0">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[30px] text-white font-bold">Total</p>
          <p className="text-[30px] text-white font-bold">R$ 458,09</p>
        </div>
        <button onClick={() => null} className="w-full h-[100px] bg-black p-3">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
