import React, { createContext, useEffect, useState, useRef } from "react";
import GlobalStyles from "./style/globalStyles";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./style/colors";
//Cursor
import Cursor from "./style/cursor";
//Header
import Header from "./components/header/header";
//page
import Test01 from "./Page/main";
import Main from "./Page/main";
import { Footer, Footer_InnerBox } from "./components/footer/footerStyle";
import Hub from "./Page/Hub";

// 언어 컨텍스트 생성
const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: "en" | "ko") => {},
});

function App() {
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
          <GlobalStyles isDarkMode={isDarkMode} />
          <Cursor isHovering={isHovering} isDarkMode={isDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <Main setIsHovering={setIsHovering} isDarkMode={isDarkMode} />
              }
            />
            <Route path="/Hub" element={<Hub />} />
          </Routes>
          <Header
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            toggleLanguage={toggleLanguage}
            setIsHovering={setIsHovering}
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
