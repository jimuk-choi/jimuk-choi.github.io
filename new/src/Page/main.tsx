import MainGreetingSection from "../components/section/main_Greeting_Section";
import MainWhoIamSection from "../components/section/main_WhoIamt_Section";
import MainMyServicesSection from "../components/section/main_MyServices_Section";
import MainToolIUseSection from "../components/section/main_ToolIUse_Section";
import MainFooterSection from "../components/section/main_Footer_Section";

interface MainProps {
  isDarkMode: boolean;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

function Main({ isDarkMode, setIsHovering }: MainProps) {
  /* const { language } = useContext(LanguageContext); // 컨텍스트에서 언어 정보 가져오기 */

  return (
    <>
      <MainGreetingSection isDarkMode={isDarkMode} />
      <MainWhoIamSection isDarkMode={isDarkMode} />
      <MainMyServicesSection
        isDarkMode={isDarkMode}
        setIsHovering={setIsHovering}
      />
      <MainToolIUseSection isDarkMode={isDarkMode} />
      <MainFooterSection
        isDarkMode={isDarkMode}
        setIsHovering={setIsHovering}
      />
    </>
  );
}
export default Main;
