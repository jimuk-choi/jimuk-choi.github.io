import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Heading02, Heading03 } from "../typograpy/heading";
import { useContext, useRef, useEffect } from "react";
import { Subtitle_XL, Subtitle_L } from "../typograpy/subtitle";
import { P_L, P_M } from "../typograpy/paragraph";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//Card
import {
  Card_L,
  Card_L_InnerCard,
  Card_M,
  Card_S_JobSeeking,
} from "../Card/Card";
//Button
import { Button_A, Button_E } from "../button/button_style01";
//chip
import { Chip_L_fill, Chip_M_Storke } from "../chip/Chip";
//img
import StowGenie_Cover_Img from "../../assets/Works_StowGenie_Main.webp";
import MUKI_Cover_Img from "../../assets/Works_MUKI_Main.webp";
import MAOIA01 from "../../assets/mAOiA_01.webp";
import MAOIA02 from "../../assets/mAOiA_02.webp";
import JO01 from "../../assets/JO_01.webp";
import JO02 from "../../assets/JO_02.webp";
import NH01 from "../../assets/NH_01.webp";
import NH02 from "../../assets/NH_02.webp";
import FloraFusionHome from "../../assets/FloraFusion_Home.webp";
import FloraFusionLogin from "../../assets/FloraFusion_LoginPage.webp";
import FloraFusionMy01 from "../../assets/FloraFusion_MyPage01.webp";
import FloraFusionMy02 from "../../assets/FloraFusion_MyPage02.webp";
import FloraFusionPlants from "../../assets/FloraFusion_MyPlantsDetail.webp";
import Memoji from "../../assets/Memoji.png";
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
const Card_L_Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
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
  width: 72%;
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
const Card_M_Box = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.Bg.white90};
  gap: 32px;
`;
const Card_M_TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Card_M_TopBox_TitleBox = styled.div`
  display: flex;
`;
const Card_M_TopBox_Number = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.Color.white};
`;
const Card_M_TopBox_ChipBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Card_M_CenterBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  /* width: 100%; */
`;
const Card_M_CenterBox_ImgWrapper_Web = styled.div`
  display: flex;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1.5px solid #efefef;
