import MainGreetingSection from "../components/section/main_Greeting_Section";
import { useContext } from "react";
import { LanguageContext } from "../App"; // 컨텍스트 경로 업데이트 필요
import MainTestSection from "../components/section/main_Test_Section";

interface MainProps {
  isDarkMode: boolean;
}

function Main({ isDarkMode }: MainProps) {
  /* const { language } = useContext(LanguageContext); // 컨텍스트에서 언어 정보 가져오기 */

  return (
    <>
      <MainGreetingSection isDarkMode={isDarkMode} />
      <MainTestSection />
    </>
  );
}
export default Main;
