import React, { createContext, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/globalStyles";
import {
  Header,
  Header_InnerBox,
  LogoBox,
  MenuBox,
} from "./components/header/headerStyle";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./style/colors";

//page
import Test01 from "./Page/main";
import { Footer, Footer_InnerBox } from "./components/footer/footerStyle";
import Hub from "./Page/Hub";
import Logo from "./assets/Logo.svg";
// data
import texts_en_header from "./i18n/en/header.json";
import texts_kr_header from "./i18n/kr/header.json";
import texts_en_footer from "./i18n/en/footer.json";
import texts_kr_footer from "./i18n/kr/footer.json";
// type
import { HeaderTexts, FooterTexts } from "./i18n/types";

import { Button_A, Button_B } from "./components/button/button_style01";

const textsData: {
  header: Record<"en" | "ko", HeaderTexts>;
  footer: Record<"en" | "ko", FooterTexts>;
} = {
  header: {
    en: texts_en_header,
    ko: texts_kr_header,
  },
  footer: {
    en: texts_en_footer,
    ko: texts_kr_footer,
  },
};

// 언어 컨텍스트 생성
const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: "en" | "ko") => {},
});

function App() {
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentHeaderTexts = textsData.header[language];
  const currentFooterTexts = textsData.footer[language];
  const currentTheme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="App">
          <GlobalStyles />
          <Routes>
            <Route path="/Hub" element={<Hub />} />
            <Route path="/" element={<Test01 />} />
          </Routes>
          <Header>
            <Header_InnerBox>
              <LogoBox>
                <img
                  src={Logo}
                  alt=""
                  style={{ width: "80px", height: "auto" }}
                />
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

                <Button_A onClick={toggleDarkMode} variant="primary">
                  ButtonA
                </Button_A>
                <Button_B variant="secondary">ButtonB</Button_B>
              </div>
            </Header_InnerBox>
          </Header>
          <Footer>
            <Footer_InnerBox>{currentFooterTexts.footerText}</Footer_InnerBox>
          </Footer>
        </div>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export { LanguageContext };
export default App;
