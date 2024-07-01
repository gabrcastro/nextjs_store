// components/StyledCartItemComponents.tsx
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem; /* mt-2 */
  padding: 0 2.5rem 1.25rem; /* px-10 pb-5 */
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem; /* p-4 */
  background-color: white;
  border-radius: 0.5rem; /* rounded-lg */
  height: 6rem; /* h-24 */
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 15%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem; /* ml-2 */
  width: 100%;
`;

const ProductName = styled.p`
  color: black;
  font-weight: 500; /* font-medium */
  max-width: 25%;
  min-width: 25%;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -0.75rem; /* -mt-3 */
`;

const QuantityLabel = styled.span`
  font-size: 0.625rem; /* text-[10px] */
`;

const QuantitySelector = styled.div`
  background-color: white;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid #d1d5db; /* border-gray-300 */
  padding: 0;
`;

const QuantityButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuantityButton = styled.button`
  padding: 0 0.5rem; /* px-2 */
  &:hover {
    filter: brightness(125%);
  }
`;

const QuantityText = styled.span`
  padding: 0 0.75rem; /* px-3 */
`;

const ProductPrice = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.125rem; /* text-lg */
  margin-right: 0.5rem; /* mr-2 */
`;

export {
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
};
