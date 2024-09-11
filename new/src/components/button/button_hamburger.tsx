import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const HamburgerMenuButton = styled.button<{ isDarkMode: Boolean }>`
  font-size: 16rem;
  color: ${(props) => props.theme.Color.white};
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.Color.Button_Third};
  }

  @media (max-width: ${breakpoints.tabletM}px) {
    font-size: 14rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 8rem;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 6rem;
  }
`;
