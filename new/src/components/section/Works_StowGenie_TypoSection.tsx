import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../style/breakpoints";
// Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../typograpy/subtitle";
import { P_M } from "../typograpy/paragraph";
//img
import { ReactComponent as Chev } from "../../assets/Chev.svg";
import Typo_Img_Light from "../../assets/Typography_Light.png";
import Typo_Img_Dark from "../../assets/Typography_Dark.png";
// Card
import {
  Collapse_Card_L,
  Collapse_Card_L_TitleBox,
  Collapse_Card_L_ContentsBox,
  Collapse_Card_L_ContentsBox_LogoBox_W97,
  Collapse_Card_L_ContentsBox_InnerBox,
  Collapse_Card_L_ContentsBox_InnerBox_Wrapper,
} from "../Card/Collapse_Card";

const WorksStowGenieTypoSectionWrapper = styled.div`
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

const Chev_Img = styled(Chev, {
  shouldForwardProp: (prop) => !["isDarkMode", "isExpanded"].includes(prop),
})<{ isDarkMode: boolean; isExpanded: boolean }>`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.Color.white};
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isExpanded ? "rotate(0deg)" : "rotate(180deg)"}; // 펼쳐질 때 회전
`;

interface WorksStowGenieTypoSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieTypoSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieTypoSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };
  const ImgSrc = isDarkMode ? Typo_Img_Dark : Typo_Img_Light;
  const TextData =
    language === "en"
      ? require("../../i18n/en/Works_StowGenie.json")
      : require("../../i18n/kr/Works_StowGenie.json");

  return (
    <WorksStowGenieTypoSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Typo.Title}
          </Subtitle_XL>
          <Chev_Img isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_LogoBox_W97>
              <img src={ImgSrc} alt="Logo" />
            </Collapse_Card_L_ContentsBox_LogoBox_W97>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksStowGenieTypoSectionWrapper>
  );
}

export default WorksStowGenieTypoSection;
