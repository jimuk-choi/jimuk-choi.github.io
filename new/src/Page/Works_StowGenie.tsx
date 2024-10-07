import styled from "@emotion/styled";
import WorksStowGenieBrandSection from "../components/section/Works_StowGenie_BrandSection";
import WorksStowGenieColorSection from "../components/section/Works_StowGenie_ColorSection";
import WorksStowGenieTypoSection from "../components/section/Works_StowGenie_TypoSection";
import WorksStowGenieRnRSection from "../components/section/Works_StowGenie_RnRSection";
import WorksStowGenieGoalSection from "../components/section/Works_StowGenie_GoalSection";
import WorksStowGenieDemoSection from "../components/section/Works_StowGenie_DemoSection";
import WorksStowGenieSolutionSection from "../components/section/Works_StowGenie_SolutionSection";

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
        <WorksStowGenieTypoSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieRnRSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieGoalSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieDemoSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksStowGenieSolutionSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
      </WorksStowGenie_Wrapper>
    </>
  );
}
export default WorksStowGenie;
