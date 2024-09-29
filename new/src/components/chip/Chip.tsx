import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Chip_L_fill = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.Bg.white};
  color: #222222;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.8rem;
  /* @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
    padding: 12px 24px;
  } */
`;

export const Chip_M_Storke = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  border: 1.5px solid ${(props) => props.theme.Border.Button_Secondary};
  color: ${(props) => props.theme.Border.Button_Secondary};
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.4rem;
  /* @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.6rem;
    padding: 12px 24px;
  } */
`;
