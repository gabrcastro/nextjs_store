import { ProductModel } from "@/app/domain/model/product.model";
import useStore from "@/app/stores/store";
import Image from "next/image";

export default function StoreItemButtonComponent(params: { product: ProductModel }) {
  const { cartTotal, setCartTotal } = useStore();

  const handleAddToCart = () => {
    let storedProducts = localStorage.getItem('cart');
    let productsArray: ProductModel[] = storedProducts ? JSON.parse(storedProducts) : [];
    productsArray.push(params.product);
    localStorage.setItem('cart', JSON.stringify(productsArray));
    setCartTotal(productsArray.length);
  };

  return (
    <button onClick={handleAddToCart} className="flex flex-row bg-blue-700 h-14 w-full justify-center items-center align-bottom hover:bg-blue-800 hover:cursor-pointer">
      <Image
        src="/icons/shopping-bag.svg"
        alt="Shopping Bag"
        width={20}
        height={20}
      />
      <p className="ml-4 text-white text-xl font-medium">COMPRAR</p>
    </button>
  );
}
