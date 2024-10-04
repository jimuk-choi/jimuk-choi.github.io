import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { breakpoints } from "../../style/breakpoints";
// Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import { Subtitle_XL, Subtitle_M_900 } from "../typograpy/subtitle";
import { P_M } from "../typograpy/paragraph";
//img
import { ReactComponent as Chev } from "../../assets/Chev.svg";
import Bg from "../../assets/StowGenie_ColorBg.jpg";
// Card
import {
  Collapse_Card_L_Bg,
  Collapse_Card_L_BG_TitleBox,
  Collapse_Card_L_BG_ContentsBox,
  Collapse_Card_L_BG_ContentsBox_InnerBox,
  Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip,
  Collapse_Card_L_BG_ContentsBox_TextBox,
} from "../Card/Collapse_Card";

const WorksStowGenieColorSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
  div {
    color: #ffffff;
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
const Color_Bg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transform: scale(1.4);
`;

const Chev_Img = styled(Chev, {
  shouldForwardProp: (prop) => !["isDarkMode", "isExpanded"].includes(prop),
})<{ isDarkMode: boolean; isExpanded: boolean }>`
  width: 32px;
  height: 32px;
  color: #ffffff;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isExpanded ? "rotate(0deg)" : "rotate(180deg)"}; // 펼쳐질 때 회전
`;

interface WorksStowGenieColorSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieColorSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieColorSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };

  const TextData =
    language === "en"
      ? require("../../i18n/en/Works_StowGenie.json")
      : require("../../i18n/kr/Works_StowGenie.json");

  return (
    <WorksStowGenieColorSectionWrapper>
      <Collapse_Card_L_Bg isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Color_Bg src={Bg} />
        <Collapse_Card_L_BG_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Color.Title}
          </Subtitle_XL>
          <Chev_Img isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_BG_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_BG_ContentsBox>
            <Collapse_Card_L_BG_ContentsBox_InnerBox isDarkMode={isDarkMode}>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #10181E
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #1A2734
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #243844
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #4B5763
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #899296
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
              <Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip
                isDarkMode={isDarkMode}
              >
                #BBC0BE
              </Collapse_Card_L_BG_ContentsBox_InnerBox_ColorChip>
            </Collapse_Card_L_BG_ContentsBox_InnerBox>
            <Collapse_Card_L_BG_ContentsBox_TextBox>
              <P_M style={{ color: "#ffffff" }} isDarkMode={isDarkMode}>
                The color concept for Stowgenie's identity draws inspiration
                from the deep, mysterious shades of the ocean. Just as the ocean
                is vast, powerful, and full of hidden depths, the rich navy blue
                used in the design symbolizes the company's ability to navigate
                complex and large-scale shipping challenges. This color choice
                not only reflects the maritime industry but also conveys a sense
                of trust, stability, and professionalism, which are key
                qualities in the global logistics and port solutions that
                Stowgenie provides.
              </P_M>
            </Collapse_Card_L_BG_ContentsBox_TextBox>
          </Collapse_Card_L_BG_ContentsBox>
        )}
      </Collapse_Card_L_Bg>
    </WorksStowGenieColorSectionWrapper>
  );
}

export default WorksStowGenieColorSection;
