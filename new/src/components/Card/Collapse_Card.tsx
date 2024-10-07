import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const Collapse_Card_L = styled.div<{
  isDarkMode: boolean;
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed"};
  overflow: hidden;
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 12px;
    gap: 12px;
    border-radius: 16px;
  }
`;
export const Collapse_Card_L_TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 8px 16px;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    padding: 4px 12px;
  }
`;
export const Collapse_Card_L_ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 24px;
  }
`;
export const Collapse_Card_L_ContentsBox_LogoBox_W97 = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  margin: 16px 0px 40px;
`;
export const Collapse_Card_L_ContentsBox_LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin: 16px 0px 40px;
  @media (max-width: ${breakpoints.tabletL}px) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    width: 80%;
    margin: 0px;
  }
`;
export const Collapse_Card_L_ContentsBox_InnerBox_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 8px;
  }
`;
export const Collapse_Card_L_ContentsBox_InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  border-radius: 32px;
  background-color: ${(props) => props.theme.Bg.InnerCard_Primary};
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 4px;
    padding: 16px 20px;
    border-radius: 12px;
  }
`;
//BG
export const Collapse_Card_L_Bg = styled.div<{
  isDarkMode: boolean;
  isExpanded: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 103px;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${(props) => props.theme.Bg.Card_Primary};
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #ededed"};
  position: relative;
  overflow: hidden;
  @media (max-width: ${breakpoints.mobileL}px) {
    gap: 8px;
    min-height: 0px;
  }
`;
export const Collapse_Card_L_BG_TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 24px;
  position: relative;
  p {
    color: #ffffff;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    padding: 4px 12px;
    gap: 8px;
  }
`;
export const Collapse_Card_L_BG_ContentsBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 12px 24px;
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 0px 0px;
  }
`;
export const Collapse_Card_L_BG_ContentsBox_InnerBox = styled.div<{
  isDarkMode: boolean;
}>`
  display: flex;
  gap: 12px;
  width: 100%;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.Bg.whiteT20 : props.theme.Bg.whiteT20};
  backdrop-filter: blur(10px);
  /* box-shadow: 2px 2px 12px #ededed; */
  box-shadow: ${(props) =>
    props.isDarkMode ? "none" : "2px 2px 12px #505050;"};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 16px 24px;
  & div:nth-child(1) {
    background-color: #10181e;
  }
  & div:nth-child(2) {
    background-color: #1a2734;
  }
  & div:nth-child(3) {
    background-color: #243844;
  }
  & div:nth-child(4) {
    background-color: #4b5763;
  }
  & div:nth-child(5) {
    background-color: #899296;
  }
  & div:nth-child(6) {
    background-color: #bbc0be;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    gap: 8px;
    padding: 12px 16px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    flex-wrap: wrap;
  }
`;
export const Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip = styled.div<{
  isDarkMode: boolean;
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 16px 24px;
  font-size: 1.8rem;
  font-weight: 900;
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 1.2rem;
    padding: 12px 16px;
  }
`;
export const Collapse_Card_L_BG_ContentsBox_TextBox = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
`;
