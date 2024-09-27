import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Heading02 } from "../typograpy/heading";
import { useContext, useRef, useEffect } from "react";
import { Subtitle_XL, Subtitle_L } from "../typograpy/subtitle";
import { P_L, P_M } from "../typograpy/paragraph";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//Card
import { Card_L, Card_L_InnerCard } from "../Card/Card";
//Button
import { Button_E } from "../button/button_style01";
//chip
import { Chip_L } from "../chip/Chip";
//img
import StowGenie_Cover_Img from "../../assets/Works_StowGenie_Main.jpg";
import MUKI_Cover_Img from "../../assets/Works_MUKI_Main.jpg";
import Photoshop from "../../assets/photoshop.png";
import Illustrator from "../../assets/illustrator.png";
import XD from "../../assets/xd.png";
import Figma from "../../assets/figma.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import React from "../../assets/react.png";
import Git from "../../assets/git.png";
import Confluence from "../../assets/confluence.png";
import { ReactComponent as ArrowRightUp } from "../../assets/ArrowRightUp.svg";

const ProjectSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  padding: 140px 80px 32px 80px;
  gap: 32px;
`;
const Card_L_Introduce_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 60%;
  height: 900px;
`;
const Card_L_InnerCard_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Card_L_Introduce_Title_Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0 32px;
`;
const Card_L_Introduce_Title_Box = styled.div`
  display: flex;
`;
const Card_L_Introduce_Title_Number = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.Color.white};
`;
const Card_L_Img_Wrapper = styled.div`
  width: 40%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
`;
const Card_L_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Card_L_ChipBox = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 32px 32px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  display: flex;
  /* flex-direction: column-reverse; */
  flex-wrap: wrap;
  gap: 8px;
`;
const UsedTool_ImgBox = styled.div`
  display: flex;
  gap: 16px;
`;
const UsedTool_Img = styled.img`
  width: 48px;
`;

export const Arrow_Img = styled(ArrowRightUp, {
  shouldForwardProp: (prop) => !["isDarkMode"].includes(prop),
})<{ isDarkMode: boolean }>`
  width: 32px;
  height: 32px;
  color: ${(props) => props.theme.Color.white};
