// components/StyledMainComponents.tsx
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  min-height: 100vh; /* min-h-screen */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6rem; /* p-24 */
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* grid-cols-4 */
  gap: 2.5rem; /* gap-10 */
`;

export { MainContainer, GridContainer };
