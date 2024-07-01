// components/StyledButtonComponents.tsx
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #1e3a8a; /* bg-blue-700 */
  height: 3.5rem; /* h-14 */
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1c3a8a; /* hover:bg-blue-800 */
  }
`;

const ButtonText = styled.p`
  margin-left: 1rem; /* ml-4 */
  color: white;
  font-size: 1.25rem; /* text-xl */
  font-weight: 500; /* font-medium */
`;

export { Button, ButtonText };
