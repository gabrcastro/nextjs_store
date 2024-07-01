// components/sidebar.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh; /* Ocupa a altura total da tela */
  width: 500px;
  background-color: #1e3a8a; /* Cor de fundo azul */
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 2.5rem; /* Espaçamento */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 2rem; /* Tamanho do texto */
  color: white;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: black;
  &:hover {
    background-color: #1a1a1a;
    filter: brightness(1.25);
  }
`;

export const CloseButtonText = styled.span`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;

export const ProductsContainer = styled.div`
  flex: 1;
  overflow-y: auto; /* Permite rolagem vertical */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */

  &::-webkit-scrollbar {
    width: 0px; /* Chrome, Safari, Opera */
  }
`;

export const Footer = styled.div`
  background-color: #1e3a8a;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.p`
  font-size: 1.875rem; /* Tamanho do texto */
  color: white;
  font-weight: bold;
  padding: 20px 20px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  padding: 0.75rem; /* Espaçamento interno */
  font-size: 1.25rem; /* Tamanho do texto */
  font-weight: bold;
  &:hover {
    background-color: #333;
  }
`;
