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
export const CloneCoding_Card = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: 19.1%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  color: ${(props) => props.theme.Color.Button_Primary};
  transition: transform 0.3s; /* 부드러운 확대 효과 */

  &:hover img {
    transform: scale(1.1); /* 이미지 확대 */
    transition: transform 0.3s; /* 부드러운 확대 효과 */
  }
  img {
    transition: transform 0.3s ease; /* 이미지 기본 상태에서 부드러운 전환 추가 */
    transform: scale(1.01);
  }
  @media (max-width: ${breakpoints.desktopXL}px) {
    width: 32.4%;
  }
  @media (max-width: ${breakpoints.desktopL}px) {
    width: 32.1%;
  }
`;
export const CloneCoding_Card_InnerBox = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 32px;
`;

export const CloneCoding_Card_InnerBox_TopBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h3,
  p {
    font-weight: 400;
  }
`;
export const CloneCoding_Card_InnerBox_BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Card_S_JobSeeking = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
  width: 40%;
  text-align: center;
  padding: 62px 40px;
  border-radius: 40px;
  color: ${(props) => props.theme.Color.white};
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed;"};
  button {
    width: 100%;
    padding: 18px 0;
  }
  h3 {
    width: 100%;
    font-size: 32px;
  }
  img {
    height: auto;
  }
  @media (max-width: ${breakpoints.desktopL}px) {
    button {
      font-size: 1.5em;
    }
  }
`;
