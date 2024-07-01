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
import { motion } from "framer-motion";

export default function SidebarComponent() {
  const {
    collapsed,
    toggleCollapsed,
    totalPrice,
    setTotalPrice,
    showModal,
    toggleModal,
    setCartTotal,
  } = useStore();
  const [uniqueProductsArray, setUniqueProductsArray] = useState<
    ProductModel[]
  >([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    const productsArray: ProductModel[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    let total = 0;
    productsArray.forEach((product) => {
      total += parseFloat(product.price) * product.quantity;
    });
    setTotalPrice(total);

    setUniqueProductsArray(productsArray);
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }} // Posição inicial fora da tela (à direita)
      animate={{ x: 0 }} // Anima para a posição x = 0 (centro)
      exit={{ x: "100%" }} // Animação de saída para fora da tela (à direita)
      transition={{ type: "spring", stiffness: 120, damping: 15 }} // Transição suave usando spring
      className="absolute top-0 right-0 h-full bg-white w-[400px] z-50 shadow-lg"
    >
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
          <BuyButton
            onClick={() => {
              localStorage.removeItem("cart");
              toggleCollapsed();
              setCartTotal(0);
              toggleModal(true);
            }}
          >
            COMPRAR
          </BuyButton>
        </Footer>
      </Container>
    </motion.div>
  );
}
