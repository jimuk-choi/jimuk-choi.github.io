import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Chip_L = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.Bg.white};
  color: #222222;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.8rem;
  /* @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
    padding: 12px 24px;
  } */
`;
