import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HeaderSection,
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
  MobileMenuButtonBox,
  MobileMenuBox,
  MobileMenuBg,
} from "./headerStyle";
import { Button_A, Button_B, Button_C } from "../button/button_style01";
import { HamburgerMenuButton } from "../button/button_hamburger";
import { LanguageContext } from "../../App";
import object_Light from "../../assets/object_Light.png";
import object_Dark from "../../assets/object_Dark.png";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  toggleLanguage,
  setIsHovering,
}) => {
  const { language } = useContext(LanguageContext); // 언어 정보를 가져오는 컨텍스트
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentHeaderTexts =
    language === "en"
      ? require("../../i18n/en/header.json")
      : require("../../i18n/kr/header.json");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:jimook1995@naver.com";
  };

  const ImgSrc = isDarkMode ? object_Dark : object_Light;

  return (
    <HeaderSection>
      <Header_InnerBox isDarkMode={isDarkMode}>
        <Header_LogoBox isDarkMode={isDarkMode}>
          <Header_LogoImg isDarkMode={isDarkMode} />
          <Header_LogoText isDarkMode={isDarkMode}>
            {currentHeaderTexts.LogoText}
          </Header_LogoText>
        </Header_LogoBox>
        <Header_MenuBox>
          <NavLink to="/">
            {({ isActive }) => (
              <Button_C
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
                isActive={isActive} // isActive를 Button_C에 전달
              >
                {currentHeaderTexts.menu01}
              </Button_C>
            )}
          </NavLink>
          <NavLink to="/Works">
            {({ isActive }) => (
              <Button_C
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
                isActive={isActive} // isActive를 Button_C에 전달
              >
                {currentHeaderTexts.menu02}
              </Button_C>
            )}
          </NavLink>
          <NavLink to="/Process">
            {({ isActive }) => (
              <Button_C
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
                isActive={isActive} // isActive를 Button_C에 전달
              >
                {currentHeaderTexts.menu03}
              </Button_C>
            )}
          </NavLink>

          <Link target="blank" to="https://jimukchoi.github.io/JMC.github.io/">
            <Button_C
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              isDarkMode={isDarkMode}
            >
              {currentHeaderTexts.menu04}
            </Button_C>
          </Link>
        </Header_MenuBox>
        <Header_ButtonBox>
          <Button_B
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={toggleLanguage}
            isDarkMode={isDarkMode}
          >
            {currentHeaderTexts.buttonText}
          </Button_B>
          <Button_B
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={toggleDarkMode}
            isDarkMode={isDarkMode}
          >
            {isDarkMode
              ? currentHeaderTexts.buttonLightMode
              : currentHeaderTexts.buttonDarkMode}
          </Button_B>
          <Button_A
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleEmailClick}
            isDarkMode={isDarkMode}
          >
            {currentHeaderTexts.contactText}
          </Button_A>
        </Header_ButtonBox>
        <HamburgerWrapper
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={toggleMenu}
        >
          <Hamburger />
          <Hamburger />
        </HamburgerWrapper>
      </Header_InnerBox>
      <MobileMenu isOpen={isMenuOpen}>
        <MobileMenuBg src={ImgSrc} />
        <MobileMenuInnerBox>
          <MobileMenuCloseBox>
            <MobileMenuCloseButton
              isDarkMode={isDarkMode}
              onClick={toggleMenu}
              isOpen={isMenuOpen}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </MobileMenuCloseBox>
          <MobileMenuMain>
            <MobileMenuBox>
              <HamburgerMenuButton
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
              >
                {currentHeaderTexts.menu01}
              </HamburgerMenuButton>
              <HamburgerMenuButton
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
              >
                {currentHeaderTexts.menu02}
              </HamburgerMenuButton>
              <HamburgerMenuButton
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                isDarkMode={isDarkMode}
              >
                {currentHeaderTexts.menu03}
              </HamburgerMenuButton>
              <Link
                target="blank"
                to="https://jimukchoi.github.io/JMC.github.io/"
              >
                <HamburgerMenuButton
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  isDarkMode={isDarkMode}
                >
                  {currentHeaderTexts.menu04}
                </HamburgerMenuButton>
              </Link>
            </MobileMenuBox>
            <MobileMenuButtonBox>
              <Button_B
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={toggleDarkMode}
                isDarkMode={isDarkMode}
              >
                {isDarkMode
                  ? currentHeaderTexts.buttonLightMode
                  : currentHeaderTexts.buttonDarkMode}
              </Button_B>
              <Button_B
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={toggleLanguage}
                isDarkMode={isDarkMode}
              >
                {currentHeaderTexts.buttonText}
              </Button_B>
              <Button_A
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleEmailClick}
                isDarkMode={isDarkMode}
              >
                {currentHeaderTexts.contactText}
              </Button_A>
            </MobileMenuButtonBox>
          </MobileMenuMain>
        </MobileMenuInnerBox>
      </MobileMenu>
    </HeaderSection>
  );
};

export default Header;
