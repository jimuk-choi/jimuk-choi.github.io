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
`;
export const Collapse_Card_L_TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`;
export const Collapse_Card_L_ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Collapse_Card_L_ContentsBox_LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin: 16px 0px 40px;
`;
export const Collapse_Card_L_ContentsBox_InnerBox_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;
