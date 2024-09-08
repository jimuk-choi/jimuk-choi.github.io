import styled from "@emotion/styled";
import exp from "constants";

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
`;

export const Button_B = styled.button<{ isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Secondary};
  color: ${(props) => props.theme.Color.Button_Secondary};
  border: 1px solid ${(props) => props.theme.Border.Button_Secondary};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Button_C = styled.button<{ isDarkMode: boolean }>`
  color: ${(props) => props.theme.Color.Button_Secondary};
  /* padding: 12px 24px; */
  border-radius: 8px;
  font-weight: normal;
  font-size: 1.8rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.Color.Button_Third};
  }
`;
