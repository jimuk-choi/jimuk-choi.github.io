import { MainSectionTitleWrapper, MainSectionTitle } from "../heading/h1";
import { useContext } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import styled from "@emotion/styled";

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  position: absolute;
  z-index: -999;
`;
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  /* display: block; */
`;

const GreetingSection = styled.div`
  width: 100%;
  height: 100vh;
`;

function MainGreetingSection() {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const jsonData =
    language === "en"
      ? require("../../i18n/en/main_Section_Greeting.json")
      : require("../../i18n/kr/main_Section_Greeting.json");

  return (
    <GreetingSection>
      <VideoWrapper>
        <StyledVideo autoPlay loop muted>
          {/* <source src="../src/assets/Video_01.mov" type="video/quicktime" /> */}
          <source src="Videos/Video_01.mp4" type="video/mp4" />
        </StyledVideo>
      </VideoWrapper>
      <MainSectionTitleWrapper variant="primary">
        <MainSectionTitle>
          <p>{jsonData.test}</p>
          <p>{jsonData.GreetingTitle}</p>
        </MainSectionTitle>
      </MainSectionTitleWrapper>
    </GreetingSection>
  );
}
export default MainGreetingSection;
