import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../../style/breakpoints";
// Text
import { LanguageContext } from "../../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../../typograpy/subtitle";
import { P_M } from "../../typograpy/paragraph";
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

const WorksStowGenieGoalSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
  & > div {
    gap: 8px;
  }

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
const Problem_Goal_Box_InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0 32px 0px;
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 8px;
  }
`;
const Problem_Goal_Box_InnerBox_TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 28px 8px;
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 0 18px 0px;
  }
`;

interface WorksStowGenieRnRSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieGoalSection({
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
    <WorksStowGenieGoalSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Goal.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Problem_Goal_Box_InnerBox>
              <Problem_Goal_Box_InnerBox_TopBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Goal.ProblemTitle}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.Goal.ProblemContent}
                </P_M>
              </Problem_Goal_Box_InnerBox_TopBox>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[0].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[1].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[2].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[3].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[4].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Problem[5].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
            </Problem_Goal_Box_InnerBox>
            <Problem_Goal_Box_InnerBox>
              <Problem_Goal_Box_InnerBox_TopBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Goal.GoalTitle}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>{TextData.Goal.GoalContent}</P_M>
              </Problem_Goal_Box_InnerBox_TopBox>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[0].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[0].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[1].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[1].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    Problem {TextData.Goal.Goal[2].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[2].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[3].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[3].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[4].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[4].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[5].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[5].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[6].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[6].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
                <Collapse_Card_L_ContentsBox_InnerBox>
                  <Subtitle_M_900 isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[7].title}
                  </Subtitle_M_900>
                  <P_M isDarkMode={isDarkMode}>
                    {TextData.Goal.Goal[7].content}
                  </P_M>
                </Collapse_Card_L_ContentsBox_InnerBox>
              </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
            </Problem_Goal_Box_InnerBox>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksStowGenieGoalSectionWrapper>
  );
}

export default WorksStowGenieGoalSection;
