import styled from "@emotion/styled";
import {
  MainSectionTitleWrapper,
  MainGreetingSectionTitleWrapperInnerBox,
  MainGreetingSectionTitle,
  Heading01,
  Heading03,
} from "../typograpy/heading";
import { useContext, useRef, useEffect } from "react";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//Shape
import { Rectangle_L } from "../shape/rectangle";

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

  //Title Ref 설정
  const MainSectionTitle_Ref = useRef(null);
  const Heading01_Ref = useRef(null);
  const Heading02_Ref = useRef(null);
  const Rectangle_L_Ref = useRef(null);

  // 다크 모드 상태에 따라 비디오를 다시 로드
  useEffect(() => {
    //배경 비디오
    if (videoRef.current) {
      videoRef.current.load(); // 비디오 소스
      gsap.fromTo(
        videoRef.current,
        { scale: 3 },
        { scale: 1, duration: 2.2, ease: "Power3.easeOut" }
      );
    }

    //GSAP 애니메이션
    gsap.fromTo(
      Heading02_Ref.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: 2.2, ease: "Power3.easeOut" }
    );
    gsap.fromTo(
      Rectangle_L_Ref.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: 2.2, ease: "Power3.easeOut" }
    );
    gsap.fromTo(
      Heading01_Ref.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: 2.2, ease: "Power3.easeOut" }
    );
    gsap.fromTo(
      MainSectionTitle_Ref.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: 2.2, ease: "Power3.easeOut" }
    );
  }, [isDarkMode]);

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/main_Section.json")
      : require("../../i18n/kr/main_Section.json");

  return (
    <GreetingSection>
      <MainSectionTitleWrapper>
        <MainGreetingSectionTitleWrapperInnerBox>
          <Heading03 ref={Heading02_Ref} isDarkMode={isDarkMode}>
            {TextData.Greeting.Name}
          </Heading03>
          <Rectangle_L ref={Rectangle_L_Ref} />
          <MainGreetingSectionTitle
            ref={MainSectionTitle_Ref}
            isDarkMode={isDarkMode}
          >
            {TextData.Greeting.GreetingTitle}
          </MainGreetingSectionTitle>
          <Heading01 ref={Heading01_Ref} isDarkMode={isDarkMode}>
            {TextData.Greeting.Slogan}
          </Heading01>
        </MainGreetingSectionTitleWrapperInnerBox>
      </MainSectionTitleWrapper>
      <VideoWrapper>
        <StyledVideo ref={videoRef} autoPlay loop muted>
          <source
            src={
              isDarkMode
                ? `${process.env.PUBLIC_URL}/Videos/Video_02_DarkMode.mp4` // 다크 모드일 때 재생할 비디오
                : `${process.env.PUBLIC_URL}/Videos/Video_02_LightMode.mp4` // 라이트 모드일 때 재생할 비디오
            }
            type="video/mp4"
          />
        </StyledVideo>
      </VideoWrapper>
    </GreetingSection>
  );
}
export default MainGreetingSection;
