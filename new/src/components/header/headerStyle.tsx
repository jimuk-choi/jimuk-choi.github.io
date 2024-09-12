import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";
import { ReactComponent as CloseIcon } from "../../assets/x.svg";
import object_Light from "../../assets/object_Light.png";

export const HeaderSection = styled.header`
  /* font-size: 2.4rem; */
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 80px;
  box-sizing: border-box;
  position: fixed;
  top: 24px;
  z-index: 999;
  @media (max-width: ${breakpoints.desktopXS}px) {
    padding: 0 40px;
  }
  @media (max-width: ${breakpoints.mobileL}px) {
    padding: 0 12px;
  }
`;

export const Header_InnerBox = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 40px;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.Bg.whiteT20 : props.theme.Bg.white};
  padding: 0 32px;
`;

export const Header_LogoBox = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  width: 400px;
  gap: 1rem;
  p {
    color: ${(props) => props.theme.Color.Button_Secondary};
  }
  @media (max-width: ${breakpoints.desktopL}px) {
    width: 200px;
  }
  @media (max-width: ${breakpoints.desktopM}px) {
    width: 150px;
  }
  @media (max-width: ${breakpoints.desktopS}px) {
    width: 100px;
  }
`;

export const Header_LogoImg = styled.img`
  width: 18px;
  height: 18px;
  @media (max-width: ${breakpoints.desktopXS}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Header_LogoText = styled.div<{ isDarkMode: boolean }>`
  font-weight: bold;
  font-size: 2.2rem;
  color: ${(props) => props.theme.Color.white};
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 1.8rem;
  }
`;

export const Header_MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: ${breakpoints.desktopS}px) {
    gap: 40px;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    gap: 28px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    display: none;
  }
`;

export const Header_ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: ${breakpoints.desktopXS}px) {
    gap: 6px;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    display: none;
  }
`;

//Mobile Hedaer
export const HamburgerWrapper = styled.button`
  display: none;
  @media (max-width: ${breakpoints.tabletL}px) {
    display: flex;
    gap: 6px;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;
export const Hamburger = styled.div`
  display: flex;
  width: 36px;
  height: 2px;
  background-color: ${(props) => props.theme.Color.white};
`;
export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.Bg.white90};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
export const MobileMenuBg = styled.img`
  height: 100%;
  position: absolute;
  z-index: -1;
  left: -60%;
  opacity: 0.4;
`;
export const MobileMenuInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 80px;
  @media (max-width: ${breakpoints.tabletS}px) {
    padding: 40px 40px;
  }
`;
export const MobileMenuCloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0;
`;
/* export const MobileMenuCloseButton = styled(CloseIcon)<{
  isDarkMode: boolean;
  isOpen: boolean;
}>`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: ${(props) => props.theme.Color.white};
`; */
export const MobileMenuCloseButton = styled(CloseIcon, {
  shouldForwardProp: (prop) => !["isDarkMode", "isOpen"].includes(prop),
})<{ isDarkMode: boolean; isOpen: boolean }>`
  width: 28px;
  height: 28px;
  cursor: pointer;
  color: ${(props) => props.theme.Color.white};
`;
export const MobileMenuMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const MobileMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;
export const MobileMenuButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: ${breakpoints.tabletS}px) {
    flex-direction: column;
  }
`;
