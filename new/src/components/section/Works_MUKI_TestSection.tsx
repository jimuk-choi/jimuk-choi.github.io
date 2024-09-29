import styled from "@emotion/styled";
import {
  MainSectionTitleWrapper,
  MainGreetingSectionTitleWrapperInnerBox,
  MainGreetingSectionTitle,
  Heading04,
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
  background-color: ${(props) => props.theme.Bg.white90};
`;

interface MainGreetingSectionProps {
  isDarkMode: boolean;
}

function WorksMUKITestSection({ isDarkMode }: MainGreetingSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const videoRef = useRef<HTMLVideoElement>(null);

  //Title Ref 설정
  const MainSectionTitle_Ref = useRef(null);
  const Heading04_Ref = useRef(null);
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
      MainSectionTitle_Ref.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: 2.2, ease: "Power3.easeOut" }
    );
  }, [isDarkMode]);

  const TextData =
    language === "en"
      ? require("../../i18n/en/Process_Section.json")
      : require("../../i18n/kr/Process_Section.json");

  return (
    <GreetingSection>
      <MainSectionTitleWrapper>
        <MainGreetingSectionTitleWrapperInnerBox>
          <Heading04 ref={Heading04_Ref} isDarkMode={isDarkMode}>
            MUKI
          </Heading04>
          <Rectangle_L ref={Rectangle_L_Ref} />
          <MainGreetingSectionTitle
            ref={MainSectionTitle_Ref}
            isDarkMode={isDarkMode}
          >
            {TextData.Greeting.ComingSoon}
          </MainGreetingSectionTitle>
        </MainGreetingSectionTitleWrapperInnerBox>
      </MainSectionTitleWrapper>
    </GreetingSection>
  );
}
export default WorksMUKITestSection;
