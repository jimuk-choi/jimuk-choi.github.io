import React, { createContext, useEffect, useState, useRef } from "react";
import GlobalStyles from "./style/globalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"; // BrowserRouter를 Router로 이름을 변경하여 사용
import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "./style/colors";
//Cursor
import Cursor from "./style/cursor";
//Header
import Header from "./components/header/header";
//page

import Main from "./Page/main";
import Works from "./Page/Works";
import Process from "./Page/Process";
import WorksStowGenie from "./Page/Works_StowGenie";
import WorksMUKI from "./Page/Works_MUKI";

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
        {/* 여기서 BrowserRouter를 사용하고 있으므로 다른 Router가 필요 없음 */}
        <BrowserRouter>
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
              <Route
                path="/Works"
                element={
                  <Works
                    isDarkMode={isDarkMode}
                    setIsHovering={setIsHovering}
                  />
                }
              />
              <Route
                path="/Works/StowGenie"
                element={
                  <WorksStowGenie
                    isDarkMode={isDarkMode}
                    setIsHovering={setIsHovering}
                  />
                }
              />
              <Route
                path="/Works/MUKI"
                element={
                  <WorksMUKI
                    isDarkMode={isDarkMode}
                    setIsHovering={setIsHovering}
                  />
                }
              />
              <Route
                path="/Process"
                element={
                  <Process
                    isDarkMode={isDarkMode}
                    setIsHovering={setIsHovering}
                  />
                }
              />
            </Routes>
            <Header
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              setIsHovering={setIsHovering}
            />
          </div>
        </BrowserRouter>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export { LanguageContext };
export default App;
