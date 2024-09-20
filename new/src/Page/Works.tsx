import WorksTestSection from "../components/section/Works_Test_Section";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function Works({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <WorksTestSection isDarkMode={isDarkMode} />
    </>
  );
}
export default Works;
