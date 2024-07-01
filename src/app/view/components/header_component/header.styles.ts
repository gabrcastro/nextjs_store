import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1e3a8a; /* bg-blue-700 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.875rem; /* text-3xl */
`;

const TitleSpan = styled.span`
  font-size: 1.25rem; /* text-xl */
  font-weight: 300; /* font-light */
  margin-left: 0.75rem; /* ml-3 */
`;

const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem; /* rounded-lg */
  padding: 0.5rem 1.25rem; /* py-2 px-5 */
  cursor: pointer;
  &:hover {
    filter: brightness(125%);
  }
`;

const CartButtonText = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.25rem; /* text-xl */
  margin-left: 1rem; /* ml-4 */
`;

export {
  HeaderContainer,
  Title,
  TitleSpan,
  CartButton,
  CartButtonText,
};