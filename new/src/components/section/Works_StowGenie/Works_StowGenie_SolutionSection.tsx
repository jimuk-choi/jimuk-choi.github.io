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

const WorksStowGenieSolutionSectionWrapper = styled.div`
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
const Subtitle_M_Contents_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${breakpoints.mobileL}px) {
    gap: 0px;
  }
`;

interface WorksStowGenieSolutionSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieSolutionSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieSolutionSectionProps) {
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
    <WorksStowGenieSolutionSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Solution.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Solution.Card[0].title}
                </Subtitle_M_900>
                <Subtitle_M_Contents_Wrapper>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[0].content}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Solution.Card[1].title}
                </Subtitle_M_900>
                <Subtitle_M_Contents_Wrapper>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[1].subtitle01}
                  </Lnb_L>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[1].content01}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
                <Subtitle_M_Contents_Wrapper>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[1].subtitle02}
                  </Lnb_L>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[1].content02}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Solution.Card[2].title}
                </Subtitle_M_900>
                <Subtitle_M_Contents_Wrapper>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[2].subtitle01}
                  </Lnb_L>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[2].content01}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
                <Subtitle_M_Contents_Wrapper>
                  <Lnb_L isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[2].subtitle02}
                  </Lnb_L>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[2].content02}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Solution.Card[3].title}
                </Subtitle_M_900>
                <Subtitle_M_Contents_Wrapper>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Solution.Card[3].content}
                  </P_M>
                </Subtitle_M_Contents_Wrapper>
              </Collapse_Card_L_ContentsBox_InnerBox>
            </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksStowGenieSolutionSectionWrapper>
  );
}

export default WorksStowGenieSolutionSection;
