/* eslint-disable @next/next/no-img-element */
import {
  Container,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  QuantityContainer,
  QuantityLabel,
  QuantitySelector,
  QuantityButtons,
  QuantityButton,
  QuantityText,
  ProductPrice,
} from "./cart_item.style";
import { ProductModel } from "@/app/domain/model/product.model";
import { useEffect, useState } from "react";
import { truncateString } from "../../utils/stringUtil";
import useStore from "@/app/stores/store";

export default function CartItemComponent(params: { product: ProductModel }) {
  const [qtd, setQtd] = useState<number>(params.product.quantity);
  const { totalPrice, setTotalPrice } = useStore();

  const updateLocalStorage = (newQuantity: number) => {
    let storedProducts = localStorage.getItem('cart');
    let productsArray: (ProductModel & { quantity: number })[] = storedProducts ? JSON.parse(storedProducts) : [];

    const updatedProducts = productsArray.map((p) => {
      if (p.id === params.product.id) {
        return { ...p, quantity: newQuantity };
      }
      return p;
    });

    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const handleIncrement = () => {
    const newQuantity = qtd + 1;
    setQtd(newQuantity);
    updateLocalStorage(newQuantity);
    updateTotalPrice(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = qtd - 1 < 0 ? 0 : qtd - 1;
    setQtd(newQuantity);
    updateLocalStorage(newQuantity);
    updateTotalPrice(newQuantity);
  };

  const updateTotalPrice = (newQuantity: number) => {
    const totalPriceDelta = (newQuantity - qtd) * parseFloat(params.product.price);
    setTotalPrice(totalPrice + totalPriceDelta);
  };

  useEffect(() => {
    setQtd(params.product.quantity);
  }, [params.product.quantity]);

  return (
    <Container>
      <CartItem>
        <img
          src={params.product.photo}
          alt={params.product.name}
          width={300}
          height={300}
          className="w-[15%]"
        />

        <ProductInfo>
          <ProductName>
            {truncateString(params.product.name, 18)}
          </ProductName>

          <QuantityContainer>
            <QuantityLabel>Qtd</QuantityLabel>
            <QuantitySelector>
              <QuantityButtons>
                <QuantityButton
                  onClick={handleDecrement}>
                  -
                </QuantityButton>
                <QuantityText>{qtd}</QuantityText>
                <QuantityButton
                  onClick={handleIncrement}>
                  +
                </QuantityButton>
              </QuantityButtons>
            </QuantitySelector>
          </QuantityContainer>

          <ProductPrice>
            R${params.product.price}
          </ProductPrice>
        </ProductInfo>
      </CartItem>
    </Container>
  );
}
