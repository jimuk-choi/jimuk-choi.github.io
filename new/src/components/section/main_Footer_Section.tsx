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
import { MainFooterSectionTitle } from "../typograpy/heading";
import { MainFooterSectionTitleWrapperInnerBox } from "../typograpy/heading";
import { breakpoints } from "../../style/breakpoints";
import { Button_D } from "../button/button_style01";

//gsap plugin 등록
gsap.registerPlugin(ScrollTrigger);

const Footer = styled.div`
  padding: 180px 160px 320px 160px;
  background-color: ${(props) => props.theme.Bg.white90};
  position: relative;
  overflow: hidden;
  z-index: 0;
  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 120px 40px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 56px 32px;
  }
`;
const FooterBG = styled.img<{ isDarkMode: boolean }>`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%) scale(1.6);
  z-index: -1;
  opacity: 0.6;
  @media (max-width: ${breakpoints.tabletS}px) {
    transform: translate(-50%, -50%) scale(1.6);
  }
`;
const FooterSectionInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
`;

interface FooterProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainFooterSection({ isDarkMode, setIsHovering }: FooterProps) {
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

  const handleEmailClick = () => {
    window.location.href = "mailto:jimook1995@naver.com";
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+821084406462"; // 전화번호를 국제 표준 형식으로 입력하세요
  };

  useEffect(() => {
    if (
      Heading03_Title_Ref.current &&
      SubTitle_M_Ref.current &&
      Heading03_SubTitle_Ref
    ) {
      gsap.fromTo(
        Heading03_Title_Ref.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: Heading03_Title_Ref.current,
            start: "top 85%",
            end: "bottom 80%",
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
            start: "top 85%",
            end: "bottom 80%",
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
            start: "top 85%",
            end: "bottom 80%",
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
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
            /* markers: true, */
          },
        }
      );
    }
  }, []);

  return (
    <Footer>
      <FooterBG isDarkMode={isDarkMode} src={ImgSrc} alt="" />
      <FooterSectionInnerBox>
        <MainFooterSectionTitleWrapperInnerBox>
          <MainFooterSectionTitle isDarkMode={isDarkMode}>
            Let's Talk.
          </MainFooterSectionTitle>
          <ButtonBox>
            <Button_D
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handleEmailClick}
              isDarkMode={isDarkMode}
            >
              <p>E-mail</p>
              <p>jimook950@gmail.com</p>
            </Button_D>
            <Button_D
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handlePhoneClick}
              isDarkMode={isDarkMode}
            >
              <p>Phone Number</p>
              <p>010-8440-6462</p>
            </Button_D>
          </ButtonBox>
        </MainFooterSectionTitleWrapperInnerBox>
      </FooterSectionInnerBox>
    </Footer>
  );
}
export default MainFooterSection;
