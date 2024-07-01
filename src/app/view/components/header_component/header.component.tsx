/* eslint-disable react-hooks/exhaustive-deps */
import { ProductModel } from "@/app/domain/model/product.model";
import useStore from "@/app/stores/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CartButton,
  CartButtonText,
  HeaderContainer,
  TitleSpan,
} from "./header.styles";
import { Title } from "../sidebar_component/sidebar.style";

export default function HeaderComponent() {
  const { collapsed, toggleCollapsed, cartTotal, setCartTotal } = useStore();
  let storedProducts;
  let productsArray: ProductModel[];

  if (typeof window !== "undefined") {
    storedProducts = localStorage.getItem("cart");
    productsArray = storedProducts ? JSON.parse(storedProducts) : [];
  }

  useEffect(() => {
    if (productsArray != null) {
      setCartTotal(productsArray.length);
    } else {
      setCartTotal(0);
    }
  }, [cartTotal]);

  return (
    <HeaderContainer>
      <Title>
        MKS<TitleSpan>Store</TitleSpan>
      </Title>
      <CartButton onClick={toggleCollapsed}>
        <Image
          src="/icons/cart_icon.svg"
          alt="Cart Icon"
          width={20}
          height={20}
        />
        <CartButtonText>{cartTotal}</CartButtonText>
      </CartButton>
    </HeaderContainer>
  );
}
