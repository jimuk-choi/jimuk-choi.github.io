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
  Collapse_Card_L_ContentsBox_LogoBox,
  Collapse_Card_L_ContentsBox_InnerBox,
  Collapse_Card_L_ContentsBox_InnerBox_Wrapper,
} from "../../Card/Collapse_Card";

const WorksMUKIConclusionSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
`;

interface WorksMUKIConclusionSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksMUKIConclusionSection({
  isDarkMode,
  setIsHovering,
}: WorksMUKIConclusionSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };
  const TextData =
    language === "ko"
      ? require("../../../i18n/en/Works_MUKI.json")
      : require("../../../i18n/kr/Works_MUKI.json");

  return (
    <WorksMUKIConclusionSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Conclusion.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[0].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[0].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[1].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[1].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[2].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[2].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[3].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[3].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[4].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[4].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[5].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[5].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[6].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[6].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[7].title}
                </Subtitle_M_900>

                <P_M isDarkMode={isDarkMode}>
                  {TextData.Conclusion.Card[7].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
            </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksMUKIConclusionSectionWrapper>
  );
}

export default WorksMUKIConclusionSection;
