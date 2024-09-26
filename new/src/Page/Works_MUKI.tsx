import WorksMUKITestSection from "../components/section/Works_MUKI_TestSection";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function WorksMUKI({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksMUKITestSection isDarkMode={isDarkMode} />
    </>
  );
}
export default WorksMUKI;
