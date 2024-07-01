import { useState } from "react";
import { CloseButton, ModalContainer, ModalText } from "./modal_buy.style";

export const ModalBuy = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalContainer>
      <ModalText>Obrigado pela compra!</ModalText>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </ModalContainer>
  );
};
