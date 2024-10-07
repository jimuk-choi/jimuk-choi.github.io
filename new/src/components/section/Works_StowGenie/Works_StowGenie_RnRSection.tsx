import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../../style/breakpoints";
// Text
import { LanguageContext } from "../../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../../typograpy/subtitle";
import { P_M } from "../../typograpy/paragraph";
import { Lnb_L } from "../../typograpy/lnb";
//Button
import { Button_Chev } from "../../button/button_chev";

// Card
import {
  Collapse_Card_L,
  Collapse_Card_L_TitleBox,
  Collapse_Card_L_ContentsBox,
  Collapse_Card_L_ContentsBox_InnerBox,
  Collapse_Card_L_ContentsBox_InnerBox_Wrapper,
} from "../../Card/Collapse_Card";

const WorksStowGenieRnRSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;

  /* @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 140px 40px 32px 40px;
  }
  @media (max-width: ${breakpoints.tabletM}px) {
    padding: 140px 24px 32px 24px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 120px 24px 32px 24px;
    gap: 16px;
  } */
`;
const Subtitle_M_900_Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 4px;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface WorksStowGenieRnRSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieRnRSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieRnRSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };
  const TextData =
    language === "ko"
      ? require("../../../i18n/en/Works_StowGenie.json")
      : require("../../../i18n/kr/Works_StowGenie.json");

  return (
    <WorksStowGenieRnRSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.RnR.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[0].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[0].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[0].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[1].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[1].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[1].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[2].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[2].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[2].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[3].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[3].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[3].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[4].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[4].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[4].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[5].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[5].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[5].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[5].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[5].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[5].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[6].title}
                  </Subtitle_M_900>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[6].Contribution}
                  </Lnb_L>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[6].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900_Wrapper>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.RnR.Card[7].title}
                  </Subtitle_M_900>
                </Subtitle_M_900_Wrapper>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.RnR.Card[7].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
            </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksStowGenieRnRSectionWrapper>
  );
}

export default WorksStowGenieRnRSection;
