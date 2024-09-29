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

export const Card_M = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 24px;
  padding: 40px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed;"};
  /* color: ${(props) => props.theme.Color.Button_Primary}; */
`;

export const Card_S_JobSeeking = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
  width: 40%;
  padding: 62px 40px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed;"};
  button {
    width: 100%;
  }
  h3 {
    width: 100%;
    font-size: 32px;
  }
  img {
    height: auto;
  }
`;
