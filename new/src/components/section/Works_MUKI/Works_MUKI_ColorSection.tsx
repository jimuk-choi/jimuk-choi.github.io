import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../../style/breakpoints";
// Text
import { LanguageContext } from "../../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../../typograpy/subtitle";
import { P_M } from "../../typograpy/paragraph";
//Button
import { Button_Chev } from "../../button/button_chev";
//img
import Bg from "../../../assets/StowGenie_ColorBg.jpg";
// Card
import {
  Collapse_Card_L_Bg,
  Collapse_Card_L_BG_TitleBox,
  Collapse_Card_L_BG_ContentsBox,
  Collapse_Card_L_BG_ContentsBox_InnerBox_MUKI,
  Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip,
  Collapse_Card_L_BG_ContentsBox_TextBox,
} from "../../Card/Collapse_Card";

const WorksMUKIColorSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
  div {
    color: #ffffff;
  }
`;
interface WorksStowGenieColorSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksMUKIColorSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieColorSectionProps) {
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
    <WorksMUKIColorSectionWrapper>
      <Collapse_Card_L_Bg isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_BG_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Color.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_BG_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_BG_ContentsBox>
            <Collapse_Card_L_BG_ContentsBox_InnerBox_MUKI
              isDarkMode={isDarkMode}
            >
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
                style={{ background: "#69AB8C" }}
              >
                #69AB8C
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
                style={{ background: "#EBFAEB", color: "#69AB8C" }}
              >
                #EBFAEB
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
            </Collapse_Card_L_BG_ContentsBox_InnerBox_MUKI>
            <Collapse_Card_L_BG_ContentsBox_TextBox>
              <P_M isDarkMode={isDarkMode}>{TextData.Color.Content}</P_M>
            </Collapse_Card_L_BG_ContentsBox_TextBox>
          </Collapse_Card_L_BG_ContentsBox>
        )}
      </Collapse_Card_L_Bg>
    </WorksMUKIColorSectionWrapper>
  );
}

export default WorksMUKIColorSection;
