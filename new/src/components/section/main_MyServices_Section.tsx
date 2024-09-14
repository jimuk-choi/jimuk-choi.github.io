import styled from "@emotion/styled";
import { useState, useContext, useEffect, useRef, useMemo } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//img
import WebDesign_Object from "../../assets/WebDesign_Object.svg";
import AppDesign_Object from "../../assets/AppDesign_Object.svg";
import DesignSystems_Object from "../../assets/DesignSystems_Object.svg";
import Webflow_Object from "../../assets/Webflow_Object.svg";
import Branding_Object from "../../assets/Branding_Object.svg";

//component
import { Heading03 } from "../typograpy/heading";
import { Rectangle_L } from "../shape/rectangle";
import { breakpoints } from "../../style/breakpoints";

const imageMapping: { [key: string]: string } = {
  WebDesign_Object: WebDesign_Object,
  AppDesign_Object: AppDesign_Object,
  DesignSystems_Object: DesignSystems_Object,
  Webflow_Object: Webflow_Object,
  Branding_Object: Branding_Object,
};

const MyServicesSection = styled.div`
  padding: 200px 0px;
  background-color: ${(props) => props.theme.Bg.white90};
`;

const MyServicesSectionInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MyServicesSectionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0 0 0;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 48px 0;
  border-bottom: 1px solid #aaaaaa;
`;

const ListTopBox = styled.div`
  display: flex;
  width: 100%;
`;

const NumberBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  font-size: 2.4rem;
`;
const MainBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const MainBox_ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45%;
  padding: 0 24px;
  box-sizing: border-box;
`;

const MainBox_Img = styled.img<{ isOpen: boolean }>`
  display: flex;
  height: ${(props) => (props.isOpen ? "180px" : "100px")};
  color: ${(props) => (props.isOpen ? "red" : "black")}; // 색상 설정
`;
const MainBox_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const MainBox_TextBox_TitleBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 4.8rem;
`;
const MainBox_TextBox_ContentBox = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  font-size: 1.8rem;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 200px;
`;
const OpenButton = styled.button`
  font-size: 1.8rem;
`;

interface MyService {
  id: number;
  img: string; // 실제 이미지 파일은 이 문자열을 기준으로 매핑합니다.
  title: string;
  content: string;
}

interface MyServicesProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainMyServicesSection({ isDarkMode, setIsHovering }: MyServicesProps) {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기
  const [openList, setOpenList] = useState<number | null>(null);

  const TextData =
    language === "en"
      ? require("../../i18n/en/main_Section.json")
      : require("../../i18n/kr/main_Section.json");

  const serviceList: MyService[] = useMemo(() => {
    return TextData.MyServices.List.map((service: any) => ({
      ...service,
      img: imageMapping[service.img] || DesignSystems_Object,
    }));
  }, [TextData.MyServices.List]);

  const toggleButton = (index: number) => {
    setOpenList((prev) => (prev === index ? null : index));
  };

  return (
    <MyServicesSection>
      <MyServicesSectionInnerBox>
        <Heading03 isDarkMode={isDarkMode}>
          {TextData.MyServices.Title}
        </Heading03>
        <Rectangle_L />
        <MyServicesSectionListWrapper>
          {serviceList.map((service, index) => (
            <ListBox key={service.id}>
              <ListTopBox>
                <NumberBox>{service.id}</NumberBox>
                <MainBox>
                  <MainBox_ImgBox>
                    <MainBox_Img
                      src={service.img}
                      isOpen={openList === index}
                    />
                  </MainBox_ImgBox>
                  <MainBox_TextBox>
                    <MainBox_TextBox_TitleBox>
                      {service.title}
                    </MainBox_TextBox_TitleBox>
                    <MainBox_TextBox_ContentBox isOpen={openList === index}>
                      {service.content}
                    </MainBox_TextBox_ContentBox>
                  </MainBox_TextBox>
                </MainBox>
                <ButtonBox>
                  <OpenButton
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={() => toggleButton(index)}
                  >
                    {openList === index ? "Close" : "Open"}
                  </OpenButton>
                </ButtonBox>
              </ListTopBox>
            </ListBox>
          ))}
        </MyServicesSectionListWrapper>
      </MyServicesSectionInnerBox>
    </MyServicesSection>
  );
}

export default MainMyServicesSection;
