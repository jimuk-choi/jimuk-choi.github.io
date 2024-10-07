import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Lnb_L = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.8rem;
  color: ${(props) => props.theme.Color.Lnb};
  font-weight: 700;
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.4rem;
    margin-bottom: 0.6px;
  }
`;
