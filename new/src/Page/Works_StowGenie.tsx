import WorksStowGenieBrandSection from "../components/section/Works_StowGenie_BrandSection";
import styled from "@emotion/styled";

const WorksStowGenie_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.Bg.white90};
  padding: 140px 80px 32px 80px;
  gap: 16px;
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
        <WorksStowGenieBrandSection
          isDarkMode={isDarkMode}
          setIsHovering={setIsHovering}
        />
      </WorksStowGenie_Wrapper>
    </>
  );
}
export default WorksStowGenie;
