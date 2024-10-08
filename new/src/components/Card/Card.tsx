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
  @media (max-width: ${breakpoints.desktopM}px) {
    gap: 56px;
  }
  @media (max-width: ${breakpoints.desktopS}px) {
    gap: 40px;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 24px;
    border-radius: 32px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 16px;
    border-radius: 16px;
    gap: 16px;
  }
`;

export const Card_L_InnerCard = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 32px;
  box-sizing: border-box;
  border-radius: 32px;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
  @media (max-width: ${breakpoints.desktopS}px) {
    gap: 8px;
    padding: 20px 28px;
    & > p:nth-child(1) {
      font-size: 2.4rem;
      letter-spacing: 1px;
    }
    & > p:nth-child(2) {
      font-size: 1.6rem;
    }
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    border-radius: 16px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    border-radius: 12px;
    gap: 8px;
    padding: 16px 24px;
    & > p:nth-child(1) {
      font-size: 1.8rem;
      letter-spacing: 1px;
    }
    & > p:nth-child(2) {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${breakpoints.mobileS}px) {
    padding: 16px 16px;
    & > p:nth-child(1) {
      font-size: 1.6rem;
      letter-spacing: 0px;
    }
    & > p:nth-child(2) {
      font-size: 1.4rem;
    }
  }
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
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 24px;
    border-radius: 32px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 16px;
    border-radius: 16px;
    gap: 12px;
  }
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
  @media (max-width: ${breakpoints.desktopS}px) {
    width: 31.9%;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    width: 48.6%;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    width: 48.2%;
    border-radius: 24px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    width: 48%;
    border-radius: 24px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    width: 100%;
    border-radius: 16px;
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
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 24px;
    border-radius: 32px;
  }
  @media (max-width: ${breakpoints.mobileS}px) {
    padding: 20px;
  }
`;

export const CloneCoding_Card_InnerBox_TopBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h3,
  p {
    font-weight: 400;
  }
  @media (max-width: ${breakpoints.mobileS}px) {
    & > div {
      gap: 2px;
    }
    & > div > div {
      padding: 4px 8px;
      font-size: 1rem;
    }
  }
`;
export const CloneCoding_Card_InnerBox_BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: ${breakpoints.mobileS}px) {
    button > p {
      font-size: 1.4rem;
    }
    button > svg {
      width: 16px;
      height: 16px;
    }
  }
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
    font-size: 3.2rem;
  }
  img {
    height: auto;
  }
  @media (max-width: ${breakpoints.desktopL}px) {
    button {
      font-size: 1.5em;
    }
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 16px 16px;
    border-radius: 16px;
    gap: 8px;
    h3 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.6rem;
    }
    button {
      padding: 12px 0;
    }
  }
`;
