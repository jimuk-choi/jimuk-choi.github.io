import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Card_L = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  gap: 80px;
  padding: 40px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed;"};
  /* color: ${(props) => props.theme.Color.Button_Primary}; */
`;

export const Card_L_InnerCard = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 32px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
  /* color: ${(props) => props.theme.Color.Button_Primary}; */
`;
