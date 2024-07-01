/* eslint-disable react-hooks/exhaustive-deps */
import useStore from "@/app/stores/store";
import {
  BuyButton,
  CloseButton,
  CloseButtonText,
  Container,
  Footer,
  FooterRow,
  Header,
  ProductsContainer,
  Title,
  TotalText,
} from "./sidebar.style";
import CartItemComponent from "../cart_item_component/cart_item.component";
import { ProductModel } from "@/app/domain/model/product.model";
import { useEffect, useState } from "react";

export default function SidebarComponent() {
  const { collapsed, toggleCollapsed, totalPrice, setTotalPrice, showModal, toggleModal, setCartTotal } = useStore();
  const [uniqueProductsArray, setUniqueProductsArray] = useState<ProductModel[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    const productsArray: ProductModel[] = storedProducts ? JSON.parse(storedProducts) : [];

    let total = 0;
    productsArray.forEach((product) => {
      total += parseFloat(product.price) * product.quantity;
    });
    setTotalPrice(total);

    setUniqueProductsArray(productsArray);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Carrinho de compras</Title>
        <CloseButton onClick={toggleCollapsed}>
          <CloseButtonText>X</CloseButtonText>
        </CloseButton>
      </Header>

      <ProductsContainer>
        {uniqueProductsArray.map((product) => (
          <CartItemComponent key={product.id} product={product} />
        ))}
      </ProductsContainer>

      <Footer>
        <FooterRow>
          <TotalText>Total</TotalText>
          <TotalText>R${totalPrice.toFixed(2).toString()}</TotalText>
        </FooterRow>
        <BuyButton onClick={() => {
          localStorage.removeItem("cart");
          toggleCollapsed();
          setCartTotal(0);
          toggleModal(true);
        }}>COMPRAR</BuyButton>
      </Footer>
    </Container>
  );
}
