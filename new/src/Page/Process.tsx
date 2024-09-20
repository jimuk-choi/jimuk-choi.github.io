import ProcessTestSection from "../components/section/Process_Test_Section";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function Process({ isDarkMode, setIsHovering }: MainProps) {
  return (
    <>
      <ProcessTestSection isDarkMode={isDarkMode} />
    </>
  );
}
export default Process;
