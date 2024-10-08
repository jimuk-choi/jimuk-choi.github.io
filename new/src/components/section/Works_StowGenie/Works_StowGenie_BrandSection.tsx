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
import { ReactComponent as Chev } from "../../../assets/Chev.svg";
import StowGenie_Logo_Light from "../../../assets/StowGenie_Logo_Light.png";
import StowGenie_Logo_Dark from "../../../assets/StowGenie_Logo_Dark.png";
// Card
import {
  Collapse_Card_L,
  Collapse_Card_L_TitleBox,
  Collapse_Card_L_ContentsBox,
  Collapse_Card_L_ContentsBox_LogoBox,
  Collapse_Card_L_ContentsBox_InnerBox,
  Collapse_Card_L_ContentsBox_InnerBox_Wrapper,
} from "../../Card/Collapse_Card";

const WorksStowGenieBrandSectionWrapper = styled.div`
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

interface WorksStowGenieBrandSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenieBrandSection({
  isDarkMode,
  setIsHovering,
}: WorksStowGenieBrandSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [isExpanded, setIsExpanded] = useState(true); // 기본적으로 펼쳐진 상태로 설정

  const toggleCard = () => {
    setIsExpanded((prev) => !prev); // 상태 토글
  };
  const ImgSrc = isDarkMode ? StowGenie_Logo_Dark : StowGenie_Logo_Light;
  const TextData =
    language === "ko"
      ? require("../../../i18n/en/Works_StowGenie.json")
      : require("../../../i18n/kr/Works_StowGenie.json");

  return (
    <WorksStowGenieBrandSectionWrapper>
      <Collapse_Card_L isDarkMode={isDarkMode} isExpanded={isExpanded}>
        <Collapse_Card_L_TitleBox
          onClick={toggleCard}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Subtitle_XL isDarkMode={isDarkMode}>
            {TextData.Brand.Title}
          </Subtitle_XL>
          <Button_Chev isDarkMode={isDarkMode} isExpanded={isExpanded} />
        </Collapse_Card_L_TitleBox>

        {isExpanded && (
          <Collapse_Card_L_ContentsBox>
            <Collapse_Card_L_ContentsBox_LogoBox>
              <img src={ImgSrc} alt="Logo" />
            </Collapse_Card_L_ContentsBox_LogoBox>
            <Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[0].title}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[0].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[1].title}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[1].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[2].title}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[2].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
              <Collapse_Card_L_ContentsBox_InnerBox>
                <Subtitle_M_900 isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[3].title}
                </Subtitle_M_900>
                <P_M isDarkMode={isDarkMode}>
                  {TextData.Brand.Card[3].content}
                </P_M>
              </Collapse_Card_L_ContentsBox_InnerBox>
            </Collapse_Card_L_ContentsBox_InnerBox_Wrapper>
          </Collapse_Card_L_ContentsBox>
        )}
      </Collapse_Card_L>
    </WorksStowGenieBrandSectionWrapper>
  );
}

export default WorksStowGenieBrandSection;
