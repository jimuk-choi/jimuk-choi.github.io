import styled from "@emotion/styled";
import { useContext } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트

//img
import object_Light from "../../assets/object_Light.png";
import object_Dark from "../../assets/object_Dark.png";
//component
import { Heading02, Heading03 } from "../typograpy/heading";
import { Rectangle_L } from "../shape/rectangle";
import { Subtitle_M } from "../typograpy/subtitle";

const WhoIamSection = styled.div`
  padding: 200px 160px;
  background-color: ${(props) => props.theme.Bg.white90};
  position: relative;
  overflow: hidden;
  z-index: -2;
`;
const WhoIamBg = styled.img<{ isDarkMode: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(3.4);
  z-index: -1;
  opacity: 0.3;
`;
const WhoIamSectionInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const WhoIamTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 100px;
  margin: 40px 0 0 0;
`;

interface WhoIamProps {
  isDarkMode: boolean;
}

function MainWhoIamSection({ isDarkMode }: WhoIamProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/main_Section.json")
      : require("../../i18n/kr/main_Section.json");

  const ImgSrc = isDarkMode ? object_Dark : object_Light;

  return (
    <WhoIamSection>
      <WhoIamBg isDarkMode={isDarkMode} src={ImgSrc} alt="" />
      <WhoIamSectionInnerBox>
        <Heading03 isDarkMode={isDarkMode}>{TextData.WhoIam.Title}</Heading03>
        <Rectangle_L />
        <WhoIamTextBox>
          <Heading02 isDarkMode={isDarkMode}>
            {TextData.WhoIam.MainText}
          </Heading02>
          <Subtitle_M isDarkMode={isDarkMode}>
            {TextData.WhoIam.SubText}
          </Subtitle_M>
        </WhoIamTextBox>
      </WhoIamSectionInnerBox>
    </WhoIamSection>
  );
}
export default MainWhoIamSection;
