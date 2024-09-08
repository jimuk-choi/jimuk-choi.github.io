import styled from "@emotion/styled";

interface MainSectionProps {
  variant?: "primary" | "secondary";
}

export const MainSectionTitleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainSectionTitleWrapperInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainSectionTitle = styled.h1<
  MainSectionProps & { isDarkMode: boolean }
>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  font-size: 16rem;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 20px;
  line-height: normal;
`;

export const Heading01 = styled.h1<MainSectionProps & { isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  width: 100%;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 10px;
  line-height: normal;
  letter-spacing: 4px;
`;

export const Heading02 = styled.h2<MainSectionProps & { isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 6px;
  line-height: normal;
  letter-spacing: 4px;
`;
