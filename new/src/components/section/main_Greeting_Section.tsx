import {
  MainSectionTitleWrapper,
  MainSectionTitleWrapperInnerBox,
  MainSectionTitle,
  Heading01,
} from "../typograpy/heading";
import { useContext } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import styled from "@emotion/styled";
import { useRef, useEffect } from "react";

const GreetingSection = styled.div`
  width: 100%;
  height: 100vh;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  /* position: relative; */
  /* z-index: 100; */
  z-index: -999;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

interface MainGreetingSectionProps {
  isDarkMode: boolean;
}

function MainGreetingSection({ isDarkMode }: MainGreetingSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const videoRef = useRef<HTMLVideoElement>(null);

  // 다크 모드 상태에 따라 비디오를 다시 로드
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // 비디오 소스를 다시 로드
    }
  }, [isDarkMode]);

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const jsonData =
    language === "en"
      ? require("../../i18n/en/main_Section_Greeting.json")
      : require("../../i18n/kr/main_Section_Greeting.json");

  return (
    <GreetingSection>
      <MainSectionTitleWrapper variant="primary">
        <MainSectionTitleWrapperInnerBox>
          <MainSectionTitle>{jsonData.GreetingTitle}</MainSectionTitle>
          <MainSectionTitle>{jsonData.GreetingTitle}</MainSectionTitle>
          <MainSectionTitle>{jsonData.GreetingTitle}</MainSectionTitle>

          <Heading01
            style={{
              position: "absolute",
              top: "120%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#050505",
            }}
          >
            {jsonData.test}
          </Heading01>
        </MainSectionTitleWrapperInnerBox>
      </MainSectionTitleWrapper>
      <VideoWrapper>
        <StyledVideo ref={videoRef} autoPlay loop muted>
          <source
            src={
              isDarkMode
                ? "/Videos/Video_02_DarkMode.mp4" // 다크 모드일 때 재생할 비디오
                : "/Videos/Video_02_LightMode.mp4" // 라이트 모드일 때 재생할 비디오
              /* ? "Videos/Video_02_DarkMode.mp4" // 다크 모드일 때 재생할 비디오 */
              /* : "Videos/Video_02_LightMode.mp4" // 라이트 모드일 때 재생할 비디오 */
            }
            type="video/mp4"
          />
        </StyledVideo>
      </VideoWrapper>
    </GreetingSection>
  );
}
export default MainGreetingSection;
