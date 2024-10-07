import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const P_L = styled.p<{ isDarkMode: boolean }>`
  font-size: 2.4rem;
  color: ${(props) => props.theme.Color.Paragraph};
  font-weight: 400;
`;

export const P_M = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.8rem;
  color: ${(props) => props.theme.Color.Paragraph};
  font-weight: 400;
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.4rem;
  }
`;
