import styled from "@emotion/styled";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//img
import object_Light from "../../assets/object_Light.png";
import object_Dark from "../../assets/object_Dark.png";
//component
import { Heading03 } from "../typograpy/heading";
import { Rectangle_L } from "../shape/rectangle";
import { Subtitle_M } from "../typograpy/subtitle";
import { breakpoints } from "../../style/breakpoints";

//gsap plugin 등록
gsap.registerPlugin(ScrollTrigger);

const WhoIamSection = styled.div`
  padding: 200px 160px;
  background-color: ${(props) => props.theme.Bg.white90};
  position: relative;
  overflow: hidden;
  z-index: -2;
  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 120px 40px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 56px 32px;
  }
`;
const WhoIamBg = styled.img<{ isDarkMode: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(3.4);
  z-index: -1;
  opacity: 0.3;
  @media (max-width: ${breakpoints.tabletS}px) {
    transform: translate(-50%, -50%) scale(2);
  }
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
  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 0 20px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 0;
  }
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

  //gsap 애니메이션
  const Heading03_Title_Ref = useRef<HTMLHeadingElement>(null);
  const Rectangle_Ref = useRef<HTMLDivElement>(null);
  const Heading03_SubTitle_Ref = useRef<HTMLHeadingElement>(null);
  const SubTitle_M_Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (Heading03_Title_Ref.current && SubTitle_M_Ref.current) {
      gsap.fromTo(
        Heading03_Title_Ref.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: Heading03_Title_Ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            /* markers: true, */
          },
        }
      );
      gsap.fromTo(
        Rectangle_Ref.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: Rectangle_Ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            /* markers: true, */
          },
        }
      );
      gsap.fromTo(
        Heading03_SubTitle_Ref.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: Heading03_SubTitle_Ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            /* markers: true, */
          },
        }
      );
      gsap.fromTo(
        SubTitle_M_Ref.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: SubTitle_M_Ref.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            /* markers: true, */
          },
        }
      );
    }
  }, []);

  return (
    <WhoIamSection>
      <WhoIamBg isDarkMode={isDarkMode} src={ImgSrc} alt="" />
      <WhoIamSectionInnerBox>
        <Heading03 ref={Heading03_Title_Ref} isDarkMode={isDarkMode}>
          {TextData.WhoIam.Title}
        </Heading03>
        <Rectangle_L ref={Rectangle_Ref} />
        <WhoIamTextBox>
          <Heading03 ref={Heading03_SubTitle_Ref} isDarkMode={isDarkMode}>
            {TextData.WhoIam.MainText}
          </Heading03>
          <Subtitle_M ref={SubTitle_M_Ref} isDarkMode={isDarkMode}>
            {TextData.WhoIam.SubText}
          </Subtitle_M>
        </WhoIamTextBox>
      </WhoIamSectionInnerBox>
    </WhoIamSection>
  );
}
export default MainWhoIamSection;
