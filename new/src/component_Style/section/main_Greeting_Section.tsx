import { MainSectionTitleWrapper, MainSectionTitle } from "../heading/h1";
import { Main_Section_Greeting } from "../../i18n/types";
import { useContext } from "react";
import { LanguageContext } from "../../App"; // 언어 정보를 가져올 컨텍스트

function MainGreetingSection() {
  const { language } = useContext(LanguageContext); // 현재 언어 정보 가져오기

  // 현재 언어에 맞는 데이터를 동적으로 불러옵니다.
  const GreetingTitle =
    language === "en"
      ? require("../../i18n/en/main_Section_Greeting.json")
      : require("../../i18n/kr/main_Section_Greeting.json");

  return (
    <MainSectionTitleWrapper>
      <MainSectionTitle>
        <h1>{GreetingTitle.GreetingTitle}</h1>
      </MainSectionTitle>
    </MainSectionTitleWrapper>
  );
}
export default MainGreetingSection;