`;

interface MainProjectSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}
function WorksProjetSection({
  isDarkMode,
  setIsHovering,
}: MainProjectSectionProps) {
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

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/Works_Section.json")
      : require("../../i18n/kr/Works_Section.json");

  return (
    <ProjectSectionWrapper>
      <Card_L isDarkMode={isDarkMode}>
        <Card_L_Introduce_Wrapper>
          <Card_L_Introduce_Title_Section>
            <Subtitle_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.SubTitle}
            </Subtitle_L>
            <Card_L_Introduce_Title_Box>
              <Heading02 isDarkMode={isDarkMode}>
                {TextData.StowGenie.Title}
              </Heading02>
              <Card_L_Introduce_Title_Number>
                {TextData.StowGenie.Number}
              </Card_L_Introduce_Title_Number>
            </Card_L_Introduce_Title_Box>
            <P_L isDarkMode={isDarkMode}>{TextData.StowGenie.Slogan}</P_L>
          </Card_L_Introduce_Title_Section>
          <Card_L_InnerCard_Wrapper>
            <Card_L_InnerCard isDarkMode={isDarkMode}>
              <Subtitle_XL isDarkMode={isDarkMode}>
                {TextData.StowGenie.Card[0].title}
              </Subtitle_XL>
              <P_M isDarkMode={isDarkMode}>
                {TextData.StowGenie.Card[0].content}
              </P_M>
            </Card_L_InnerCard>
            <Card_L_InnerCard isDarkMode={isDarkMode}>
              <Subtitle_XL isDarkMode={isDarkMode}>
                {TextData.StowGenie.Card[1].title}
              </Subtitle_XL>
              <UsedTool_ImgBox>
                <UsedTool_Img src={Photoshop} />
                <UsedTool_Img src={Illustrator} />
                <UsedTool_Img src={XD} />
                <UsedTool_Img src={Figma} />
                <UsedTool_Img src={HTML} />
                <UsedTool_Img src={CSS} />
                <UsedTool_Img src={React} />
                <UsedTool_Img src={Git} />
                <UsedTool_Img src={Confluence} />
              </UsedTool_ImgBox>
            </Card_L_InnerCard>
            <NavLink to="/Works/StowGenie">
              <Button_E
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
                style={{ width: "100%" }}
              >
                <Subtitle_XL isDarkMode={isDarkMode}>
                  {TextData.StowGenie.Card[2].title}
                </Subtitle_XL>
                <Arrow_Img isDarkMode={isDarkMode} />
              </Button_E>
            </NavLink>
          </Card_L_InnerCard_Wrapper>
        </Card_L_Introduce_Wrapper>

        <Card_L_Img_Wrapper>
          <Card_L_Img src={StowGenie_Cover_Img} />
          <Card_L_ChipBox>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[0].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[1].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[2].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[3].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[4].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[5].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[6].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.StowGenie.Chip[7].label}
            </Chip_L>
          </Card_L_ChipBox>
        </Card_L_Img_Wrapper>
      </Card_L>
      <Card_L
        isDarkMode={isDarkMode}
        style={{
          flexDirection: "row-reverse",
        }}
      >
        <Card_L_Introduce_Wrapper>
          <Card_L_Introduce_Title_Section>
            <Subtitle_L isDarkMode={isDarkMode}>
              {TextData.MUKI.SubTitle}
            </Subtitle_L>
            <Card_L_Introduce_Title_Box>
              <Heading02 isDarkMode={isDarkMode}>
                {TextData.MUKI.Title}ㅆㄴㅅㄷ
              </Heading02>
              <Card_L_Introduce_Title_Number>
                {TextData.MUKI.Number}
              </Card_L_Introduce_Title_Number>
            </Card_L_Introduce_Title_Box>
            <P_L isDarkMode={isDarkMode}>{TextData.MUKI.Slogan}</P_L>
          </Card_L_Introduce_Title_Section>
          <Card_L_InnerCard_Wrapper>
            <Card_L_InnerCard isDarkMode={isDarkMode}>
              <Subtitle_XL isDarkMode={isDarkMode}>
                {TextData.MUKI.Card[0].title}
              </Subtitle_XL>
              <P_M isDarkMode={isDarkMode}>{TextData.MUKI.Card[0].content}</P_M>
            </Card_L_InnerCard>
            <Card_L_InnerCard isDarkMode={isDarkMode}>
              <Subtitle_XL isDarkMode={isDarkMode}>
                {TextData.MUKI.Card[1].title}
              </Subtitle_XL>
              <UsedTool_ImgBox>
                <UsedTool_Img src={Photoshop} />
                <UsedTool_Img src={Illustrator} />
                <UsedTool_Img src={Figma} />
                <UsedTool_Img src={HTML} />
                <UsedTool_Img src={CSS} />
                <UsedTool_Img src={React} />
                <UsedTool_Img src={Git} />
                <UsedTool_Img src={Confluence} />
              </UsedTool_ImgBox>
            </Card_L_InnerCard>
            <NavLink to="/Works/MUKI">
              <Button_E
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
                style={{ width: "100%" }}
              >
                <Subtitle_XL isDarkMode={isDarkMode}>
                  {TextData.StowGenie.Card[2].title}
                </Subtitle_XL>
                <Arrow_Img isDarkMode={isDarkMode} />
              </Button_E>
            </NavLink>
          </Card_L_InnerCard_Wrapper>
        </Card_L_Introduce_Wrapper>

        <Card_L_Img_Wrapper>
          <Card_L_Img src={MUKI_Cover_Img} />
          <Card_L_ChipBox>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[0].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[1].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[2].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[3].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[4].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[5].label}
            </Chip_L>
            <Chip_L isDarkMode={isDarkMode}>
              {TextData.MUKI.Chip[6].label}
            </Chip_L>
          </Card_L_ChipBox>
        </Card_L_Img_Wrapper>
      </Card_L>
    </ProjectSectionWrapper>
  );
}
export default WorksProjetSection;
