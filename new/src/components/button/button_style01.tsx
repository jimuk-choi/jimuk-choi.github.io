import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Button_A = styled.button<{ isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Primary};
  color: ${(props) => props.theme.Color.Button_Primary};
  padding: 12px 48px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.Bg.Button_Primary_Hover};
  }
  &:active {
    background-color: ${(props) => props.theme.Bg.Button_Primary_Active};
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
    padding: 12px 24px;
  }
`;

export const Button_B = styled.button<{ isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Secondary};
  color: ${(props) => props.theme.Color.Button_Secondary};
  border: 1px solid ${(props) => props.theme.Border.Button_Secondary};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
    padding: 12px 18px;
  }
`;
Button_B.displayName = "Button_B";

export const Button_C = styled.button<{ isDarkMode: boolean }>`
  color: ${(props) => props.theme.Color.Button_Secondary};
  /* padding: 12px 24px; */
  border-radius: 8px;
  font-weight: normal;
  font-size: 1.8rem;
  transition: 0.2s ease-in-out;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
  }
  &:hover {
    color: ${(props) => props.theme.Color.Button_Third};
  }
`;
