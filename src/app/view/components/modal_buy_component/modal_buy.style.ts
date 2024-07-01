import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px; /* ajuste conforme necessário */
`;

const ModalText = styled.p`
  font-size: 18px; /* ajuste conforme necessário */
`;

const CloseButton = styled.button`
  background-color: #007bff; /* cor de fundo do botão */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export {
    ModalContainer,
    ModalText,
    CloseButton
}