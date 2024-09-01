import { MainSectionTitleWrapper, MainSectionTitle } from "../heading/h1";
import GreetingTitle from "../../i18n/en/main_Section_Greeting.json";
import { Main_Section_Greeting } from "../../i18n/types";

const data: Main_Section_Greeting = GreetingTitle;

function MainGreetingSection() {
  return (
    <>
      <MainSectionTitleWrapper>
        <MainSectionTitle>
          <h1>{data.GreetingTitle}</h1>
        </MainSectionTitle>
      </MainSectionTitleWrapper>
    </>
  );
}
export default MainGreetingSection;
