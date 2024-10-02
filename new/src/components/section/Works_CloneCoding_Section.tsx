import styled from "@emotion/styled";
import {
  CloneCoding_Card,
  CloneCoding_Card_InnerBox,
  CloneCoding_Card_InnerBox_TopBox,
  CloneCoding_Card_InnerBox_BottomBox,
} from "../Card/Card";
import { Chip_M_Storke } from "../chip/Chip";
import { Subtitle_S } from "../typograpy/subtitle";
import { Heading03 } from "../typograpy/heading";
import { useContext, useRef, useEffect } from "react";
import { Button_F } from "../button/button_style01";
import { ReactComponent as ArrowRightUp } from "../../assets/ArrowRightUp.svg";
import { breakpoints } from "../../style/breakpoints";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Text
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//img
import Genesis from "../../assets/genesis.webp";
import Musign from "../../assets/musign.webp";
import Younglim from "../../assets/younglim.webp";
import CrewALa from "../../assets/crew a la.webp";
import Daebang from "../../assets/daebang.webp";
import Dopda from "../../assets/dopda.webp";
import Phomain from "../../assets/phomain.webp";
import Hanwha from "../../assets/hanwha.webp";
import YStudio from "../../assets/ystudio.webp";

const CloneCodingSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 0px 80px 32px;
  background-color: ${(props) => props.theme.Bg.white90};
  @media (max-width: ${breakpoints.tabletM}px) {
    padding: 0px 40px 32px;
  }
`;
const CloneCoding_Card_Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
const CloneCoding_Card_ChipBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 6px;
  color: ${(props) => props.theme.Color.Button_Primary};
  padding: 4px 0;
  div {
    border: 1.5px solid ${(props) => props.theme.Border.White};
  }
  @media (max-width: ${breakpoints.desktopL}px) {
    div {
      border: 1.5px solid ${(props) => props.theme.Border.White};
      padding: 4px 12px;
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    gap: 4px;
  }
`;
const Arrow_Img = styled(ArrowRightUp, {
  shouldForwardProp: (prop) => !["isDarkMode"].includes(prop),
})<{ isDarkMode: boolean }>`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.Color.Button_Primary};
`;

interface WorksCloneCodingSectionProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksCloneCodingSection({
  isDarkMode,
  setIsHovering,
}: WorksCloneCodingSectionProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // URL
  const URLs = {
    Genesis: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/genesis/html/index.html"
      ),
    Musign: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/musign/html/index.html"
      ),
    Younglim: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/younglim/html/index.html"
      ),
    CrewALa: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/crewala/html/index.html"
      ),
    Daebang: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/daebang/html/ex.html"
      ),
    Dopda: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/dopda/html/index.html"
      ),
    Phomain: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/phomein/html/index.html"
      ),
    Hanwha: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/hanhwa/html/index.html"
      ),
    YStudio: () =>
      window.open(
        "https://jimukchoi.github.io/JMC.github.io/gallery/ystudio/html/index.html"
      ),
  };

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const TextData =
    language === "en"
      ? require("../../i18n/en/Works_Section.json")
      : require("../../i18n/kr/Works_Section.json");

  interface Chip {
    label: string; // 칩의 레이블 타입 정의
  }

  const cardData = [
    {
      id: "Genesis",
      img: Genesis,
      title: TextData.Genesis.Title,
      subtitle: TextData.Genesis.SubTitle,
      chips: TextData.Genesis.Chip,
      url: URLs.Genesis,
      buttonText: TextData.Genesis.ButtonText,
    },
    {
      id: "Musign",
      img: Musign,
      title: TextData.Musign.Title,
      subtitle: TextData.Musign.SubTitle,
      chips: TextData.Musign.Chip,
      url: URLs.Musign,
      buttonText: TextData.Musign.ButtonText,
    },
    {
      id: "Younglim",
      img: Younglim,
      title: TextData.Younglim.Title,
      subtitle: TextData.Younglim.SubTitle,
      chips: TextData.Younglim.Chip,
      url: URLs.Younglim,
      buttonText: TextData.Younglim.ButtonText,
    },
    {
      id: "CrewALa",
      img: CrewALa,
      title: TextData.CrewALa.Title,
      subtitle: TextData.CrewALa.SubTitle,
      chips: TextData.CrewALa.Chip,
      url: URLs.CrewALa,
      buttonText: TextData.CrewALa.ButtonText,
    },
    {
      id: "Daebang",
      img: Daebang,
      title: TextData.Daebang.Title,
      subtitle: TextData.Daebang.SubTitle,
      chips: TextData.Daebang.Chip,
      url: URLs.Daebang,
      buttonText: TextData.Daebang.ButtonText,
    },
    {
      id: "Dopda",
      img: Dopda,
      title: TextData.Dopda.Title,
      subtitle: TextData.Dopda.SubTitle,
      chips: TextData.Dopda.Chip,
      url: URLs.Dopda,
      buttonText: TextData.Dopda.ButtonText,
    },
    {
      id: "YStudio",
      img: YStudio,
      title: TextData.YStudio.Title,
      subtitle: TextData.YStudio.SubTitle,
      chips: TextData.YStudio.Chip,
      url: URLs.YStudio,
      buttonText: TextData.YStudio.ButtonText,
    },
    {
      id: "Hanwha",
      img: Hanwha,
      title: TextData.Hanwha.Title,
      subtitle: TextData.Hanwha.SubTitle,
      chips: TextData.Hanwha.Chip,
      url: URLs.Hanwha,
      buttonText: TextData.Hanwha.ButtonText,
    },
    {
      id: "Phomain",
      img: Phomain,
      title: TextData.Phomain.Title,
      subtitle: TextData.Phomain.SubTitle,
      chips: TextData.Phomain.Chip,
      url: URLs.Phomain,
      buttonText: TextData.Phomain.ButtonText,
    },
  ];
  return (
    <CloneCodingSectionWrapper>
      {cardData.map(({ id, img, title, subtitle, chips, url, buttonText }) => (
        <CloneCoding_Card
          key={id}
          isDarkMode={isDarkMode}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={url}
        >
          <CloneCoding_Card_Img src={img} />
          <CloneCoding_Card_InnerBox isDarkMode={isDarkMode}>
            <CloneCoding_Card_InnerBox_TopBox>
              <Subtitle_S isDarkMode={isDarkMode}>{subtitle}</Subtitle_S>
              <Heading03 isDarkMode={isDarkMode}>{title}</Heading03>
              <CloneCoding_Card_ChipBox>
                {chips.map(
                  (
                    chip: Chip,
                    index: number // 타입 명시
                  ) => (
                    <Chip_M_Storke key={index} isDarkMode={isDarkMode}>
                      {chip.label}
                    </Chip_M_Storke>
                  )
                )}
              </CloneCoding_Card_ChipBox>
            </CloneCoding_Card_InnerBox_TopBox>
            <CloneCoding_Card_InnerBox_BottomBox>
              <Button_F isDarkMode={isDarkMode}>
                <Subtitle_S isDarkMode={isDarkMode}>{buttonText}</Subtitle_S>
                <Arrow_Img isDarkMode={isDarkMode} />
              </Button_F>
            </CloneCoding_Card_InnerBox_BottomBox>
          </CloneCoding_Card_InnerBox>
        </CloneCoding_Card>
      ))}
    </CloneCodingSectionWrapper>
  );
}
export default WorksCloneCodingSection;
