import styled from "@emotion/styled";
import { useState, useContext, useMemo } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트
import { ReactComponent as WebDesign_Object } from "../../assets/WebDesign_Object.svg";
import { ReactComponent as AppDesign_Object } from "../../assets/AppDesign_Object.svg";
import { ReactComponent as DesignSystems_Object } from "../../assets/DesignSystems_Object.svg";
import { ReactComponent as Webflow_Object } from "../../assets/Webflow_Object.svg";
import { ReactComponent as Branding_Object } from "../../assets/Branding_Object.svg";
import { Heading03 } from "../typograpy/heading";
import { Rectangle_L } from "../shape/rectangle";
import { breakpoints } from "../../style/breakpoints";

// Styled-components
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
  color: ${(props) => props.theme.Color.white};
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 80px;
`;

const MainBox_ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  padding: 0 24px;
  box-sizing: border-box;
`;

const MainBox_Img = styled.div<{ isDarkMode: boolean; isOpen: boolean }>`
  display: flex;
  width: ${(props) => (props.isOpen ? "180px" : "100px")};
  color: ${(props) => props.theme.Color.white};
`;

const MainBox_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 0 40px 0 0;
  gap: 24px;
  color: ${(props) => props.theme.Color.white};
`;

const MainBox_TextBox_TitleBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 4.8rem;
  color: ${(props) => props.theme.Color.white};
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
  color: ${(props) => props.theme.Color.white};
`;

// TypeScript 인터페이스
interface Service {
  id: number;
  img: string;
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

  // JSON 파일을 불러와서 데이터 설정
  const TextData = useMemo(() => {
    return language === "en"
      ? require("../../i18n/en/main_Section.json")
      : require("../../i18n/kr/main_Section.json");
  }, [language]);

  const services: Service[] = TextData.MyServices.List;

  const toggleButton = (index: number) => {
    setOpenList((prev) => (prev === index ? null : index));
  };

  const getServiceImage = (img: string) => {
    switch (img) {
      case "WebDesign_Object":
        return WebDesign_Object;
      case "AppDesign_Object":
        return AppDesign_Object;
      case "DesignSystems_Object":
        return DesignSystems_Object;
      case "Webflow_Object":
        return Webflow_Object;
      case "Branding_Object":
        return Branding_Object;
      default:
        return null;
    }
  };

  return (
    <MyServicesSection>
      <MyServicesSectionInnerBox>
        <Heading03 isDarkMode={isDarkMode}>
          {TextData.MyServices.Title}
        </Heading03>
        <Rectangle_L />
        <MyServicesSectionListWrapper>
          {services.map((service) => {
            const ServiceImage = getServiceImage(service.img);
            return (
              <ListBox key={service.id}>
                <ListTopBox>
                  <NumberBox>{service.id}</NumberBox>
                  <MainBox>
                    <MainBox_ImgBox>
                      {ServiceImage && (
                        <MainBox_Img
                          as={ServiceImage}
                          isOpen={openList === service.id}
                          isDarkMode={isDarkMode}
                        />
                      )}
                    </MainBox_ImgBox>
                    <MainBox_TextBox>
                      <MainBox_TextBox_TitleBox>
                        {service.title}
                      </MainBox_TextBox_TitleBox>
                      <MainBox_TextBox_ContentBox
                        isOpen={openList === service.id}
                      >
                        {service.content}
                      </MainBox_TextBox_ContentBox>
                    </MainBox_TextBox>
                  </MainBox>
                  <ButtonBox>
                    <OpenButton
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => toggleButton(service.id)}
                    >
                      {openList === service.id ? "[ Close ]" : "[ Open ]"}
                    </OpenButton>
                  </ButtonBox>
                </ListTopBox>
              </ListBox>
            );
          })}
        </MyServicesSectionListWrapper>
      </MyServicesSectionInnerBox>
    </MyServicesSection>
  );
}

export default MainMyServicesSection;
