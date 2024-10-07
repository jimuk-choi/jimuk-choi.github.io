import styled from "@emotion/styled";

import { ReactComponent as Chev } from "../../assets/Chev.svg";
import { breakpoints } from "../../style/breakpoints";

export const Button_Chev = styled(Chev, {
  shouldForwardProp: (prop) => !["isDarkMode", "isExpanded"].includes(prop),
})<{ isDarkMode: boolean; isExpanded: boolean }>`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.Color.white};
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isExpanded ? "rotate(0deg)" : "rotate(180deg)"}; // 펼쳐질 때 회전
  @media (max-width: ${breakpoints.tabletS}px) {
    width: 24px;
    height: 24px;
  }
`;
