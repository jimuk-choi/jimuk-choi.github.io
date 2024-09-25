import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Subtitle_XL = styled.p<{ isDarkMode: boolean }>`
  font-size: 3.2rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 900;
  letter-spacing: 2px;
`;

export const Subtitle_L = styled.p<{ isDarkMode: boolean }>`
  font-size: 2.8rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 900;
  letter-spacing: 2px;
`;

export const Subtitle_M = styled.p<{ isDarkMode: boolean }>`
  font-size: 2.4rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 300;
  letter-spacing: 4px;
  text-align: center;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 2rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle_S_MainToolIUse = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.6rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 900;
  text-align: center;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.4rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    display: none;
  }
`;
