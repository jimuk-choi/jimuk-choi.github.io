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
`;
