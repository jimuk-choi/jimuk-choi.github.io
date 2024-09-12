import React, { createContext, useEffect, useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./style/globalStyles";
import Header from "./components/header/header";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./style/colors";
//assets
import object_Light from "./assets/object_Light.png";
import object_Dark from "./assets/object_Dark.png";
//page
import Test01 from "./Page/main";
import Main from "./Page/main";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:jimook1995@naver.com";
  };

  const currentFooterTexts = textsData.footer[language];

  useEffect(() => {
    // 다크 모드 상태가 변경될 때 비디오를 다시 로드
    if (videoRef.current) {
      videoRef.current.load(); // 비디오 소스를 다시 로드
    }
  }, [isDarkMode]); // isDarkMode가 변경될 때마다 호출

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="App">
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Main isDarkMode={isDarkMode} />} />
            <Route path="/Hub" element={<Hub />} />
          </Routes>
          <Header
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            toggleLanguage={toggleLanguage}
          />

          {/* <Footer>
            <Footer_InnerBox>{currentFooterTexts.footerText}</Footer_InnerBox>
          </Footer> */}
        </div>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export { LanguageContext };
export default App;
