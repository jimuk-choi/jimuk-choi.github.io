import styled from "@emotion/styled";
import { breakpoints } from "../style/breakpoints";
import WorksDetailBrandSection from "../components/section/Works_MUKI/Works_MUKI_BrandSection";
import WorksDetailColorSection from "../components/section/Works_MUKI/Works_MUKI_ColorSection";
import WorksDetailTypoSection from "../components/section/Works_MUKI//Works_MUKI_TypoSection";
import WorksDetailRnRSection from "../components/section/Works_MUKI//Works_MUKI_RnRSection";
import WorksDetailGoalSection from "../components/section/Works_MUKI//Works_MUKI_GoalSection";
import WorksDetailDemoSection from "../components/section/Works_MUKI//Works_MUKI_DemoSection";
import WorksDetailSolutionSection from "../components/section/Works_MUKI//Works_MUKI_SolutionSection";
import WorksDetailConclusionSection from "../components/section/Works_MUKI//Works_MUKI_ConclusionSection";

const WorksMUKI_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  padding: 140px 80px 32px 80px;
  gap: 16px;
  min-height: calc(100vh - 172px);
  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 140px 40px 32px 40px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 140px 28px 32px 28px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    gap: 8px;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    padding: 120px 14px 32px 14px;
  }
`;

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksMUKI({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksMUKI_Wrapper>
        <WorksDetailBrandSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailColorSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailTypoSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailRnRSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailGoalSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailDemoSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailSolutionSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
        <WorksDetailConclusionSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
      </WorksMUKI_Wrapper>
    </>
  );
}
export default WorksMUKI;
