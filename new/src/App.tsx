import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./style/globalStyles";
import {
  Header,
  Header_InnerBox,
  LogoBox,
  MenuBox,
} from "./component_Style/header/headerStyle";
//page
import Test01 from "./Page/main";
/* import { MainSection } from "./component_Style/section/mainSectionStyle"; */
import { Footer, Footer_InnerBox } from "./component_Style/footer/footerStyle";
import Hub from "./Page/Hub";
import Logo from "./assets/Logo.svg";
// data
import texts_en_header from "./i18n/en/header.json";
import texts_ko_header from "./i18n/kr/header.json";
import texts_en_footer from "./i18n/en/footer.json";
import texts_ko_footer from "./i18n/kr/footer.json";
// type
import { HeaderTexts, FooterTexts } from "./i18n/types";

// 타입 정의
const textsData: {
  header: Record<"en" | "ko", HeaderTexts>;
  footer: Record<"en" | "ko", FooterTexts>;
} = {
  header: {
    en: texts_en_header,
    ko: texts_ko_header,
  },
  footer: {
    en: texts_en_footer,
    ko: texts_ko_footer,
  },
};

function App() {
  // 언어 상태를 관리합니다. 기본값은 'en'입니다.
  const [language, setLanguage] = useState<"en" | "ko">("en");

  // 언어를 토글하는 함수입니다.
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  // 현재 선택된 언어에 따라 텍스트를 가져옵니다.
  const currentHeaderTexts = textsData.header[language];
  const currentFooterTexts = textsData.footer[language];

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/Hub" element={<Hub />} />
        <Route path="/" element={<Test01 />} />
      </Routes>
      <Header>
        <Header_InnerBox>
          <LogoBox>
            <img src={Logo} alt="" style={{ width: "80px", height: "auto" }} />
          </LogoBox>
          <MenuBox>
            <button style={{ fontSize: "1.8rem" }}>
              {currentHeaderTexts.menu01}
            </button>
            <button style={{ fontSize: "1.8rem" }}>
              {currentHeaderTexts.menu02}
            </button>
            <button style={{ fontSize: "1.8rem" }}>
              {currentHeaderTexts.menu03}
            </button>
            <button style={{ fontSize: "1.8rem" }}>
              {currentHeaderTexts.menu04}
            </button>
          </MenuBox>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                fontSize: "1.8rem",
                border: "1px solid #000000",
                color: "#000000",
                backgroundColor: "#ffffff",
                width: "60px",
                borderRadius: "8px",
                fontWeight: "bold",
                letterSpacing: "4%",
              }}
              onClick={toggleLanguage}
            >
              {currentHeaderTexts.buttonText}
            </button>
            <button
              style={{
                fontSize: "1.8rem",
                color: "white",
                backgroundColor: "#F2887A",
                padding: "12px 48px",
                borderRadius: "8px",
                fontWeight: "bold",
                letterSpacing: "4%",
              }}
            >
              {currentHeaderTexts.contactText}
            </button>
          </div>
        </Header_InnerBox>
      </Header>

      <Footer>
        <Footer_InnerBox>{currentFooterTexts.footerText}</Footer_InnerBox>
      </Footer>
    </div>
  );
}

export default App;
