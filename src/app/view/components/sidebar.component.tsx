import useStore from "@/app/stores/store";
import CartItemComponent from "./cart_item.component";
import { ProductModel } from "@/app/domain/model/product.model";

export default function SidebarComponent() {
  const { collapsed, toggleCollapsed } = useStore();

  let storedProducts = localStorage.getItem('cart');
  let productsArray: ProductModel[] = storedProducts ? JSON.parse(storedProducts) : [];

  return (
    <div className="h-full w-[500px] bg-blue-700 p-10 z-50 overflow-auto">
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
    </div>
  );
}