`;

const Card_M_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Card_M_BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  const handleEmailClick = () => {
    window.location.href = "mailto:jimook1995@naver.com";
  };

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/Works_Section.json")
      : require("../../i18n/kr/Works_Section.json");

  return (
    <ProjectSectionWrapper>
      <Card_L_Box>
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
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[0].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[1].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[2].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[3].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[4].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[5].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[6].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.StowGenie.Chip[7].label}
              </Chip_L_fill>
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
                  {TextData.MUKI.Title}
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
                <P_M isDarkMode={isDarkMode}>
                  {TextData.MUKI.Card[0].content}
                </P_M>
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
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[0].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[1].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[2].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[3].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[4].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[5].label}
              </Chip_L_fill>
              <Chip_L_fill isDarkMode={isDarkMode}>
                {TextData.MUKI.Chip[6].label}
              </Chip_L_fill>
            </Card_L_ChipBox>
          </Card_L_Img_Wrapper>
        </Card_L>
      </Card_L_Box>
      <Card_M_Box>
        <Card_M isDarkMode={isDarkMode}>
          <Card_M_TopBox>
            <Card_M_TopBox_TitleBox>
              <Heading03 isDarkMode={isDarkMode}>
                {TextData.mAOiA.Title}
              </Heading03>
              <Card_M_TopBox_Number>
                {TextData.mAOiA.Number}
              </Card_M_TopBox_Number>
            </Card_M_TopBox_TitleBox>
            <Card_M_TopBox_ChipBox>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.mAOiA.Chip[0].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.mAOiA.Chip[1].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.mAOiA.Chip[2].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.mAOiA.Chip[3].label}
              </Chip_M_Storke>
            </Card_M_TopBox_ChipBox>
          </Card_M_TopBox>
          <Card_M_CenterBox>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={MAOIA01} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={MAOIA02} />
            </Card_M_CenterBox_ImgWrapper_Web>
          </Card_M_CenterBox>
          <Card_M_BottomBox>
            <P_M isDarkMode={isDarkMode}>{TextData.mAOiA.Content}</P_M>
          </Card_M_BottomBox>
        </Card_M>
        <Card_M isDarkMode={isDarkMode}>
          <Card_M_TopBox>
            <Card_M_TopBox_TitleBox>
              <Heading03 isDarkMode={isDarkMode}>{TextData.JO.Title}</Heading03>
              <Card_M_TopBox_Number>{TextData.JO.Number}</Card_M_TopBox_Number>
            </Card_M_TopBox_TitleBox>
            <Card_M_TopBox_ChipBox>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.JO.Chip[0].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.JO.Chip[1].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.JO.Chip[2].label}
              </Chip_M_Storke>
            </Card_M_TopBox_ChipBox>
          </Card_M_TopBox>
          <Card_M_CenterBox>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={JO01} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={JO02} />
            </Card_M_CenterBox_ImgWrapper_Web>
          </Card_M_CenterBox>
          <Card_M_BottomBox>
            <P_M isDarkMode={isDarkMode}>{TextData.JO.Content}</P_M>
          </Card_M_BottomBox>
        </Card_M>
      </Card_M_Box>
      <Card_M_Box>
        <Card_M isDarkMode={isDarkMode}>
          <Card_M_TopBox>
            <Card_M_TopBox_TitleBox>
              <Heading03 isDarkMode={isDarkMode}>{TextData.NH.Title}</Heading03>
              <Card_M_TopBox_Number>{TextData.NH.Number}</Card_M_TopBox_Number>
            </Card_M_TopBox_TitleBox>
            <Card_M_TopBox_ChipBox>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.NH.Chip[0].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.NH.Chip[1].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.NH.Chip[2].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.NH.Chip[3].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.NH.Chip[4].label}
              </Chip_M_Storke>
            </Card_M_TopBox_ChipBox>
          </Card_M_TopBox>
          <Card_M_CenterBox>
            <Card_M_CenterBox_ImgWrapper_Web style={{ width: "29%" }}>
              <Card_M_Img src={NH01} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={NH02} />
            </Card_M_CenterBox_ImgWrapper_Web>
          </Card_M_CenterBox>
          <Card_M_BottomBox>
            <P_M isDarkMode={isDarkMode}>{TextData.NH.Content}</P_M>
          </Card_M_BottomBox>
        </Card_M>
        <Card_M isDarkMode={isDarkMode}>
          <Card_M_TopBox>
            <Card_M_TopBox_TitleBox>
              <Heading03 isDarkMode={isDarkMode}>
                {TextData.FloraFusion.Title}
              </Heading03>
              <Card_M_TopBox_Number>
                {TextData.FloraFusion.Number}
              </Card_M_TopBox_Number>
            </Card_M_TopBox_TitleBox>
            <Card_M_TopBox_ChipBox>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.FloraFusion.Chip[0].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.FloraFusion.Chip[1].label}
              </Chip_M_Storke>
              <Chip_M_Storke isDarkMode={isDarkMode}>
                {TextData.FloraFusion.Chip[2].label}
              </Chip_M_Storke>
            </Card_M_TopBox_ChipBox>
          </Card_M_TopBox>
          <Card_M_CenterBox>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={FloraFusionHome} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={FloraFusionLogin} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={FloraFusionMy01} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={FloraFusionMy02} />
            </Card_M_CenterBox_ImgWrapper_Web>
            <Card_M_CenterBox_ImgWrapper_Web>
              <Card_M_Img src={FloraFusionPlants} />
            </Card_M_CenterBox_ImgWrapper_Web>
          </Card_M_CenterBox>
          <Card_M_BottomBox>
            <P_M isDarkMode={isDarkMode}>{TextData.FloraFusion.Content}</P_M>
          </Card_M_BottomBox>
        </Card_M>
        <Card_S_JobSeeking
          style={{ alignItems: "center" }}
          isDarkMode={isDarkMode}
        >
          <Card_M_Img src={Memoji} />
          <Heading03 isDarkMode={isDarkMode}>
            {TextData.JobSeeking.Title}
          </Heading03>

          <P_M style={{ textAlign: "center" }} isDarkMode={isDarkMode}>
            {TextData.JobSeeking.Content}
          </P_M>
          <Button_A
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleEmailClick}
            isDarkMode={isDarkMode}
          >
            {TextData.JobSeeking.buttonText}
          </Button_A>
        </Card_S_JobSeeking>
      </Card_M_Box>
    </ProjectSectionWrapper>
  );
}
export default WorksProjetSection;