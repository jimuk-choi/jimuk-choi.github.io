import WorksStowGenieBrandSection from "../components/section/Works_StowGenie_BrandSection";
import WorksStowGenieColorSection from "../components/section/Works_StowGenie_ColorSection";
import WorksStowGenieTypoSectionWrapper from "../components/section/Works_StowGenie_TypoSection";
import WorksStowGenieRnRSectionWrapper from "../components/section/Works_StowGenie_RnRSection";
import styled from "@emotion/styled";

const WorksStowGenie_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  padding: 140px 80px 32px 80px;
  gap: 16px;
  min-height: calc(100vh - 172px);
`;

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenie({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksStowGenie_Wrapper>
        <WorksStowGenieBrandSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieColorSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieTypoSectionWrapper
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieRnRSectionWrapper
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
      </WorksStowGenie_Wrapper>
    </>
  );
}
export default WorksStowGenie;
