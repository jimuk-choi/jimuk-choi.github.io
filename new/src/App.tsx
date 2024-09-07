import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
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
import { Button_A } from "./components/button/button_style01";

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
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  /* display: block; */
`;
function App() {
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ko" : "en"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentHeaderTexts = textsData.header[language];
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
          <Header>
            <Header_InnerBox isDarkMode={isDarkMode}>
              <LogoBox>
                <img
                  src={Logo}
                  alt=""
                  style={{ width: "18px", height: "18px" }}
                />
                <p style={{ fontWeight: "bold", fontSize: "22px" }}>
                  JMC123123
                </p>
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
                  {isDarkMode
                    ? currentHeaderTexts.buttonLightMode
                    : currentHeaderTexts.buttonDarkMode}
                </Button_A>
              </div>
            </Header_InnerBox>
          </Header>
          {/* <StyledVideo
            ref={videoRef}
            key={isDarkMode.toString()}
            autoPlay
            loop
            muted
          >
            <source
              src={
                isDarkMode
                  ? "Videos/Video_02_DarkMode.mp4" // 다크 모드일 때 재생할 비디오
                  : "Videos/Video_02_LightMode.mp4" // 라이트 모드일 때 재생할 비디오
              }
              type="video/mp4"
            />
          </StyledVideo> */}
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
