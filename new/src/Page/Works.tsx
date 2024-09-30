import WorksProjetSection from "../components/section/Works_Project_Section";
import WorksCloneCodingSection from "../components/section/Works_CloneCoding_Section";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function Works({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksProjetSection
        isDarkMode={isDarkMode}
        setIsHovering={setIsHovering}
      />
      <WorksCloneCodingSection
        isDarkMode={isDarkMode}
        setIsHovering={setIsHovering}
      />
    </>
  );
}
export default Works;
