import MainGreetingSection from "../components/section/main_Greeting_Section";
import MainWhoIamSection from "../components/section/main_WhoIamt_Section";

interface MainProps {
  isDarkMode: boolean;
}

function Main({ isDarkMode }: MainProps) {
  /* const { language } = useContext(LanguageContext); // 컨텍스트에서 언어 정보 가져오기 */

  return (
    <>
      <MainGreetingSection isDarkMode={isDarkMode} />
      <MainWhoIamSection isDarkMode={isDarkMode} />
    </>
  );
}
export default Main;
