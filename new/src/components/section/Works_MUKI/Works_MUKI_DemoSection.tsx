import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../../style/breakpoints";
// Text
import { LanguageContext } from "../../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../../typograpy/subtitle";
//Button
import { Button_Chev } from "../../button/button_chev";
//img
import Deom_Img_Light from "../../../assets/Works_MUKI_Screenshot_Light.png";
import Deom_Img_Dark from "../../../assets/Works_MUKI_Screenshot_Dark.png";

// Card
import {
  Collapse_Card_L,
  Collapse_Card_L_TitleBox,
  Collapse_Card_L_ContentsBox,
  Collapse_Card_L_ContentsBox_LogoBox_W97,
} from "../../Card/Collapse_Card";

const WorksMUKIDemoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
`;

interface WorksMUKIDemoSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksMUKIDemoSection({
  isDarkMode,
  setIsHovering,
}: WorksMUKIDemoSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };

  const ImgSrc = isDarkMode ? Deom_Img_Dark : Deom_Img_Light;
  const TextData =
    language === "ko"
      ? require("../../../i18n/en/Works_MUKI.json")
      : require("../../../i18n/kr/Works_MUKI.json");

  return (
    <WorksMUKIDemoSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Demo.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_LogoBox_W97>
              <img src={ImgSrc} alt="Logo" />
            </Collapse_Card_L_ContentsBox_LogoBox_W97>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksMUKIDemoSectionWrapper>
  );
}

export default WorksMUKIDemoSection;
