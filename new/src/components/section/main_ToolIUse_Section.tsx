import styled from "@emotion/styled";
import { useContext, useEffect, useMemo, useRef } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// img
import Photoshop from "../../assets/photoshop.png";
import Illustrator from "../../assets/illustrator.png";
import XD from "../../assets/xd.png";
import InDesign from "../../assets/indesign.png";
import AfterEffects from "../../assets/aftereffects.png";
import Zeplin from "../../assets/zeplin.png";
import Figma from "../../assets/figma.png";
import Blender from "../../assets/blender.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import SCSS from "../../assets/scss.png";
import React from "../../assets/react.png";
import Typescript from "../../assets/typescript.png";
import jQuery from "../../assets/jquery.png";
import Git from "../../assets/git.png";
import Notion from "../../assets/notion.png";
import Confluence from "../../assets/confluence.png";
import Excel from "../../assets/excel.png";
import Powerpoint from "../../assets/powerpoint.png";
import Word from "../../assets/word.png";
// component
import { Heading03 } from "../typograpy/heading";
import { Rectangle_L } from "../shape/rectangle";
import { Subtitle_S_MainToolIUse } from "../typograpy/subtitle";
import { breakpoints } from "../../style/breakpoints";

gsap.registerPlugin(ScrollTrigger);

const ToolIUseSection = styled.div`
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

const ToolIUseSectionInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ToolIUseImgBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 100px;
  margin: 80px 0 0 0;
  @media (max-width: ${breakpoints.tabletL}px) {
    gap: 28px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    gap: 28px;
  }
`;

const ToolIUseImgBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 160px;
  @media (max-width: ${breakpoints.tabletL}px) {
    width: 150px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    width: 48px;
    gap: 12px;
  }
  @media (max-width: ${breakpoints.mobileS}px) {
    width: 40px;
    gap: 28px;
  }
`;

const ToolIUseImg = styled.img`
  width: 44px;
  @media (max-width: ${breakpoints.tabletL}px) {
    width: 36px;
  }
`;

interface WhoIamProps {
  isDarkMode: boolean;
}

function MainToolIUseSection({ isDarkMode }: WhoIamProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/main_Section.json")
      : require("../../i18n/kr/main_Section.json");

  // 이미지와 텍스트 데이터를 배열로 관리
  const tools = useMemo(
    () => [
      { img: Photoshop, text: TextData.ToolIUse.AdobePhotoshop },
      { img: Illustrator, text: TextData.ToolIUse.AdobeIllustrator },
      { img: XD, text: TextData.ToolIUse.AdobeXD },
      { img: InDesign, text: TextData.ToolIUse.AdobeInDesign },
      { img: AfterEffects, text: TextData.ToolIUse.AdobeAffterEffects },
      { img: Zeplin, text: TextData.ToolIUse.Zeplin },
      { img: Figma, text: TextData.ToolIUse.Figma },
      { img: Blender, text: TextData.ToolIUse.Blender },
      { img: HTML, text: TextData.ToolIUse.HTML },
      { img: CSS, text: TextData.ToolIUse.CSS },
      { img: Javascript, text: TextData.ToolIUse.Javascript },
      { img: SCSS, text: TextData.ToolIUse.SCSS },
      { img: React, text: TextData.ToolIUse.React },
      { img: Typescript, text: TextData.ToolIUse.Typescript },
      { img: jQuery, text: TextData.ToolIUse.jQuery },
      { img: Git, text: TextData.ToolIUse.Git },
      { img: Notion, text: TextData.ToolIUse.Notion },
      { img: Confluence, text: TextData.ToolIUse.Confluence },
      { img: Excel, text: TextData.ToolIUse.Excel },
      { img: Powerpoint, text: TextData.ToolIUse.Powerpoint },
      { img: Word, text: TextData.ToolIUse.Word },
    ],
    [TextData]
  );

  //gsap 애니메이션
  const Heading03_Title_Ref = useRef<HTMLHeadingElement>(null);
  const Rectangle_Ref = useRef<HTMLDivElement>(null);
  const Img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Heading03_Title_Ref.current) {
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
          },
        }
      );
      gsap.fromTo(
        Img.current,
        { opacity: 0 }, //시작
        {
          opacity: 1,
          scrollTrigger: {
            trigger: Img.current,
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <ToolIUseSection>
      <ToolIUseSectionInnerBox>
        <Heading03 ref={Heading03_Title_Ref} isDarkMode={isDarkMode}>
          {TextData.ToolIUse.Title}
        </Heading03>
        <Rectangle_L ref={Rectangle_Ref} />
        <ToolIUseImgBoxWrapper ref={Img}>
          {tools.map((tool, index) => (
            <ToolIUseImgBox key={index}>
              <ToolIUseImg src={tool.img} />
              <Subtitle_S_MainToolIUse isDarkMode={isDarkMode}>
                {tool.text}
              </Subtitle_S_MainToolIUse>
            </ToolIUseImgBox>
          ))}
        </ToolIUseImgBoxWrapper>
      </ToolIUseSectionInnerBox>
    </ToolIUseSection>
  );
}
export default MainToolIUseSection;
