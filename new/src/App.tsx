import React, { createContext, useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/globalStyles";
import {
  Header,
  Header_InnerBox,
  Header_LogoBox,
  Header_MenuBox,
  Header_LogoText,
  Header_LogoImg,
  Header_ButtonBox,
  Hamburger,
  HamburgerWrapper,
  MobileMenu,
  MobileMenuInnerBox,
  MobileMenuCloseBox,
  MobileMenuCloseButton,
  MobileMenuMain,
  MbileMenuButtonBox,
  MobileMenuBox,
} from "./components/header/headerStyle";
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
import {
  Button_A,
  Button_B,
  Button_C,
} from "./components/button/button_style01";
import { HamburgerMenuButton } from "./components/button/button_hamburger";

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
              <Header_LogoBox isDarkMode={isDarkMode}>
                <Header_LogoImg src={Logo} alt="" />
                <Header_LogoText isDarkMode={isDarkMode}>JMC</Header_LogoText>
              </Header_LogoBox>
              <Header_MenuBox>
                <Button_C isDarkMode={false}>
                  {currentHeaderTexts.menu01}
                </Button_C>

                <Button_C isDarkMode={false}>
                  {currentHeaderTexts.menu02}
                </Button_C>
                <Button_C isDarkMode={false}>
                  {currentHeaderTexts.menu03}
                </Button_C>
                <Button_C isDarkMode={false}>
                  {currentHeaderTexts.menu04}
                </Button_C>
              </Header_MenuBox>
              <Header_ButtonBox>
                <Button_B onClick={toggleLanguage} isDarkMode={isDarkMode}>
                  {currentHeaderTexts.buttonText}
                </Button_B>
                <Button_B onClick={toggleDarkMode} isDarkMode={isDarkMode}>
                  {isDarkMode
                    ? currentHeaderTexts.buttonLightMode
                    : currentHeaderTexts.buttonDarkMode}
                </Button_B>
                <Button_A onClick={handleEmailClick} isDarkMode={isDarkMode}>
                  {currentHeaderTexts.contactText}
                </Button_A>
              </Header_ButtonBox>
              <HamburgerWrapper onClick={toggleMenu}>
                <Hamburger />
                <Hamburger />
              </HamburgerWrapper>
            </Header_InnerBox>
            <MobileMenu isOpen={isMenuOpen}>
              <MobileMenuInnerBox>
                <MobileMenuCloseBox>
                  <MobileMenuCloseButton
                    isDarkMode={isDarkMode}
                    onClick={toggleMenu}
                    isOpen={isMenuOpen}
                  ></MobileMenuCloseButton>
                </MobileMenuCloseBox>
                <MobileMenuMain>
                  <MobileMenuBox>
                    <HamburgerMenuButton>
                      {currentHeaderTexts.menu01}
                    </HamburgerMenuButton>
                    <HamburgerMenuButton>
                      {currentHeaderTexts.menu02}
                    </HamburgerMenuButton>
                    <HamburgerMenuButton>
                      {currentHeaderTexts.menu03}
                    </HamburgerMenuButton>
                    <HamburgerMenuButton>
                      {currentHeaderTexts.menu04}
                    </HamburgerMenuButton>
                  </MobileMenuBox>
                  <MbileMenuButtonBox>
                    <Button_B onClick={toggleDarkMode} isDarkMode={isDarkMode}>
                      {isDarkMode
                        ? currentHeaderTexts.buttonLightMode
                        : currentHeaderTexts.buttonDarkMode}
                    </Button_B>
                    <Button_B onClick={toggleLanguage} isDarkMode={isDarkMode}>
                      {currentHeaderTexts.buttonText}
                    </Button_B>
                    <Button_A
                      onClick={handleEmailClick}
                      isDarkMode={isDarkMode}
                    >
                      {currentHeaderTexts.contactText}
                    </Button_A>
                  </MbileMenuButtonBox>
                </MobileMenuMain>
              </MobileMenuInnerBox>
            </MobileMenu>
          </Header>

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
