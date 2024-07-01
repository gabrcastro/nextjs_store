// components/StyledProductCardComponents.tsx
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem; /* rounded-2xl */
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2); /* shadow */
`;

const CardContent = styled.div`
  padding: 1rem; /* p-4 */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem; /* mb-4 */
`;

const ProductImage = styled.img`
  border-radius: 1.5rem; /* rounded-3xl */
  width: 70%;
  height: 70%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* mb-2 */
`;

const ProductName = styled.p`
  color: #1f2937; /* text-gray-900 */
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
`;

const PriceTag = styled.div`
  padding: 0.5rem; /* px-2 py-0 */
  border-radius: 0.5rem; /* rounded-lg */
  background-color: #1f2937; /* bg-gray-800 */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1.5rem; /* min-h-min */
  max-height: 1.5rem; /* max-h-6 */
`;

const PriceText = styled.span`
  color: white;
  font-size: 1rem; /* text-base */
  font-weight: bold;
`;

const ProductDescription = styled.span`
  color: #4b5563; /* text-gray-700 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 400; /* font-normal */
`;

export {
  CardContainer,
  CardContent,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  PriceTag,
  PriceText,
  ProductDescription,
};
