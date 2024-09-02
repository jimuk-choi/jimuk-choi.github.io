import { useContext } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트

function MainTestSection() {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const jsonData =
    language === "en"
      ? require("../../i18n/en/main_Section_Greeting.json")
      : require("../../i18n/kr/main_Section_Greeting.json");

  return <h1>{jsonData.test2}</h1>;
}
export default MainTestSection;
