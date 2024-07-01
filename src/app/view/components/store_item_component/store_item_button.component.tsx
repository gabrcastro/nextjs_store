import { ProductModel } from "@/app/domain/model/product.model";
import useStore from "@/app/stores/store";
import Image from "next/image";
import { Button, ButtonText } from "./store_item_button.style";

export default function StoreItemButtonComponent(params: { product: ProductModel }) {
  const { cartTotal, setCartTotal } = useStore();

  const handleAddToCart = () => {
    let storedProducts = localStorage.getItem('cart');
    let productsArray: (ProductModel & { quantity: number })[] = storedProducts ? JSON.parse(storedProducts) : [];

    const existingProductIndex = productsArray.findIndex(p => p.id === params.product.id);

    if (existingProductIndex >= 0) {
      productsArray[existingProductIndex].quantity += 1;
    } else {
      productsArray.push({ ...params.product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(productsArray));
    setCartTotal(productsArray.reduce((total, p) => total + p.quantity, 0));
  };

  return (
    <Button onClick={handleAddToCart} >
      <Image
        src="/icons/shopping-bag.svg"
        alt="Shopping Bag"
        width={20}
        height={20}
      />
      <ButtonText>COMPRAR</ButtonText>
    </Button>
  );
}
