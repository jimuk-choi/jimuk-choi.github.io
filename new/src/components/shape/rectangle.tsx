import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Rectangle_L = styled.div`
  width: 80px;
  height: 4px;
  background-color: ${(props) => props.theme.Bg.Button_Primary};
  @media (max-width: ${breakpoints.tabletS}px) {
    width: 56px;
    height: 2.8px;
  }
`;
