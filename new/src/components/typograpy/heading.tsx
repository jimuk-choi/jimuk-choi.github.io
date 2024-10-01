import styled from "@emotion/styled";
import { breakpoints } from "../../style/breakpoints";

export const MainSectionTitleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainGreetingSectionTitleWrapperInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const MainGreetingSectionTitle = styled.h1<{ isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  font-size: 18rem;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 20px;
  line-height: normal;
  @media (max-width: ${breakpoints.desktopL}px) {
    font-size: 16rem;
  }
  @media (max-width: ${breakpoints.desktopM}px) {
    font-size: 14rem;
  }
  @media (max-width: ${breakpoints.desktopS}px) {
    font-size: 12rem;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 9rem;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 6rem;
    letter-spacing: 12px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 4rem;
    letter-spacing: 6px;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 3.6rem;
    letter-spacing: 4px;
  }
`;

export const MainFooterSectionTitleWrapperInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.tabletL}px) {
    padding: 12px 32px;
  }
`;

export const MainFooterSectionTitle = styled.h1<{ isDarkMode: boolean }>`
  font-size: 18rem;
  width: 100%;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 20px;
  line-height: normal;

  @media (max-width: ${breakpoints.desktopS}px) {
    font-size: 16rem;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 14rem;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 10rem;
    letter-spacing: 12px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 6rem;
    letter-spacing: 0px;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 5.2rem;
  }
`;

export const Heading01 = styled.h1<{ isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 10px;
  line-height: normal;
  letter-spacing: 4px;
  @media (max-width: ${breakpoints.desktopL}px) {
    font-size: 4rem;
  }
  @media (max-width: ${breakpoints.desktopM}px) {
    font-size: 3rem;
  }
  @media (max-width: ${breakpoints.desktopS}px) {
    font-size: 3rem;
  }
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 2.4rem;
  }
  @media (max-width: ${breakpoints.tabletL}px) {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.4rem;
    letter-spacing: 0px;
  }
  @media (max-width: ${breakpoints.mobileM}px) {
    font-size: 1.4rem;
    letter-spacing: -0.2px;
  }
`;
export const Heading02 = styled.h4<{ isDarkMode: boolean }>`
  font-size: 12rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 400;
  letter-spacing: 6px;
  line-height: normal;
  letter-spacing: 4px;
`;
export const Heading03_Exclusion = styled.h3<{ isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 6px;
  line-height: normal;
  letter-spacing: 4px;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 2.2rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.6rem;
  }
`;

export const Heading03 = styled.h3<{ isDarkMode: boolean }>`
  font-size: 4.8rem;
  letter-spacing: 2px;
  line-height: normal;
  @media (max-width: ${breakpoints.desktopM}px) {
    font-size: 3.6rem;
  }
`;
export const Heading04 = styled.h2<{ isDarkMode: boolean }>`
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4px;
  @media (max-width: ${breakpoints.desktopXS}px) {
    font-size: 2.2rem;
  }
  @media (max-width: ${breakpoints.tabletS}px) {
    font-size: 1.6rem;
  }
`;
