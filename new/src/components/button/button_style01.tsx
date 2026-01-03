import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";
import ArroRightUp from "../../assets/ArrowRightUP.svg";

export const Button_A = styled.button<{ isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Primary};
  color: ${(props) => props.theme.Color.Button_Primary};
  padding: 12px 24px;
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
  background-color: ${(props) => props.isDarkMode ? props.theme.Bg.Button_Secondary : 'rgba(255, 255, 255, 0.24)'};
  color: ${(props) => props.isDarkMode ? props.theme.Color.Button_Secondary : 'rgba(80, 80, 80, 1)'};
  border: 1px solid ${(props) => props.isDarkMode ? props.theme.Border.Button_Secondary : 'rgba(160, 160, 160, 1)'};
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

export const Button_C = styled.button<{
  isDarkMode: boolean;
  isActive?: boolean;
}>`
  color: ${(props) => props.theme.Color.Button_Secondary};
  color: ${(props) =>
    props.isActive
      ? props.theme.Bg.Button_Primary
      : props.theme.Color.Button_Secondary};
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

export const Button_D = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => props.theme.Bg.Button_Secondary};
  color: ${(props) => props.theme.Color.Button_Secondary};
  border: 1px solid ${(props) => props.theme.Border.Button_Secondary};
  padding: 16px 48px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.8rem;
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 12px 32px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 12px 32px;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    padding: 12px 16px;
  }
`;
export const Button_D_Title = styled.p<{ isDarkMode: boolean }>`
  font-size: 2.2rem;
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 1.4rem;
  }
`;
export const Button_D_Content = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.8rem;
  font-weight: normal;
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    font-size: 1.4rem;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 1.2rem;
  }
`;

export const Button_E = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 32px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 12px 32px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 12px 32px;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    padding: 12px 16px;
  }
`;

export const Button_F = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 28px;
  border-radius: 32px;
  color: ${(props) => props.theme.Color.Button_Primary};
  font-size: 2.4rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.Bg.whiteT20 : props.theme.Bg.whiteT20};
  backdrop-filter: blur(10px);
`;
