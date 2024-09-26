import WorksStowGenieTestSection from "../components/section/Works_StowGenie_TestSection";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksStowGenie({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksStowGenieTestSection isDarkMode={isDarkMode} />
    </>
  );
}
export default WorksStowGenie;
